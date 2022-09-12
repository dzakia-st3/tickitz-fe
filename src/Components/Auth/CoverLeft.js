import React from "react";
import './auth.css'
import Background from '../img/backgroundImage.png'
import MainLogoWhite from '../img/tickitz 1-white.png'

const coverLeft = () => {
    return (
    <>
        <div class="imgLeft">
            <img src={Background} alt="cover" />
            <div class="tickitz">
                <img src={MainLogoWhite} alt="tickitz" />
                <h2>wait, watch, wow!</h2>
            </div>  
        </div>
    </>
    )
}

export default coverLeft;