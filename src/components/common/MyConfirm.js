import React from 'react';
import Button from 'antd/lib/button';
import Modal, {
	confirm
} from 'antd/lib/modal';
import "antd/lib/button/style/index.less";
import "antd/lib/modal/style/index.less";
import Tag from 'antd/lib/tag';
export default class MyConfirm extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.showConfirm = this.showConfirm.bind(this);
	}
	showConfirm() {
		const {
			title,
			content,
			callback
		} = this.props.tigData;
		confirm({
			title: title,
			content: content,
			onOk() {
				callback(true)
			},
			onCancel() {
				callback(false)
			},
		});
	}
	render() {
		const {
			type
		} = this.props;
		if (type == "btn") {
			return (
				<Button onClick={this.showConfirm}>
		    		删除
		  		</Button>
			);
		} else if (type == "tag") {
			return (
				<Tag color="#666" onClick={this.showConfirm}>
		    		删除
		  		</Tag>
			);
		} else {
			return (
				<span onClick={this.showConfirm}>
		    		删除
		  		</span>
			);
		}

	}
}