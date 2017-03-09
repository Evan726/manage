import React from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';
import Icon from 'antd/lib/icon';

import Tabs,{ TabPane } from 'antd/lib/tabs';


import StudentInfo from './../../components/student/StudentInfo.js';
import Recording from './../../components/student/Recording.js';


export default class Detail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
  		<div className="s_p1">
            <div className="s_breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item href="#/">
                        <Icon type="home" />
                        <span>首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#/student">
                        <span>列表</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        详情
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="s_panel s_p1 s_p2 s_m_b16">
            	sdf
            </div>
            <div className="card-container">
				<Tabs type="card">
					<TabPane tab="学生信息1" key="1">
						<StudentInfo />
					</TabPane>
					<TabPane tab="记录列表" key="2">
						<Recording />
					</TabPane>
				</Tabs>
			</div>
        </div>
    );
  }
}
