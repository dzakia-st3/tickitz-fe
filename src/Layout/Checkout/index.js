import React from 'react'
import { ChoosePayment, PaymentInfo, PersonalInfo } from '../../Components/Checkout'
import Layout from '../../Components/Layout global/Layout'

const CheckoutLayout = () => {
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
          <PaymentInfo />
          <ChoosePayment />
        </div>
        <div style={{
          width: '25%',
          marginLeft: '3%'
        }}>
          <PersonalInfo />
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutLayout