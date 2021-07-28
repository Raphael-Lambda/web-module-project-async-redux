import axios from 'axios'

export const CHARACTERS_LOADING = 'CHARACTERS_LOADING'
export const CHARACTERS_LOADING_SUCCESS = 'CHARACTERS_LOADING_SUCCESS'
export const CHARACTERS_LOADING_FAIL = 'CHARACTERS_LOADING_FAIL'

const URL = 'https://rickandmortyapi.com/api/character'


export const loadCharacterList = () => {
    return dispatch => {
        dispatch(charactersLoading())
        axios.get(URL)
            .then(resp => {
                dispatch(charactersLoadingSuccess(resp.data.results))
            })
            .catch(err => {
                dispatch(charactersLoadingFail("An error occurred, please try to reload the page"))
            })
    }
}


export const charactersLoading = () => {
    return({
        type: CHARACTERS_LOADING
    })
}

export const charactersLoadingSuccess = value => {
    return({
        type: CHARACTERS_LOADING_SUCCESS,
        payload: value
    })
}

export const charactersLoadingFail = value => {
    return({
        type: CHARACTERS_LOADING_FAIL,
        payload: value
    })
}
