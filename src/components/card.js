import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGif } from '../actions';

const Card = ({ gif, isFetching, error, getGif }) => {
    useEffect(() => {
        getGif()
    })

    if (isFetching) {
        return <h2>Gif is fetching</h2>
    }
    if (error) {
        return <h2>Woops! Something went wrong.Try again.</h2>
    }

    const handleClick = () => {
        getGif()
    }
    return (
        <div>
            <h2>Click for a Gif</h2>
            <p>
                {gif}
            </p>
            <button onClick={handleClick}>Gif Me.</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        gif: state.gif,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getGif })(Card)