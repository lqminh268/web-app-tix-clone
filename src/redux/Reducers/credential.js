import { IS_LOGIN, SET_LOGIN } from "../Constants/UserConstants";

const initialState = {
    isLogin: false,
    dataLogin: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN:
            state = { ...state, isLogin: true, dataLogin: { ...payload } };
            return { ...state };
        case IS_LOGIN:
            state = { ...state, isLogin: payload };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;