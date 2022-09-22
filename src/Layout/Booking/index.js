import React from 'react'
import { ChangeMovie, Seat, OrderInfo } from '../../Components/Booking'
import Layout from '../../Components/Layout global/Layout'

const BookingLayout = () => {
  return (
    <Layout>
      <div style={{
        display : 'flex',
        justifyContent: 'center',
        backgroundColor: '#e3e5e9',
        paddingTop: '2%'
        }}>
        <div style={{
          width: '55%'
        }}>
          <ChangeMovie />
          <Seat />
        </div>
        <div style={{
          width: '25%',
          marginLeft: '3%'
        }}>
          <OrderInfo />
        </div>
      </div>
    </Layout>
  )
}

export default BookingLayout