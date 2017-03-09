import React from 'react';


import Icon from 'antd/lib/icon';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {



	constructor(props) {
		super(props);

		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				window.location.href="/index";
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
			<FormItem>
			{getFieldDecorator('userName', {
				rules: [{ required: true, message: '用户名不能为空!' }],
			})(
			<Input size="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
			)}
			</FormItem>
			<FormItem>
			{getFieldDecorator('password', {
				rules: [{ required: true, message: '密码不能为空!' }],
			})(
			<Input size="large" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
			)}
			</FormItem>
			<FormItem>
			<Row gutter={8}>
			<Col span={15}>
			{getFieldDecorator('captcha', {
				rules: [{ required: true, message: '验证码不能为空!' }],
			})(
			<Input size="large" prefix={<Icon type="key" style={{ fontSize: 13 }} />} placeholder="请输入验证码"/>
			)}
			</Col>
			<Col span={9}>
			<Button size="large">Get captcha</Button>
			</Col>
			</Row>
			</FormItem>
			<FormItem>
			<Button size="large" type="primary" htmlType="submit" className="login-form-button">
			登录
			</Button>
			</FormItem>
			</Form>
			);
	}
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default class LoginForm extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}
//
render() {
	return (
		<div id="login"  className="l_flex_content">
		<div className="s_panel l_login">
		<div className="l_title">用户登录</div>
		<WrappedNormalLoginForm />
		</div>
		</div>
		);
}
}
