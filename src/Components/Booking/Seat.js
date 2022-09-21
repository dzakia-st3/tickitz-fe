import React, { useContext, useCallback, createContext } from "react";
import { Link } from "react-router-dom";
// import SeatStatus from "./SeatStatus";
// import seatContext from "./SeatContext";
import './style.css'

const Seat = () => {
    return (
        <>
        <div className="text-ms" style={{marginTop: '5%'}}>Choose Your Seat</div>
        <div className="movie-selected">
            <p>Seating key</p>
        </div>
        <div className="button-seat">
        <button className="btn-change"><Link to={'/movies'}>Change your movie</Link></button>
        <button className="btn-checkout"><Link to={'/checkout'}>Checkout Now</Link></button>
        </div>
        </>
    )
    // const seats = []
    // const row = 6
    // const column = 8
    // let { addSeat, removeSeat } = useContext(seatContext)
    // const getSeatsId = JSON.parse(localStorage.getItem('seatsId'))

    // const onClickHandle = useCallback((e) => {
    //     if (
    //         e.target.classList.contains('selected') &&
    //         !e.target.classList.contains('Sold')
    //     ) {
    //         e.target.classList.remove('selected')
    //         removeSeat(e.target.dataset.id)
    //     } else if (
    //         !e.target.classList.contains('selected') &&
    //         !e.target.classList.contains('Sold')
    //     ) {
    //         e.target.classList.add('selected')
    //         addSeat(e.target.dataset.id)
    //     }
    // }, [addSeat, removeSeat])

    // const soldFunc = (i, j) => {
    //     if (i === 1 && j === 2) {
    //         return true;
    //     } else if (i === 1 && j === 3) {
    //         return true;
    //     } else if (i === 2 && j === 0) {
    //         return true;
    //     } else if (i === 2 && j === 1) {
    //         return true;
    //     } else if (i === 3 && j === 1) {
    //         return true;
    //     } else if (i === 3 && j === 2) {
    //         return true;
    //     } else if (i === 3 && j === 3) {
    //         return true;
    //     }

    //     return false
    // }

    // const selectedFunc = (i, j) => {
    //     if (getSeatsId) {
    //         for (let item of getSeatsId) {
    //             if (+item === i * column + j + 1) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false
    // }

    // for (let i = 0; i < row; i++) {
    //     seats[i] = [];
    //     for (let j = 0; j < column; j++) {
    //         seats[i][j] = (
    //             <SeatStatus
    //                 id={i * column + j + 1}
    //                 key={i * column + j + 1}
    //                 Sold={soldFunc(i, j)}
    //                 Selected={selectedFunc(i, j)}
    //                 onclick={onClickHandle}
    //             />
    //         )
    //     }
    // }
    // return (
    //     <>
    //         {seats.map((row, i) => (
    //             <div className="row" key={i}>
    //                 {row.map((column, j) => column)}
    //             </div>
    //         ))}
    //     </>
    // )
}

export default Seat