import React from 'react';

export default class Index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>活动首页</div>
			);
	}
}
