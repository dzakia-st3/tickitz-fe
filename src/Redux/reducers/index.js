import { combineReducers } from "redux"
import Movies from './Movies'
import Auth from './Auth'
import MoviesCUD from './MoviesCUD'
import Schedule from './Schedule'

const rootReducer = combineReducers ({
    movies: Movies, 
    moviesCud: MoviesCUD,
    auth: Auth,
    schedule: Schedule,
})
export default rootReducer