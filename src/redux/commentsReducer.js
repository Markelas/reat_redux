import {COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD} from "./types"; //Импортируем типы

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    //Получаем экшен, перезаписываем state, добавляя новые данные
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data] //При обновлении массива, сначала добавляем существующие комментарии, потом добавляем комментарий из action
            }
        case COMMENTS_LOAD:
            //Получаем комментарии с сервера
            const commentsNew = action.data.map(res => {
                //Проходимся по массиву и возвращаем объект с полями text и id
                return {
                    text: res.name,
                    id: res.id
                }
            })
            return {
                ...state,
                comments: commentsNew//При обновлении массива, сначала добавляем существующие комментарии, потом добавляем комментарий из action
            }
        case COMMENT_UPDATE:
            const {data} = action; //Комментарий, который мы обновили
            const {comments} = state; //Комментарии
            const itemIndex = comments.findIndex(res => res.id === data.id) //Ищем по индексу комментарий, который хотим поменять

            const nextComments = [
                //Вырезаем ненужный комментарий, вначале копируем первую часть, без старого комментарий
                ...comments.slice(0, itemIndex),
                //Вставялем туда наш новый комментарий
                data,
                //Добавляем после него все оставшиеся
                ...comments.slice(itemIndex +1)
            ];

            return {
                ...state,
                comments: nextComments //При обновлении массива, сначала добавляем существующие комментарии, потом добавляем комментарий из action
            }
        case COMMENT_DELETE:
            return (()=> {
                const {id} = action; //Комментарий, который мы обновили
                const {comments} = state; //Комментарии
                const itemIndex = comments.findIndex(res => res.id === id) //Ищем по индексу комментарий, который хотим поменять

                const nextComments = [
                    //Вырезаем удаленный комментарий, затем, добавляем остальные
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex +1)
                ];
                return {
                    ...state,
                    comments: nextComments
                }
            })();

        default:
            return state;
    }
}
