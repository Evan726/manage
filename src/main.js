require('es5-shim');
require('es5-shim/es5-sham');
// require('console-polyfill');
// require('es6-promise');
// require('fetch-ie8');

import React from "react";
import ReactDOM from "react-dom";
import {
	Provider
} from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore();

import {
	Router,
	hashHistory
} from 'react-router';

import "antd/dist/antd.less"
import "./static/css/main.less"

import routes from "./containers/routes";



ReactDOM.render(
	<Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
	document.getElementById('app')
)