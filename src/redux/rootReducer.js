import {combineReducers} from "redux"; //С помощью него мы можем объединять редюсеры для компонентов
import {likesReducer} from "./likesReducer";
import {inputReducer} from "./inputReducer";
import {commentsReducer} from "./commentsReducer";


//Импортируем сюда редюсеры, чтобы их объединить
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer
});
