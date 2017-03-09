import React from 'react';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';

import WrappedNormalLoginForm from "./AddForm.js"

export default class Add extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};
	constructor(props) {
		super(props);
		this.state = {
			ModalText: 'Content of the modal dialog',
			visible: false,
		}
		this.showModal = this.showModal.bind(this);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	showModal() {
		this.setState({
			visible: true,
		});
	}
	handleOk() {
		this.setState({
			ModalText: 'The modal dialog will be closed after two seconds',
			confirmLoading: true,
		});
		setTimeout(() => {
			this.setState({
				visible: false,
				confirmLoading: false,
			});
		}, 2000);
	}
	handleCancel() {
		this.setState({
			visible: false,
		});
	}
	render() {
		return (
			<span>
				<Button type="danger" size="large" onClick={this.showModal}>添加</Button>
				<Modal title="Title of the modal dialog"
					visible={this.state.visible}
					onOk={this.handleOk}
					confirmLoading={this.state.confirmLoading}
					width={700}
					onCancel={this.handleCancel}>
					<WrappedNormalLoginForm a={function(){alert(123)}}/>
				</Modal>
			</span>
		);
	}
}