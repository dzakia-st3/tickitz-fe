import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import MainLogo from '../img/Tickitz 1.png'
import ebv from '../img/ebv.id 2.png'
import CineOne from '../img/CineOne21 2.png'
import hiflix from '../img/hiflix 2.png'
import twitter from '../img/eva_twitter-outline.png'
import ig from '../img/bx_bxl-instagram.png'
import fb from '../img/eva_facebook-outline.png'
import youtube from '../img/feather_youtube.png'

const Footer = () => {
    return (
        <>
            <section className="end">
                <div className="end-row">
                    <div className="tickitz-logo">
                        <img src={MainLogo}/>
                        <p>Stop waiting in line. Buy tickets <br/> conveniently, watch movies quietly.</p>
                    </div>
                    <div className="explore">
                        <h2>Explore</h2>
                            <div className="link">
                                <Link to="/">Home</Link>
                                <Link to="/movies">List Movie</Link>
                            </div>
                    </div>
                    <div className="ourSponsor">
                        <h2>Our Sponsor</h2>
                            <div className="cinema-logo">
                                <img src={ebv} />
                                <img src={CineOne} />
                                <img src={hiflix} />
                            </div>
                    </div>
                    <div className="followUs">
                        <h2>Follow us</h2>
                            <div className="container">
                                <div className="socialMedia">
                                    <div className="socialMedia-logo">
                                        <img src={fb} />
                                        <img src={ig}/>
                                        <img src={twitter} />
                                        <img src={youtube} />
                                    </div>
                                    <div className="socialMedia-link">
                                        <Link to="/">Tickitz Cinema id</Link>
                                        <Link to="/">tickitz.id</Link>
                                        <Link to="/">tickitz.id</Link>
                                        <Link to="/">Tickitz Cinema id</Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <p>© 2020 Tickitz. All Rights Reserved.</p>
            </section> 
        </>
    )
}

export default Footer
