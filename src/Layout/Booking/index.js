import React from 'react'
import '../../Components/Booking/style.css'
import { ChangeMovie, Seat, OrderInfo } from '../../Components/Booking'
import Layout from '../../Components/Layout global/Layout'

const BookingLayout = () => {
  return (
    <Layout>
      {/* <div className='booking-layout'>
        <div className='booking-left'>
          <ChangeMovie />
          <Seat />
        </div>
        <div className='booking-right'>
          <OrderInfo />
        </div>
      </div> */}
      <Seat/>
    </Layout>
  )
}

export default BookingLayout