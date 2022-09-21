import React from 'react'
import './style.css'

const PaymentInfo = () => {
  return (
    <>
      <div className="text-ms">Payment Info</div>
      <div className="payment-info">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 17}}>Date & Time</p>
          <p style={{ fontWeight: '700', fontSize: 17}}>Tuesday, 07 July 1717 at 02.00</p>
        </div>
        <hr style={{width: '100%'}}/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 17}}>Movie Title</p>
          <p style={{ fontWeight: '700', fontSize: 17}}>Spider-Man: Homecoming</p>
        </div>
        <hr style={{width: '100%'}}/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 17}}>Cinema name</p>
          <p style={{ fontWeight: '700', fontSize: 17}}>CineOne21 Cinema</p>
        </div>
        <hr style={{width: '100%'}}/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 17}}>Number of tickets</p>
          <p style={{ fontWeight: '700', fontSize: 17}}>3 pieces</p>
        </div>
        <hr style={{width: '100%'}}/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 17}}>Total payment</p>
          <p style={{ fontWeight: '700', fontSize: 17}}>$30.00</p>
        </div>  
      </div>
    </>
  )
}

export default PaymentInfo
