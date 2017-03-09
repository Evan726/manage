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

//import "antd/dist/antd.less"
import "antd/lib/style/index.less"
import "antd/lib/grid/style/index.less"
import "antd/lib/button/style/index.less";
import "antd/lib/table/style/index.less";
import "antd/lib/tag/style/index.less";
import "antd/lib/breadcrumb/style/index.less";
import "antd/lib/tabs/style/index.less";
import "antd/lib/pagination/style/index.less";
import "antd/lib/cascader/style/index.less";
import "antd/lib/tooltip/style/index.less";
import "antd/lib/upload/style/index.less";
import "antd/lib/message/style/index.less";

import "antd/lib/form/style/index.less";
import "antd/lib/input/style/index.less";
import "antd/lib/select/style/index.less";

import "./static/css/_mixin.less";
import "./static/css/common.less";
import "./static/css/main.less";



import routes from "./containers/routes";


ReactDOM.render(
	<Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
	document.getElementById('app')
)