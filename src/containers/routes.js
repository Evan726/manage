import React from 'react'
import {
	Route,
	IndexRoute,
} from 'react-router'
import App from './App'
import Index from './Index/Index';
import Student from './student/Student';
import Detail from './student/Detail';
import Activity from './activity/Index';
import AddActivity from './activity/AddActivity';
export default (
	<Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="student" component={Student}>
			<Route path="detail/:id" component={Detail} />	
        </Route>
        <Route path="activity" component={Activity}>
			<Route path="add" component={AddActivity} />
        </Route>
    </Route>
)
