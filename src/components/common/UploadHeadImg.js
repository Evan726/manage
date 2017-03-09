import React from 'react';

import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	console.log(file.type)
	const isJPG = file.type === 'image/png';
	if (!isJPG) {
		message.error('You can only upload JPG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}
	return isJPG && isLt2M;
}

export default class UploadHeadImg extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {

		};
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(info) {
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, imageUrl => this.setState({
				imageUrl
			}));
		}
	}
	render() {
		console.log("this.state:", this.state)
		const imageUrl = this.state.imageUrl;
		return (
			<Upload
			className="avatar-uploader"
			name="file"
			showUploadList={false}
			action = "http://localhost:8001/v0/upload"
			beforeUpload={beforeUpload}
			onChange={this.handleChange}
			>
			{
				imageUrl ?
				<img src={imageUrl} alt="" className="avatar" /> :
				<Icon type="plus" className="avatar-uploader-trigger" />
			}
			</Upload>
		);
	}
}