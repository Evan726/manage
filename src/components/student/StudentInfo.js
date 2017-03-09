import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
export default class StudentInfo extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stu_box">
				<Row className="s_p2 s_line" >
					<Col span={3}  className="s_textRight s_p1">
						<span className="s_title_color">
							学生信息1:
						</span>
					</Col>
					<Col span={21}>
						免费接机、接高铁（二环以内免费接送）时间段为 09：00——20:00（当天和其他时间段不予赠送），如需此项服务请您提前一天致电告知客服具体航班/车次信息及抵达时间，当天告知的无法安排，如有需要，
需提前1天18点前来电告知专属客服
					</Col>
				</Row>
				<Row className="s_p2 s_line">
					<Col span={3}  className="s_textRight s_p1">
						<span className="s_title_color">
							学生信息1:
						</span>
					</Col>
					<Col span={21}>
						免费接机、接高铁（二环以内免费接送）时间段为 09：00——20:00（当天和其他时间段不予赠送），如需此项服务请您提前一天致电告知客服具体航班/车次信息及抵达时间，当天告知的无法安排，如有需要，
需提前1天18点前来电告知专属客服
					</Col>
				</Row>
				<Row className="s_p2 s_line">
					<Col span={3}  className="s_textRight s_p1">
						<span className="s_title_color">
							学生信息1:
						</span>
					</Col>
					<Col span={21}>
						免费接机、接高铁（二环以内免费接送）时间段为 09：00——20:00（当天和其他时间段不予赠送），如需此项服务请您提前一天致电告知客服具体航班/车次信息及抵达时间，当天告知的无法安排，如有需要，
需提前1天18点前来电告知专属客服
					</Col>
				</Row>
				<Row className="s_p2 s_line">
					<Col span={3}  className="s_textRight s_p1">
						<span className="s_title_color">
							学生信息1:
						</span>
					</Col>
					<Col span={21}>
						免费接机、接高铁（二环以内免费接送）时间段为 09：00——20:00（当天和其他时间段不予赠送），如需此项服务请您提前一天致电告知客服具体航班/车次信息及抵达时间，当天告知的无法安排，如有需要，
需提前1天18点前来电告知专属客服
					</Col>
				</Row>
				<Row className="s_p2 s_line">
					<Col span={3}  className="s_textRight s_p1">
						<span className="s_title_color">
							学生信息1:
						</span>
					</Col>
					<Col span={21}>
						免费接机、接高铁（二环以内免费接送）时间段为 09：00——20:00（当天和其他时间段不予赠送），如需此项服务请您提前一天致电告知客服具体航班/车次信息及抵达时间，当天告知的无法安排，如有需要，
需提前1天18点前来电告知专属客服
					</Col>
				</Row>

			</div>
			);
	}
}
