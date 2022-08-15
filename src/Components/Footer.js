import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <>
            <section className="end">
                <div className="end-row">
                    <div className="tickitz-logo">
                        <img src="https://trello.com/1/cards/62b5cca6d916004161f559b4/attachments/62be73bff4eaa88ec55bd6c7/download/Tickitz1.png"/>
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
                                <img src="https://trello.com/1/cards/62b5cca6d916004161f559b4/attachments/62b5ccc5ece8e25fa1eecc8c/download/ebv.id_2.png" />
                                <img src="https://trello.com/1/cards/62b5cca6d916004161f559b4/attachments/62b5cca6d916004161f559cc/download/CineOne21_2.png" />
                                <img src="https://trello.com/1/cards/62b5cca6d916004161f559b4/attachments/62b5ccb2b24ce00792eeed57/download/hiflix_2.png" />
                            </div>
                    </div>
                    <div className="followUs">
                        <h2>Follow us</h2>
                            <div className="container">
                                <div className="socialMedia">
                                    <div className="socialMedia-logo">
                                        <img src="https://trello.com/1/cards/62c1ceb2fb77f013c9ca1c2d/attachments/62c1ceb2fb77f013c9ca1c46/download/eva_facebook-outline.png" />
                                        <img src="https://trello.com/1/cards/62c1ceb1028da45320b60785/attachments/62c1ceb1028da45320b6079d/download/bx_bxl-instagram.png" />
                                        <img src="https://trello.com/1/cards/62c1ceb387e4f38939e9689a/attachments/62c1ceb387e4f38939e968b4/download/eva_twitter-outline.png" />
                                        <img src="https://trello.com/1/cards/62c1ceb4d8e8fb1d365b312c/attachments/62c1ceb4d8e8fb1d365b3147/download/feather_youtube.png" />
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
