import {COMMENT_CREATE} from "./types";
import {errorOn} from './actions'
//Делаем проверку на плохие слова
const badWords = ['козел', 'осел', 'дурак']; //Массив с плохими словами

export function spamFilter({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === COMMENT_CREATE) {
                const hasBadWords = badWords.some(item => action.data.text.toLowerCase().includes(item)); //Проходимся по словам, которые получили в инпуте и проверяем, есть ли какое-либо слово из массива
                if (hasBadWords) {
                    return dispatch(errorOn('Уважайте людей, не пишите злые комментарии'))
                }
            }
            return next(action)
        }
    }
}
