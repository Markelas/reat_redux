//Экшен криейтеры

import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF
} from "./types";

export function incrementLikes() { //Функции возвращают тип экшена
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function commentsLoad() {
    //Запрос комментариев
    return async dispatch => {
        dispatch(loaderOn()); //Вызываем и сообщаем, что он должен крутиться
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const jsonData = await response.json();
            //Преобразовываем в JSON
            dispatch({
                type: COMMENTS_LOAD,
                data: jsonData //Комментарии в виде массива
            })
            dispatch(loaderOff()); //Отключаем loader
        } catch (e) {
            dispatch(errorOn('Ошибка API'));
            console.log(e)
            dispatch(loaderOff()); //Отключаем loader
        }
    }
}

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return dispatch => {
        dispatch({ //Показываем сообщение об ошибке
            type: ERROR_DISPLAY_ON,
            text
        })

        setTimeout(()=> {
            dispatch(errorOff());
        }, 2000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF
    }
}

