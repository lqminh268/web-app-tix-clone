import { FETCH_ROOM_LIST } from "redux/Constants/MovieTheaterConstants";
import { FETCH_THEATERS_INFORMATION } from "redux/Constants/MovieTheaterConstants";
import { TEST } from "redux/Constants/MovieTheaterConstants";
import { FETCH_THEATERS_LIST } from "redux/Constants/MovieTheaterConstants";
import { FETCH_CINEMA_SYSTEM_LIST } from "redux/Constants/MovieTheaterConstants";

const initialState = {
    cinemaSystemList: [],
    theatersList: [],
    theatersInfor: [],
    roomList: [],
    test: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CINEMA_SYSTEM_LIST:
            state = { ...state, cinemaSystemList: payload }
            return { ...state };
        case FETCH_THEATERS_LIST:
            state = { ...state, theatersList: payload }
            return { ...state };
        case FETCH_THEATERS_INFORMATION:
            state = { ...state, theatersInfor: payload }
            return { ...state };
        case FETCH_ROOM_LIST:
            state = { ...state, roomList: payload }
            return { ...state };
        case TEST:
            state = { ...state, test: payload }
            return { ...state };
        default:
            return state
    }
}

export default reducer;