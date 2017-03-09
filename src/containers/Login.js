import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import LoginForm from "./../components/login/LoginForm"

export default class Login extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="l_header">
          <div className="l_container">
            <div className="l_logo">学校管理平台</div>
          </div>
        </div>
        <div className="l_content">
          <div className="l_container">
            <Row className = "">
              <Col span={16} >
                <div className="l_flex_content">
                  广告位
                </div>
              </Col>
              <Col span={8}>
                <LoginForm />
              </Col>
            </Row>
          </div>
        </div>
        <div className="l_footer">
          <div className="l_container">学校管理平台</div>
        </div>
      </div>
    );
  }
}
