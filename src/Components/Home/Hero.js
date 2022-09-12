import React from 'react'
import './style.css'
import spd from '../img/spd.png'
import lion from '../img/lion.png'
import wmn from '../img/wmn.png'

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container-hero">
                    <img className="spd" src={spd} />
                    <img className="lion" src={lion} />
                    <img className="wmn" src={wmn} />
                </div>
                <div className="text-hero">
                    <div className="text-inner">
                        <h1>Nearest Cinema, Newest Movie,</h1>
                        <h2>Find out now!</h2>  
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero