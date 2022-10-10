import { combineReducers } from "redux"
import Movies from './Movies'
import Auth from './Auth'
import MoviesCUD from './MoviesCUD'
import Schedule from './Schedule'
import Seat from './Seat'
import SeatCUD from './SeatCUD'

const rootReducer = combineReducers ({
    movies: Movies, 
    moviesCud: MoviesCUD,
    auth: Auth,
    schedule: Schedule,
    seat: Seat,
    seatCud: SeatCUD
})
export default rootReducer