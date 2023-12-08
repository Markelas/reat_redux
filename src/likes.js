import {connect} from "react-redux"; //Старый метод подключения
//Новые, с помощью хуков

function Likes(props) {
    console.log(props)
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapState', state)
    return {
        likes: state.likes
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onIncrementLikes: () => {
            console.log('click')
            const action = { type: 'INCREMENT'};
            dispatch(action);
        },
        onDecrementLikes: () => {
            console.log('click decrement')
            const action = { type: 'DECREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
