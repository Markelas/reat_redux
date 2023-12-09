import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import uniqud from "uniqid"
import {commentCreate, commentsLoad} from "./redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state=>{
        const {commentsReducer} = state;
        return commentsReducer.comments;
    })
    const dispatch = useDispatch() //Используем useDispatch из библиотеки redux

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => { //Сабмитим комментарий
        e.preventDefault(); //Отключаем обновление страницы
        const id = uniqud(); //С помощью библиотеки генерируем случайный id
        console.log(textComment, id)
        dispatch(commentCreate(textComment, id)) //Отправляем этот экшен
        setTextComment('')
    }

    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    return(
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type="text" value={textComment} onChange={handleInput} placeholder="Введите комментарий и нажмите Enter"/>
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Comments
