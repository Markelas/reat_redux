//Экшен криейтеры

import  {INCREMENT, DECREMENT, INPUT_TEXT} from "./types";

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

