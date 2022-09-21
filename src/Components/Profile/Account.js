import React from 'react'

const account = () => {
    return (
        <>
            <div>
                <div className="order-box">
                    <p style={{
                        fontWeight: 'bolder',
                        fontSize: 'larger',
                        paddingTop: 20
                    }}>Details Information</p>
                    <hr style={{ width: '100%' }}></hr>
                    <div className='personal-box' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingTop: 10,
                        paddingBottom: 40,
                    }}>
                        <div style={{ width: '45%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 13 }}>First Name</p>
                                <input type='text' style={{
                                    height: '40px',
                                    marginBottom: '5%',
                                    width: '100%',
                                    outline: 'none'
                                }}></input>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 13 }}>Email</p>
                                <input type='text' style={{
                                    height: '40px',
                                    width: '100%',
                                    outline: 'none'
                                }}></input>
                            </div>
                        </div>
                        <div style={{ width: '45%' }}>
                            <div style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                            }}>
                                <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 13 }}>Last Name</p>
                                <input type='text' style={{
                                    height: '40px',
                                    marginBottom: '5%',
                                    width: '100%',
                                    outline: 'none',
                                }}></input>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 13 }}>Phone Number</p>
                                <div className='phone-number-box' style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '45px',
                                }}>
                                    <p style={{ color: 'grey' }}>+62</p>
                                    <hr style={{ height: '27px', marginLeft: 15, marginRight: 15, color: '#DEDEDE' }}></hr>
                                    <input type='text' style={{
                                        border: 'none',
                                        height: '35px',
                                        width: '100%',
                                        outline: 'none',
                                    }}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn-booking' style={{
                width: '30%',
                height: '7%',
                padding: '2% 0',
                margin: '3% 0'
            }}>Update Changes</button>
            <div>
                <div className="order-box">
                    <p style={{
                        fontWeight: 'bolder',
                        fontSize: 'larger',
                        paddingTop: 20
                    }}>Account and Privacy</p>
                    <hr style={{ width: '100%' }}></hr>
                    <div className='personal-box' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingTop: 10,
                        paddingBottom: 40,
                    }}>
                        <div style={{ width: '45%' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 13 }}>New Password</p>
                                <input type='password' style={{
                                    height: '40px',
                                    width: '100%',
                                    outline: 'none',
                                }}></input>
                            </div>
                        </div>
                        <div style={{ width: '45%' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 13 }}>Confirm Password</p>
                                <input type='password' style={{
                                    height: '40px',
                                    width: '100%',
                                    outline: 'none',
                                }}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn-booking' style={{
                width: '30%',
                height: '7%',
                padding: '2% 0',
                marginTop: '3%',
                marginBottom: '15%'
            }}>Update Changes</button>
        </>
    )
}

export default account