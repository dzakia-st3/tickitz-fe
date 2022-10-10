import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainStage from "./MainStage";
import './style.css'


const Seat = () => {
    return (
        <>
            <div className="text-ms" style={{ marginTop: '5%' }}>Choose Your Seat</div>
            <div className="choose-seat">
                <div className="screen">
                    <h3 className="text5">Screen</h3>
                    <hr className="line"/>
                </div>
                <MainStage
                    onSelectSeat={seatId => {
                        console.log("selected - " + seatId);
                    }}
                />
                <p className='text7'>Seating key</p>
                <div className="seating-key">
                    <div className="seat-note">
                        <div className="Available"></div>
                        <p className="text8"> Available</p>
                    </div>
                    <div className="seat-note">
                        <div className="Selected"></div>
                        <p className="text8"> Selected</p>
                    </div>
                    <div className="seat-note2">
                        <div className="Sold"></div>
                        <p className="text8"> Sold</p>
                    </div>
                </div>
            </div>
            <div className="button-seat">
            <button className="btn-change"><Link to={'/movies'}>Change your movie</Link></button>
            <button className="btn-checkout"><Link to={'/checkout'}>Checkout Now</Link></button>
        </div>
        </>
    )
}

export default Seat