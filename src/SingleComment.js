function SingleComments(props) {
    console.log('single comments', props);

    return(
        <form className='comments-item'>
            <div className='comments-item-delete'>&times;</div>
            <input type="text"/>
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComments
