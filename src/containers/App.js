import React from 'react';
export default class App extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="s_layout">
	      		<div className="s_header clearfix">
	      			<div className="s_logo">
	      				英译外国翻译培训学校
	      			</div>
					<div className="s_head">
						<div className="s_siderBtn">
	      					退出
	      				</div>
	      				<div className="s_siderBtn">
	      					张三
	      				</div>
	      				<div className="s_siderBtn">
	      					即将到期
	      				</div>
	      				<div className="s_siderBtn">
	      					咨询
	      				</div>
	      			</div>
	      		</div>
	      		<div className="s_sider">
	      			sider
	      		</div>
	      		{this.props.children}
	      	</div>
		);
	}
}