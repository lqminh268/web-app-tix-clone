// import { Dialog } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.9.0";

// core components
import Admin from "layouts/Admin.js";
import Login from "./views/User/Login"
// import RTL from "layouts/RTL.js";
//
import { IS_LOGIN, SET_LOGIN } from "./redux/Constants/UserConstants";
import { useDispatch } from "react-redux";
import createAction from "redux/Actions";
import Homepage from "views/User/Homepage";
import { UserTemplate } from "layouts/User";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import "./assets/sass/main.scss"
import Detail from "views/User/Detail";
import Signup from "views/User/Signup";
import Checkout from "views/User/Checkout";
import Information from "views/User/Information";


function App() {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    useEffect(() => {
        dispatch(createAction(SET_LOGIN, currentUser))
        dispatch(createAction(IS_LOGIN, false))
        if (currentUser) {
            dispatch(createAction(IS_LOGIN, true))
        }
    }, [currentUser, dispatch])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/admin" component={Admin} />
                <Route exact path="/checkout/:id" component={Checkout}/>
                <UserTemplate exact path="/information" Component={Information} />
                <UserTemplate exact path="/detail/:id" Component={Detail} />
                <UserTemplate exact path="/" Component={Homepage} />
                <Redirect from="/" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
