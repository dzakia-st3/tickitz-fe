import React, { useState } from 'react'
import Account from './Account'
import Order from './Order'
import './style.css'

const AccountOrder = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <>
      <div className='box-tabs'>
        <div className='bloc-tabs'>
          <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Account Setting</div>
          <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Order History</div>
        </div>
      </div>
      <div className='content-tabs'>
        <div className={toggleState === 1 ? "card-history active-content" : "card-history"}><Account /></div>
        <div className={toggleState === 2 ? "card-history active-content" : "card-history"}><Order /></div>
      </div>
    </>
  )
}

export default AccountOrder