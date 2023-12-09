import {useDispatch, useSelector} from "react-redux";
import {inputText} from "./redux/actions";


function Title(props){
    console.log('props title', props)
    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputText(e.target.value)) //Передаем наш action
    }

    return(
        <div className="card-tite">
            <div className='card-title-top'>
                <input type="text" onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}


export default Title;
