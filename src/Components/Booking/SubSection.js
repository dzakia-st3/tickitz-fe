import React from "react";
import { Group, Text } from "./react-konva";
import Seat from "./Seats";


import { SEATS_DISTANCE, SUBSECTION_PADDING, SEAT_SIZE } from "./Layout";

export default ({
  width,
  x,
  y,
  data,
  onHoverSeat,
  onSelectSeat,
  onDeselectSeat,
  selectedSeatsIds
}) => {
  return (
    <Group x={x} y={y}>
      {Object.keys(data.seats_by_rows)?.map((rowKey, rowIndex) => {
        const row = data.seats_by_rows[rowKey];
        return (
          <React.Fragment key={rowKey}>
            {row?.map((seat, seatIndex) => {
              return (
                <>
                <Seat
                  key={seat.name}
                  x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                  y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                  data={seat}
                  onHover={onHoverSeat}
                  onSelect={onSelectSeat}
                  onDeselect={onDeselectSeat}
                  isSelected={selectedSeatsIds.indexOf(seat.name) >= 0}
                />
                <Text
                padding= {10}
                text={seat.number}
                x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING - 50}
                width={124}
                y={
                  Object.keys(data.seats_by_rows).length * SEATS_DISTANCE +
                  SUBSECTION_PADDING
                }
                key={"label-bottom" + seatIndex}
                align="center"
              />
              <Text
              padding={5}
              text={rowKey}
              x={0}
              y={rowIndex * 31 + SUBSECTION_PADDING - SEAT_SIZE / 8}
              fontSize={SEAT_SIZE}
              key={rowKey}
            />
              </>
              );
            })}
            
          </React.Fragment>
        );
      })}
    </Group>
  );
};
