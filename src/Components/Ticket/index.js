import React from 'react'
import logo from '../img/tickitz 1-white.png'
import QRCode from '../img/QRCode.png'
import './style.css'

const ProofPayment = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}>
      <p style={{
        fontWeight: 'bolder',
        fontSize: 'larger'
      }}>Proof of Payment</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}>
          <div className='ticket-card'>
            <div className="top-ticket" style={{
              display: 'flex',
              alignItems: 'center',
              background: '#5424d6',
              padding: '2% 5%',
              justifyContent: 'space-between',
              borderRadius: '10px 0px 0 0'
            }}>
              <img src={logo} style={{
                width: '25%',
              }}></img>
              <p style={{
                color: 'white'
              }}>Admit One</p>
            </div>
            <div style={{
              padding: '2% 5%',
            }}>
              <p style={{ color: 'grey' }}>Movie</p>
              <p style={{
                fontWeight: 'bolder',
                fontSize: 'larger'
              }}>Spider-Man: Homecoming</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '6%'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingBottom: '5%'
                }}>
                  <div>
                    <p style={{ color: 'grey' }}>Date</p>
                    <p style={{ fontWeight: 'bolder' }}>07 July</p>
                  </div>
                  <div>
                    <p style={{ color: 'grey' }}>Count</p>
                    <p style={{ fontWeight: 'bolder' }}>3 pieces</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div>
                    <p style={{ color: 'grey' }}>Time</p>
                    <p style={{ fontWeight: 'bolder' }}>02:00 pm</p>
                  </div>
                  <div>
                    <p style={{ color: 'grey' }}>Seats</p>
                    <p style={{ fontWeight: 'bolder' }}>C4, C5, C6</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div>
                    <p style={{ color: 'grey' }}>Category</p>
                    <p style={{ fontWeight: 'bolder' }}>Action</p>
                  </div>
                  <div>
                    <p style={{ color: 'grey' }}>Price</p>
                    <p style={{ fontWeight: 'bolder' }}>$30.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ticket-card-right'>
            <div className="top-ticket" style={{
              display: 'flex',
              alignItems: 'center',
              background: '#5424d6',
              padding: '2% 5%',
              justifyContent: 'center',
              borderRadius: '0px 10px 0 0',
            }}>
              <img src={logo} style={{
                width: '71%',
              }}></img>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '20% 0'
            }}>
              <img src = {QRCode}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProofPayment