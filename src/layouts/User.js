import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const UserTemplate = ({ Component, ...restProps }) => {

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </Fragment>
    }} />
}

