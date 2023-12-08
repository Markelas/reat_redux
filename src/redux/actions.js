//Экшен криейтеры

import  {INCREMENT, DECREMENT} from "./types";

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
