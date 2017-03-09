import React from 'react';
import {Link} from 'react-router';

import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Tag from 'antd/lib/tag';
import Breadcrumb from 'antd/lib/breadcrumb';



//导入表单
import Form from 'antd/lib/form';
const FormItem = Form.Item;
import Input from 'antd/lib/input';
import Select, {
	Option
} from 'antd/lib/select';

//自定义组件
import MyConfirm from "./../../components/common/MyConfirm.js"
import Add from "./../../components/student/Add.js"
export default class Student extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};
	constructor(props) {
		super(props);
		this.state = {
			pagination: {
				defaultPageSize: 20,
				size: "middle"
			},
			loading: true
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleDel = this.handleDel.bind(this)
	}
	handleDel(data) {
		console.log("是否删除：", data);
	}
	handleSubmit(e) { //搜索
		e.preventDefault();
	}
	handleChange(e) {

	}
	render() {
		if(this.props.children){
			return (
				<div>
					{this.props.children}
				</div>
			)
		}
		var _this = this;
		const columns = [{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
			render: (text, record) => (
				<span>
                    <Link to="/student/detail/1" style={{paddingRight: '10px'}}>张三</Link>
                    <Tag color="#f50">#2db7f5</Tag>
                </span>)
		}, {
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
		}, {
			title: '住址',
			dataIndex: 'address',
			key: 'address',
		}, {
			title: 'Action',
			key: 'action',
			render: function(text, record) {
				//console.log("1:", text)
				//console.log("2:", record)
				return (
					<span>
                        <a href={text}><Tag color="#2db7f5">编辑</Tag></a>
                        <MyConfirm type = {"tag"} tigData = {{
                            title:"警示：",
                            content:"确定要删除吗",
                            callback: _this.handleDel
                        }}/>
                    </span>
				)
			}
		}];
		const data = [];
		for (let i = 0; i < 66; i++) {
			data.push({
				key: i,
				name: `Edward King ${i}`,
				age: 32,
				address: `London, Park Lane no. ${i}`,
			});
		}
		return (
			<div className="s_p1">
                <div className="s_breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#/">
                            <Icon type="home" />
                            <span>首页</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            列表
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="s_panel s_p1 s_p2">
                    <div className="s_searchBox clearfix">
                        <div className="s_search">
                            <Form inline onSubmit={this.handleSubmit}>
                                <FormItem label="用户名：">
                                    <Input size="large"/>
                                </FormItem>
                                <FormItem label="状态：">
                                    <Select size="large" defaultValue="lucy" style={{ width: 100 }} onChange={this.handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" icon="search" htmlType="submit">搜索</Button>
                                </FormItem>
                            </Form>
                        </div>
                        <div className="s_btnListBox">
                            <Button type="primary" size="large" loading={this.state.loading}>{this.state.loading?"正在刷新":"刷新"}</Button> 
                            <Add />
                        </div>
                    </div>
                    <Table 
                        columns={columns} 
                        dataSource={data}  
                        bordered = {true} 
                        size="middle" 
                        pagination={this.state.pagination}
                    />
                </div>
            </div>
		);
	}
}