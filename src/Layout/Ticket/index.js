import React from 'react'
import Ticket from '../../Components/Ticket'
import Layout from '../../Components/Layout global/Layout'

const TicketLayout = () => {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e3e5e9',
        paddingTop: '2%'
      }}>
        <Ticket />
      </div>
    </Layout>
  )
}

export default TicketLayout