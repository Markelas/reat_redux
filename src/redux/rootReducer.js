import {combineReducers} from "redux"; //С помощью него мы можем объединять редюсеры для компонентов
import {likesReducer} from "./likesReducer";
import {inputReducer} from "./inputReducer";


//Импортируем сюда редюсеры, чтобы их объединить
export const rootReducer = combineReducers({
    likesReducer,
    inputReducer
});
