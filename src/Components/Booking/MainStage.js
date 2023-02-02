import React, { useEffect, useState } from "react";
import { ReactReduxContext, Provider, useDispatch, useSelector } from "react-redux";
import { Stage, Layer } from "./react-konva";
import Section from "./Section";
import OrderInfo from "./OrderInfo";
import { Link } from "react-router-dom";
import ChangeMovie from "./ChangeMovie";

import * as layout from "./Layout";
import { AddSeat } from "../../Redux/actions/Seat";

function findSeat(seatId, seats) {
    if (!seatId) {
        return null;
    }
    for (let secI = 0; secI < seats.sections.length; secI++) {
        let section = seats.sections[secI];
        for (let subsecI = 0; subsecI < section.subsections.length; subsecI++) {
            let subsection = section.subsections[subsecI];
            for (let seatI = 0; seatI < subsection.seats.length; seatI++) {
                let seat = subsection.seats[seatI];
                if (seat.name === seatId) {
                    return seat;
                }
            }
        }
    }
    return null;
}

const useFetch = url => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }, [url]);
    return data;
};

const MainStage = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AddSeat(selectedSeatsIds))
    })
    const jsonData = useFetch("./seats-data.json");
    const containerRef = React.useRef(null);
    const stageRef = React.useRef(null);

    const [scale, setScale] = React.useState(1);
    const [scaleToFit, setScaleToFit] = React.useState(1);
    const [size, setSize] = React.useState({
        width: 200,
        height: 200,
        virtualWidth: 200
    });
    const [virtualWidth, setVirtualWidth] = React.useState(200);

    const [selectedSeatsIds, setSelectedSeatsIds] = React.useState([]);

    const [popup, setPopup] = React.useState({ seat: null });


    // calculate available space for drawing
    React.useEffect(() => {
        const newSize = {
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight
        };
        if (newSize.width !== size.width || newSize.height !== size.height) {
            setSize(newSize);
        }
    });

    // calculate initial scale
    React.useEffect(() => {
        if (!stageRef.current) {
            return;
        }
        const stage = stageRef.current;
        const clientRect = stage.getClientRect({ skipTransform: true });

        const scaleToFit = size.width / clientRect.width;
        setScale(scaleToFit);
        setScaleToFit(scaleToFit);
        setVirtualWidth(clientRect.width);
    }, [jsonData, size]);

    let lastSectionPosition = 0;

    if (jsonData === null) {
        return <div ref={containerRef}>Loading...</div>;
    }

    const maxSectionWidth = layout.getMaximimSectionWidth(
        jsonData.seats.sections
    );

    return (
        <>
            <div className='booking-layout'>
                <div className='booking-left'>
                    <ChangeMovie />
                    <div className="text-ms" style={{ marginTop: '5%' }}>Choose Your Seat</div>
                    <div className="choose-seat">
                        <div className="screen">
                            <h3 className="text5">Screen</h3>
                            <hr className="line" />
                        </div>

                        <div
                            style={{
                                backgroundColor: "white",
                                width: "45vw",
                                height: "45vh",
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                background: 'border-box',
                            }}
                            ref={containerRef}
                        >
                            <ReactReduxContext.Consumer>
                                {({ store }) => (
                                    <Stage
                                        y={-10}
                                        x={30}
                                        width={size.width}
                                        height={size.height}
                                    >
                                        <Provider store={store}>
                                            <Layer>
                                                {jsonData.seats.sections.map((section, index) => {
                                                    const height = layout.getSectionHeight(section);
                                                    const position = lastSectionPosition + layout.SECTIONS_MARGIN;
                                                    lastSectionPosition = position + height;
                                                    const width = layout.getSectionWidth(section);

                                                    const offset = (maxSectionWidth - width) / 2;

                                                    return (
                                                        <Section
                                                            x='50'
                                                            y='5'
                                                            height={height}
                                                            key={index}
                                                            section={section}
                                                            selectedSeatsIds={selectedSeatsIds}
                                                            onHoverSeat={(seat, pos) => {
                                                                setPopup({
                                                                    seat: seat,
                                                                    position: pos
                                                                });
                                                            }}
                                                            onSelectSeat={seatId => {
                                                                const newIds = selectedSeatsIds.concat([seatId]);
                                                                setSelectedSeatsIds(newIds);
                                                            }}
                                                            onDeselectSeat={seatId => {
                                                                const ids = selectedSeatsIds.slice();
                                                                ids.splice(ids.indexOf(seatId), 1);
                                                                setSelectedSeatsIds(ids);
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </Layer>
                                        </Provider>
                                    </Stage>
                                )}
                            </ReactReduxContext.Consumer>
                        </div>
                        <p className='text7'>Seating key</p>
                        <div className="seating-key">
                            <div className="seat-note">
                                <div className="Available"></div>
                                <p className="text8"> Available</p>
                            </div>
                            <div className="seat-note">
                                <div className="Selected"></div>
                                <p className="text8"> Selected</p>
                            </div>
                            <div className="seat-note2">
                                <div className="Sold"></div>
                                <p className="text8"> Sold</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-seat">
                        <button className="btn-change"><Link to={'/movies'}>Change your movie</Link></button>
                        <button className="btn-checkout"><Link to={'/checkout'}>Checkout Now</Link></button>
                    </div>
                </div>
                <div className='booking-right'>
                    <OrderInfo seatChoosed={selectedSeatsIds}/>
                </div>
            </div>
        </>
    );
};

export default MainStage;
