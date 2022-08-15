import React from 'react'
import './style.css'

const Join = () => {
    return (
        <>
             <section className="join">
                <div className="text">
                    <h2>Be the vanguard of the</h2>
                    <h3>Moviegoers</h3>
                </div>
                <div className="email">
                    <input type="email" className="form-control" id="email" placeholder="Type your email" />
                    <input type="button" value="Join Now" name="" />
                </div>
                <div className="smallText">
                    <p>By joining you as a Tickitz member, <br/> we will always send you the latest updates via email.</p>
                </div>
            </section>
        </>
    )
}

export default Join