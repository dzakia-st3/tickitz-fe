import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import Gpay from '../img/GPay.jpg'
import Visa from '../img/VISA.jpg'
import Gopay from '../img/gopay.jpg'
import Paypal from '../img/paypal.jpg'
import Dana from '../img/dana.jpg'
import BCA from '../img/BCA.jpg'
import BRI from '../img/bri.jpg'
import OVO from '../img/OVO.jpg'

const ChoosePayment = () => {
  return (
    <>
      <div className="text-ms" style={{ marginTop: '5%' }}>Choose a Payment Method</div>
      <div className="payment-method">
        <div className='payment-method-card'>
          <div className='card-pm'>
            <img src={Gpay} />
          </div>
          <div className='card-pm'>
            <img src={Visa} />
          </div>
          <div className='card-pm'>
            <img src={Gopay} />
          </div>
          <div className='card-pm'>
            <img src={Paypal} />
          </div>
          <div className='card-pm'>
            <img src={Dana} />
          </div>
          <div className='card-pm'>
            <img src={BCA} />
          </div>
          <div className='card-pm'>
            <img src={BRI} />
          </div>
          <div className='card-pm'>
            <img src={OVO} />
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <hr style={{width: '45%'}}/>
          Or
          <hr style={{width: '45%'}}/>
        </div>
        <p style={{textAlign: 'center'}}>Pay via cash. <Link to={'#'} style={{textDecoration: 'none', color: '#5424d6', fontWeight: 'bolder'}}>See how it work</Link></p>
      </div>
      <div className="button-seat">
        <button className="btn-change"><Link to={'/booking'}>Previous step</Link></button>
        <button className="btn-checkout"><Link to={'/profile'}>Pay your order</Link></button>
      </div>
    </>
  )
}

export default ChoosePayment
