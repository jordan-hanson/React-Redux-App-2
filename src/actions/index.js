import axios from 'axios';

export const FETCHING_GIF = 'FETCHING_GIF';
export const FETCHING_GIF_SUCCESS = 'FETCHING_GIF_SUCCESS';
export const FETCHING_GIF_FAILURE = 'FETCHING_GIF_FAILURE';

export const getGif = () => dispatch => {
    dispatch({ type: FETCHING_GIF })

    axios
        .get('http://api.icndb.com/jokes/random')
        .then(res => {
            console.log(res)
            console.log(res.data.value.joke)
            const jokeData = res.data.value.joke
            dispatch({ type: FETCHING_GIF_SUCCESS, payload: jokeData })
        })
        .catch(err => {
            dispatch({ FETCHING_GIF_FAILURE, payload: err })
        })
}

