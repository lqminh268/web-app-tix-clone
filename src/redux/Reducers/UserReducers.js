
import {
    CREATE_USER, DELETE_USER, EDIT_USER, FETCH_USER_LIST, SET_DELETED, SET_EDITED, SET_POPUP, SET_CREATED, FETCH_DETAIL_USER, SET_DETAIL, SEARCH_USER, SET_SEARCH, SET_REDIRECT
} from "../Constants/UserConstants";

const initialState = {
    userInfo: {},
    selectedUser: {},
    detailUser: {},
    isPopUp: false,
    isCreated: false,
    isEdited: false,
    isDeleted: false,
    isDetail: false,
    isSearch: false,
    isRedirect: false,
    typePopUp: '',
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_POPUP:
            state = { ...state, isPopUp: payload };
            return { ...state };
        case SET_CREATED:
            state = { ...state, isCreated: payload };
            return { ...state };
        case SET_REDIRECT:
            state = { ...state, isRedirect: payload };
            return { ...state };
        case SET_EDITED:
            state = { ...state, isEdited: payload };
            return { ...state };
        case SET_DELETED:
            state = { ...state, isDeleted: payload };
            return { ...state };
        case SET_DETAIL:
            state = { ...state, isDetail: payload };
            return { ...state };
        case SET_SEARCH:
            state = { ...state, isSearch: payload };
            return { ...state };
        case EDIT_USER:
            state = { ...state, ...payload }
            return { ...state }
        case DELETE_USER:
            state = { ...state, ...payload }
            return { ...state }
        case CREATE_USER:
            state = { ...state, ...payload }
            return { ...state }
        case FETCH_DETAIL_USER:
            state = { ...state, ...payload }
            return { ...state }
        case FETCH_USER_LIST:
            state = { ...state, userInfo: payload };
            return { ...state };
        case SEARCH_USER:
            state = { ...state, userInfo: payload };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;