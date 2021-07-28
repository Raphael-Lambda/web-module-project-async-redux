import { CHARACTERS_LOADING, CHARACTERS_LOADING_SUCCESS,CHARACTERS_LOADING_FAIL } from '../actions/charactersAction'

const initialState = {
    loading: true,
    list: [],
    error: false
}

const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case(CHARACTERS_LOADING):
            return state 
        case(CHARACTERS_LOADING_SUCCESS):
            return({
                ...state,
                loading: false,
                list: action.payload
            })
        case(CHARACTERS_LOADING_FAIL):
            return({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return state
    }
}

export default characterReducer
