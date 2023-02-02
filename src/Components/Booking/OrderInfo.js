import React from "react";
import { useSelector } from "react-redux";
import './style.css'
import { useParams } from "react-router-dom";

const OrderInfo = (props) => {
    const { seatChoosed } = props
    // console.log(seatChoosed.length, 'cek data di order')
    const {id} = useParams()
    console.log(id, 'cek id di order info')
    const ticketPrice = '10'

    function seatChoosedText() {
        const keys = seatChoosed.keys()

        let text = ""
        for (let x of keys) {
            text += seatChoosed[x] + ', '
        }
        return text
    }

    return (
        <>
            <div className="order-info">
                <div className="text-ms" style={{ paddingTop: '5%', marginBottom: '2%' }}>Order Info</div>
                <div className="order-box">
                    <div>
                        <img />
                        <p>CineOne21 Cinema</p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>Movie Selected</p>
                            <p style={{ fontWeight: '700', fontSize: 15 }}>Spider-Man: Homecoming</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>Tuesday, 07 July 2020</p>
                            <p style={{ fontWeight: '700', fontSize: 15 }}>02:00</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>One ticket price</p>
                            <p style={{ fontWeight: '700', fontSize: 15 }}>${ticketPrice}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ color: 'grey', fontWeight: 'lighter', fontSize: 15 }}>Seat choosed</p>
                            <p style={{ fontWeight: '700', fontSize: 15 }}>{seatChoosed.length == 1 ? (seatChoosed) : (seatChoosedText())}</p>
                        </div>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ fontWeight: 'bolder', fontSize: 20 }}>Total Payment</p>
                            <p style={{ fontWeight: '700', fontSize: 20, color: '#5424d6' }}>{`$${seatChoosed.length*ticketPrice}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderInfo

