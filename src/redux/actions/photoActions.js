import * as actionTypes from './actionTypes'
import * as photoAPIs from '../../api/photoAPIs'

export function loadPhotosSuccess(photos) {
    return { type: actionTypes.LOAD_PHOTOS_SUCCESS, photos }
}

export function loadPhotos() {
    return function(dispatch) {
        return photoAPIs
            .getPhotos()
            .then(res => {
                dispatch(loadPhotosSuccess(res))
            })
            .catch(error => {
                console.error(error)
                throw error
            })
    }
}