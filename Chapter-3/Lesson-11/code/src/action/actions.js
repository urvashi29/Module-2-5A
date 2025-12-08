import { INC, DEC } from "./actiontype";

// action creator
export const onIncrement = (val) => {
  // action object
  return {
    type: INC,
    payload: val,
  };
};

export const onDecrement = (val) => {
  return {
    type: DEC,
    payload: val,
  };
};
