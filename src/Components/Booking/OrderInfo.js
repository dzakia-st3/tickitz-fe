import React from "react";
import './style.css'

const OrderInfo = () => {
    return (
        <>
        <div className="text-ms" style={{paddingTop: '5%', marginBottom: '2%' }}>Order Info</div>
        <div className="order-box">
            <div>
                <img/>
                <p>CineOne21 Cinema</p>
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: 'grey', fontWeight: 'lighter', fontSize: 15}}>Movie Selected</p>
                    <p style={{fontWeight: '700', fontSize: 15}}>Spider-Man: Homecoming</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: 'grey', fontWeight: 'lighter', fontSize: 15}}>Tuesday, 07 July 2020</p>
                    <p style={{fontWeight: '700', fontSize: 15}}>02:00</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: 'grey', fontWeight: 'lighter', fontSize: 15}}>One ticket price</p>
                    <p style={{fontWeight: '700', fontSize: 15}}>$10</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{color: 'grey', fontWeight: 'lighter', fontSize: 15}}>Seat choosed</p>
                    <p style={{fontWeight: '700', fontSize: 15}}>C4, C5, C6</p>
                </div>
                <hr/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{fontWeight: 'bolder', fontSize: 20}}>Total Payment</p>
                    <p style={{fontWeight: '700', fontSize: 20, color: '#5424d6'}}>$30</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderInfo