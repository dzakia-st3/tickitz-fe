import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../img/profile.png'
import './style.css'

const InfoProfile = () => {
    return (
        <>
            <div className="profile-box">
                <div className="text-ms" style={{ marginTop: '10%'}}>INFO</div>
                <div className='personal-box' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={Profile}/>
                    <p style={{fontWeight: 'bolder', fontSize: 18}}>Jonas El Rodriguez</p>
                    <p style={{margin: 0, marginBottom: '4%'}}>Moviegoers</p>
                    <hr style={{width: '100%'}}/>
                    <button className='btn-info-profile'><Link to={'#'}>Logout</Link></button>
                </div>
            </div>
        </>
    )
}

export default InfoProfile