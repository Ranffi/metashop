import React from 'react';
import {Switch, Route} from 'react-router-dom'

// import navbar from './navbar'
// import homePage from './homePage'
// import homePage from './cartPage'

const Router = () => {
    return (
        <>
            <navbar />
            <Switch>
                <Route exact path='/' component={homePage} />
                <Route exact path='/cart' component={cartPage} />
            </Switch>
        </>
    );
}

export default Router;
