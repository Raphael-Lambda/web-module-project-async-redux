import { combineReducers } from "redux";

import charactersReducer from './charactersReducer'

const reducer = combineReducers({
    charactersReducer,
})

export default reducer