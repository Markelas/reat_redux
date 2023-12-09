import Loader from "react-loader-spinner"
import {useSelector} from "react-redux";


const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading); // Равняется либо true, либо false
    return (
        <div className='loader-styles'>
            {/*Спиннер из библиотеки*/}
            <Loader
                type="Puff"
                color='#acd4f8'
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}

export default Spin
