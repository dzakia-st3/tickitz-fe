import React from 'react'
import './style.css'

const Details = () => {
    return (
        <div className='details'>
            <div className="card3">
                {/* <img className='' src={`https://starfish-app-2mjf6.ondigitalocean.app/uploads/${item.image}`} alt={item.title} title={item.title} /> */}
            </div>
            <div>
                <div>
                    <div>
                        <h2>Spider-Man: Homecoming</h2>
                        <h3>Adventur, Action, Sci-Fi</h3>
                    </div>
                    <div className='text2'>
                        <div>
                            <div>
                                <h5>Release date</h5>
                                <h4>June 28, 2017</h4>
                            </div>
                            <div>
                                <h5>Duration</h5>
                                <h4>2 hours 13 minutes</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5>Directed by</h5>
                                <h4>Jon Watss</h4>
                            </div>
                            <div>
                                <h5>Casts</h5>
                                <h4>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </div>
            </div>

        </div>
    )
}

export default Details
