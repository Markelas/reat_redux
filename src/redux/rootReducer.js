import {combineReducers} from "redux"; //С помощью него мы можем объединять редюсеры для компонентов
import {likesReducer} from "./likesReducer";
import {inputReducer} from "./inputReducer";
import {commentsReducer} from "./commentsReducer";
import {appReducer} from "./appReducer";


//Импортируем сюда редюсеры, чтобы их объединить
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer
});
