import {INCREMENT, DECREMENT} from "./types"; //Импортируем типы

const initialState = {
    likes: 0
}

export const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        default:
            return state;
    }
}
