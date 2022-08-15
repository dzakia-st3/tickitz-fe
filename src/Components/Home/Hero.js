import React from 'react'
import './style.css'

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container-hero">
                    <img className="spd" src="https://trello.com/1/cards/62c1d15230fe802b2e7b26c9/attachments/62c1d15230fe802b2e7b26e5/download/Rectangle_33-2.png" />
                    <img className="lion" src="https://trello.com/1/cards/62c1d155920c934401e0bc00/attachments/62c1d155920c934401e0bc30/download/Rectangle_33-1.png" />
                    <img className="wmn" src="https://trello.com/1/cards/62c1d1531aa5f8233e3a5856/attachments/62c1d1531aa5f8233e3a5873/download/Rectangle_33.png" />
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