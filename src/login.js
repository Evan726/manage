require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
import React from "react";
import ReactDOM from "react-dom";
import {
	Provider
} from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore();

import "antd/lib/style/index.less"
import "antd/lib/grid/style/index.less"
import "antd/lib/form/style/index.less";
import "antd/lib/input/style/index.less";
import "antd/lib/button/style/index.less";

import "./static/css/_mixin.less";
import "./static/css/common.less";
import "./static/css/login.less";

import Login from "./containers/Login";

ReactDOM.render(
	<Provider store={store}>
        <Login/>
    </Provider>,
	document.getElementById('app')
)