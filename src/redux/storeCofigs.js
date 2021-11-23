import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import credential from './Reducers/credential';
import userReducers from './Reducers/UserReducers';
import movieReducers from './Reducers/MovieReducers';
import movieTheaterReducers from './Reducers/MovieTheaterReducers';
import ticketReducers from './Reducers/TicketReducers';

const reducer = combineReducers({
    credential,
    userReducers,
    movieReducers,
    movieTheaterReducers,
    ticketReducers
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))
)
