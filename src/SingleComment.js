import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {commentDelete, commentUpdate} from "./redux/actions";

function SingleComments({data}) {
    const [commentText, setCommentText] = useState('');
    const {text, id} = data; //Деструктуризируем наш комментарий
    const dispatch = useDispatch()

    useEffect(()=> {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleUpdate = (e) => {
        e.preventDefault(); //Убираем обновление страницы
        dispatch(commentUpdate(commentText, id)) //Отправляем action update, с данными
    }
    const handleInput = (e) => {
        setCommentText(e.target.value) //Добавляем новый комментарий
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id)) //Отправляем action для удаления по id, который мы получили в data
    }

    return(
        <form onSubmit={handleUpdate} className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComments
