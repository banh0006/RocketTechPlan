import { handleResponse, handleError } from "./apiUtils"
import axios from 'axios'

// Hardcode the url here
const URL = 'https://jsonplaceholder.typicode.com/photos'

export function getPhotos() {
    return axios.get(URL)
        .then(handleResponse)
        .catch(handleError)
}