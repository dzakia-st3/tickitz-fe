import React from 'react'
import './style.css'

const PersonalInfo = () => {
  return (
    <>
      <div className="text-ms" style={{ paddingTop: '5%', marginBottom: '2%' }}>Personal Info</div>
      <div className="order-box">
        <div className='personal-box'>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>Full Name</p>
            <input type='text' style={{
              height: '45px',
              marginBottom: '5%',
              paddingLeft: '5%',
              outline: 'none'
            }}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>Email</p>
            <input type='text' style={{
              height: '45px',
              marginBottom: '5%',
              paddingLeft: '5%',
              outline: 'none'
            }}></input>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>Phone Number</p>
            <div className='phone-number-box' style={{ display: 'flex', alignItems: 'center'}}>
              <p>+62</p>
              <hr style={{ height: '30px', marginLeft: 15, marginRight: 15 }}></hr>
              <input type='text' style={{
                border: 'none',
                height: '30px',
                width: '100%',

                outline: 'none'
              }}></input>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo