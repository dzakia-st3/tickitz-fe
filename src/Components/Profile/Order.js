import React from 'react'
import { Link } from 'react-router-dom'
import LogoCinema from '../img/CineOne21 2.png'

const Order = () => {
    return (
        <>
            <div style = {{paddingBottom: '5%'}}>
                <div className="order-box" style = {{
                    marginBottom: '5%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <p style={{
                                color: 'grey',
                                fontSize: 'smaller',
                                paddingTop: 20
                            }}>Tuesday, 07 July 2020 - 04.30pm</p>
                            <p style={{
                                fontSize: 'larger',
                            }}>Spider-Man: Homecoming</p>
                        </div>
                        <img src={LogoCinema}></img>
                    </div>
                    <hr style={{ width: '100%' }}></hr>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '4%',
                        marginTop: '2%'
                    }}>
                        <button className='btn-booking' style={{
                            width: '30%',
                            height: '7%',
                            padding: '2% 0',
                        }}>Ticket in active</button>
                        <Link to={'/ticket'} style={{
                            textDecoration: 'none',
                            color: 'grey'
                        }}>See Details</Link>
                    </div>
                </div>
                <div className="order-box" style={{
                    marginBottom: '5%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <p style={{
                                color: 'grey',
                                fontSize: 'smaller',
                                paddingTop: 20
                            }}>Monday, 14 June 2020 - 02.00pm</p>
                            <p style={{
                                fontSize: 'larger',
                            }}>Avengers: End Game</p>
                        </div>
                        <img src={LogoCinema}></img>
                    </div>
                    <hr style={{ width: '100%' }}></hr>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '4%',
                        marginTop: '2%'
                    }}>
                        <button className='btn-booking' style={{
                            width: '30%',
                            height: '7%',
                            padding: '2% 0',
                            background: 'grey'
                        }}>Ticket used</button>
                        <Link to={'ticket'} style={{
                            textDecoration: 'none',
                            color: 'grey'
                        }}>See Details</Link>
                    </div>
                </div>
                <div className="order-box" style={{
                    marginBottom: '5%'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <p style={{
                                color: 'grey',
                                fontSize: 'smaller',
                                paddingTop: 20
                            }}>Monday, 14 June 2020 - 02.00pm</p>
                            <p style={{
                                fontSize: 'larger',
                            }}>Avengers: End Game</p>
                        </div>
                        <img src={LogoCinema}></img>
                    </div>
                    <hr style={{ width: '100%' }}></hr>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '4%',
                        marginTop: '2%'
                    }}>
                        <button className='btn-booking' style={{
                            width: '30%',
                            height: '7%',
                            padding: '2% 0',
                            background: 'grey'
                        }}>Ticket used</button>
                        <Link to={'/ticket'} style={{
                            textDecoration: 'none',
                            color: 'grey'
                        }}>See Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order