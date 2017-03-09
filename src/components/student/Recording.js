import React from 'react';
import Table from 'antd/lib/table';
export default class Recording extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const columns = [{
			title: '标题',
			dataIndex: 'title',
			key: 'title'
		}, {
			title: '班级',
			dataIndex: 'calssName',
			key: 'calssName'
		}, {
			title: '老师',
			dataIndex: 'teacherName',
			key: 'teacherName'
		}, {
			title: '开始时间',
			dataIndex: 'startTime',
			key: 'startTime'
		}, {
			title: '结束时间',
			dataIndex: 'endTime',
			key: 'endTime'
		}, {
			title: '报名状态',
			dataIndex: 'review',
			key: 'review'
		}, {
			title: '完成状态',
			dataIndex: 'isok',
			key: 'isok'
		}, {
			title: '金额',
			dataIndex: 'money',
			key: 'money',
			render:(text,tecord)=>{return (<span>{text}元</span>) }
		}, {
			title: '是否缴费',
			dataIndex: 'isPay',
			key: 'isPay',
			render: function(text, record){
				var isPay = "否";
				if(text===1){
					isPay = "是";
				}
				return (
					<span>{isPay}</span>
					)
			}
		}, {
			title: '缴费方式',
			dataIndex: 'payMethod',
			key: 'payMethod',
		}];
		const data = [{
			key: '1',
			title: '标题名称',
			teacherName: '张三',
			calssName: "计算机3班",
			startTime: "2012-12-12",
			endTime: "2012-12-12",
			endTime: "2012-12-12",
			review: "已报名",
			isPay: 1,
			payMethod: "微信",
			money: "10",
			courseInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
			isok: '已完成'
		}, {
			key: '2',
			title: '标题名称',
			teacherName: '张三',
			calssName: "计算机3班",
			startTime: "2012-12-12",
			endTime: "2012-12-12",
			endTime: "2012-12-12",
			review: "已报名",
			isPay: 0,
			payMethod: "微信",
			money: "20",
			courseInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
			isok: '还有10天完成'
		}, {
			key: '3',
			title: '标题名称',
			teacherName: '张三',
			calssName: "计算机3班",
			startTime: "2012-12-12",
			endTime: "2012-12-12",
			endTime: "2012-12-12",
			review: "已报名",
			isPay: 1,
			payMethod: "微信",
			money: "30",
			courseInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍",
			isok: '还有10天完成'
		}];
		return (
			<div className="s_p1 s_p2">
			<Table 
			dataSource={data}
			size="middle" 
			expandedRowRender={record => <p>{record.courseInfo}</p>}
			pagination={false}
			columns={columns} 
			>
			</Table>
			</div>
			);
	}
}
