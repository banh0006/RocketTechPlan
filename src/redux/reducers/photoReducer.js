import * as actionTypes from '../actions/actionTypes'

export default function movieReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOAD_PHOTOS_SUCCESS: 
            return action.photos
        default:
            return state
    }
}