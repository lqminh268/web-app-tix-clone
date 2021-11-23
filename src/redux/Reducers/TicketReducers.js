import { CLEAR } from "redux/Constants/TicketConstants";
import { BOOKING } from "redux/Constants/TicketConstants";
import { FETCH_SEAT_LIST } from "redux/Constants/TicketConstants";

const initialState = {
  movieInfor: {},
  seatList: [],
  selectedList: [],
  isLoading: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SEAT_LIST:
      state = { ...state, isLoading: false, ...payload };
      return { ...state };
    case BOOKING:
      const selectedList = [...state.selectedList];
      const index = selectedList.findIndex(
        (seat) => seat.maGhe === payload.selectedList.maGhe
      );

      if (index !== -1) {
        selectedList.splice(index, 1);
      } else {
        selectedList.push(payload.selectedList);
      }
      return { ...state, selectedList: selectedList };
    case CLEAR:
      state = { ...state, ...payload };
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
