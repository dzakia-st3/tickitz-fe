import { combineReducers } from "redux"
import Movies from '../reducers/Movies'
import Auth from '../reducers/Auth'
import MoviesCUD from '../reducers/MoviesCUD'

const rootReducer = combineReducers ({
    movies: Movies, 
    moviesCud: MoviesCUD,
    auth: Auth
})
export default rootReducer