import React, { useEffect } from "react";
import './style.css'
import LogoCinema from '../img/ebv.id 2.png'
import { Link, useParams } from "react-router-dom";
import Placeholder from '../img/placeholder.png'
import Calender from '../img/calendar.png'
import { useDispatch, useSelector } from "react-redux";
import { GetSchedulebyId } from "../../Redux/actions/Schedule";

const Showtime = () => {
    let { id } = useParams()

    const dispatch = useDispatch()

    const { data } = useSelector((state) => state.schedule)

    const dataSchedule = data?.data?.data

    useEffect(() => {
        dispatch(GetSchedulebyId(id))
    }, [])

    return (
        <>
            <p style={{
                fontSize: 20,
                fontWeight: 'bolder',
                margin: '2% 0%'
            }}>Showtimes and Tickets</p>
            <div style={{
                width: '30%',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '2%'
            }}>
                <div style={{
                    background: '#d3d4d6',
                    borderRadius: 4,
                    display: 'flex',
                    width: '40%',
                    padding: '5% 5%',
                    marginRight: '3%'
                }}>
                    <img src={Calender} style={{
                        width: 20,
                        marginRight: 10
                    }}></img>
                    <select style={{
                        width: '100%',
                        border: 'none',
                        background: 'none',
                        outline: 'none'
                    }}>
                        <option>Date</option>
                    </select>
                </div>
                <div style={{
                    background: '#d3d4d6',
                    borderRadius: 4,
                    display: 'flex',
                    width: '40%',
                    padding: '5% 5%'
                }}>
                    <img src={Placeholder} style={{
                        width: 20,
                        marginRight: 10
                    }}></img>
                    <select style={{
                        width: '100%',
                        border: 'none',
                        background: 'none',
                        outline: 'none'
                    }}>
                        <option>Place</option>
                    </select>
                </div>
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: '3%',
                justifyContent: 'left',
                alignContent: 'center'
            }}>
                {dataSchedule?.map((item) => {
                    return (
                        <div className="card-schedule">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <img src={`${process.env.REACT_APP_URL_BE}/uploads/${item.logo_cinema}`} style={{
                                    width: 150,
                                    height: 45,
                                    marginRight: 20,
                                }}></img>
                                <div>
                                    <p style={{
                                        fontWeight: 'bolder',
                                        fontSize: 20,
                                        margin: 0,
                                        paddingBottom: 10
                                    }}>{item.cinema}</p>
                                    <p style={{
                                        color: 'grey',
                                        fontSize: 15,
                                        margin: 0,
                                        lineHeight: 1.5
                                    }}>{`${item.addres}
                                    ${item.place}`}</p>
                                </div>
                            </div>
                            <hr />
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignContent: 'center',
                                justifyContent: 'left'
                            }}>
                                {item.showtime?.map((item) => {
                                    return (
                                        <div className="time-card">{item}</div>
                                    )
                                })}
                                {/* <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div>
                                <div className="time-card">08.30</div> */}
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: 20
                            }}>
                                <p>Price</p>
                                <p style={{
                                    fontWeight: 'bolder',
                                    letterSpacing: 2
                                }}>{`${item.price}/seat`}</p>
                            </div>
                            <button className="btn-booking"><Link to={'/booking'}>Book Now</Link></button>
                        </div>
                    )
                })}
                {/* <div className="card-schedule">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'left'
                    }}>
                        <img src={LogoCinema} style={{
                            width: 150,
                            height: 45,
                        }}></img>
                        <div>
                            <p style={{
                                fontWeight: 'bolder',
                                fontSize: 20,
                                margin: 0,
                                paddingBottom: 10
                            }}>ebv.id</p>
                            <p style={{
                                color: 'grey',
                                fontSize: 15,
                                margin: 0,
                                lineHeight: 1.5
                            }}>Whatever street No.12. <br /> South Purwokerto</p>
                        </div>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center',
                        justifyContent: 'left'
                    }}>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 20
                    }}>
                        <p>Price</p>
                        <p style={{
                            fontWeight: 'bolder',
                            letterSpacing: 2
                        }}>$10.00/seat</p>
                    </div>
                    <button className="btn-booking"><Link to={'#'}>Book Now</Link></button>
                </div> */}
                {/* <div className="card-schedule">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <img src={LogoCinema} style={{
                            width: 150,
                            height: 45,
                        }}></img>
                        <div>
                            <p style={{
                                fontWeight: 'bolder',
                                fontSize: 20,
                                margin: 0,
                                paddingBottom: 10
                            }}>ebv.id</p>
                            <p style={{
                                color: 'grey',
                                fontSize: 15,
                                margin: 0,
                                lineHeight: 1.5
                            }}>Whatever street No.12. <br /> South Purwokerto</p>
                        </div>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center',
                        justifyContent: 'left'
                    }}>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 20
                    }}>
                        <p>Price</p>
                        <p style={{
                            fontWeight: 'bolder',
                            letterSpacing: 2
                        }}>$10.00/seat</p>
                    </div>
                    <button className="btn-booking"><Link to={'#'}>Book Now</Link></button>
                </div>
                <div className="card-schedule">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <img src={LogoCinema} style={{
                            width: 150,
                            height: 45,
                        }}></img>
                        <div>
                            <p style={{
                                fontWeight: 'bolder',
                                fontSize: 20,
                                margin: 0,
                                paddingBottom: 10
                            }}>ebv.id</p>
                            <p style={{
                                color: 'grey',
                                fontSize: 15,
                                margin: 0,
                                lineHeight: 1.5
                            }}>Whatever street No.12. <br /> South Purwokerto</p>
                        </div>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center',
                        justifyContent: 'left'
                    }}>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 20
                    }}>
                        <p>Price</p>
                        <p style={{
                            fontWeight: 'bolder',
                            letterSpacing: 2
                        }}>$10.00/seat</p>
                    </div>
                    <button className="btn-booking"><Link to={'#'}>Book Now</Link></button>
                </div>
                <div className="card-schedule">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <img src={LogoCinema} style={{
                            width: 150,
                            height: 45,
                        }}></img>
                        <div>
                            <p style={{
                                fontWeight: 'bolder',
                                fontSize: 20,
                                margin: 0,
                                paddingBottom: 10
                            }}>ebv.id</p>
                            <p style={{
                                color: 'grey',
                                fontSize: 15,
                                margin: 0,
                                lineHeight: 1.5
                            }}>Whatever street No.12. <br /> South Purwokerto</p>
                        </div>
                    </div>
                    <hr />
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignContent: 'center',
                        justifyContent: 'left'
                    }}>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                        <div className="time-card">08.30</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 20
                    }}>
                        <p>Price</p>
                        <p style={{
                            fontWeight: 'bolder',
                            letterSpacing: 2
                        }}>$10.00/seat</p>
                    </div>
                    <button className="btn-booking"><Link to={'#'}>Book Now</Link></button>
                </div> */}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                margin: '3% 0'
            }}>
                <hr style={{
                    width: '43%',
                    color: 'grey',
                }}></hr>
                <Link to={'#'} style={{
                    fontWeight: 'bolder',
                    textDecoration: 'none',
                    color: '#5424d6',
                }}>view more</Link>
                <hr style={{
                    width: '43%',
                    color: 'grey',
                }}></hr>
            </div>
        </>
    )
}

export default Showtime