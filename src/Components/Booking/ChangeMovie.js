import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const ChangeMovie = () => {
    return (
        <>
        <div className="text-ms">Movie Selected</div>
        <div className="movie-selected">
            <p>Spider-Man : Homecoming</p>
            <button className="btn-ms"><Link to={'/movies'}>Change Movie</Link></button>
        </div>
        </>
    )
}

export default ChangeMovie