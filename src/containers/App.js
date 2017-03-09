import React from 'react';
import {
	Link
} from "react-router"
import Badge from 'antd/lib/badge';
import Menu, {
	SubMenu
} from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import "antd/lib/badge/style/index.less";
import "antd/lib/menu/style/index.less";
//导入导航数据
import navdata from '../api/navdata.js';
class MyMenu extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};
	static contextTypes = {
		router: React.PropTypes.object
	}
	constructor(props) {
		super(props);
		this.state = {
			sub:"sub2"
		}
		this.handleClick = this.handleClick.bind(this);
	}
	componentWillMount() {
		var hash = window.location.hash;
		var urls = "/"+hash.slice(2).split("?")[0].split("/")[0];
		//console.log(urls)
		var current;
		var sub;
		for (var i = 0; i < navdata.length; i++) {
			if (navdata[i].children) {
				for (var j = 0; j < navdata[i].children.length; j++) {
					if (navdata[i].children[j].urls === urls) {
						sub = navdata[i].id;
						current = navdata[i].children[j].id;
						break;
					}
				}
			} else {
				if (navdata[i].urls === urls) {
					current = navdata[i].id;
					sub = navdata[i].id
					break;
				}
			}
		}
		this.setState({
			current: current,
			sub: "sub"+sub
		});
	}
	handleClick(e) {
		this.setState({
			current: e.key,
			sub: e.keyPath[1],
		});
		this.context.router.push(e.item.props.urls)
	}
	render() {
		var arr = [];
		for (var i = 0; i < navdata.length; i++) {
			var nav = navdata[i];
			var itemArr = []
			if (nav.children) {
				for (var j = 0; j < nav.children.length; j++) {
					itemArr.push(<Menu.Item key={nav.children[j].id} urls={nav.children[j].urls}><span><Icon type={nav.children[j].src} /><span>{nav.children[j].name}</span></span></Menu.Item>)
				}
				arr.push(<SubMenu 
					key={"sub"+nav.id} 
					title={<span><Icon type={nav.src}/><span>{nav.name}</span></span>}>{itemArr}</SubMenu>)
			} else {
				arr.push(<Menu.Item key={nav.id} urls={nav.urls}><span><Icon type={nav.src} /><span>{nav.name}</span></span></Menu.Item>)
			}
		}
		//var itemArr = [<Menu.Item key="0"><span><Icon type="mail" /><span>首页</span></span></Menu.Item>]
		//arr.push(<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>{itemArr}</SubMenu>)
		return (
			<Menu
				theme={'dark'}
				onClick={this.handleClick}
				style={{ width: 180 }}
				defaultOpenKeys={[this.state.sub]}
				selectedKeys={[this.state.current]}
				mode="inline">
				{arr}
			</Menu>
		);
	}
}



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
	      				管理后台模板
	      			</div>
					<div className="s_head">
						<div className="s_siderBtn">
	      					<Link to="#" className="s_a_wihte">退出</Link>
	      				</div>
	      				<div className="s_siderBtn">
	      					张三
	      				</div>
	      				<div className="s_siderBtn">
							<Badge count={99} overflowCount={10}>
								<Link to="#" className="s_a_wihte">即将到期</Link>
							</Badge>
	      				</div>
	      				<div className="s_siderBtn">
	      					<Link to="#" className="s_a_wihte">咨询</Link>
	      				</div>
	      			</div>
	      		</div>
	      		<div className="s_sider">
					<MyMenu />
	      		</div>
	      		{this.props.children}
	      	</div>
		);
	}
}