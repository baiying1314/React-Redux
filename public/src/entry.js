import {render} from "react-dom";
import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import HomePage from './containers/HomePage'
import Parent from "./containers/Parent";
import Child from "./containers/Child";
import reducer from "./reducers/index";

const store = createStore(reducer);

render(
    <Provider store = {store}>
    <Router history={hashHistory}>
        <Route path="/" component={HomePage}>
            <IndexRoute component={Parent}/>
            <Route path="child" component={Child}/>
        </Route>
    </Router>
    </Provider>,
    document.getElementById('content'));
