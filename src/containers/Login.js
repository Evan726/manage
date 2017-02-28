import React from 'react';

export default class Login extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>登录</div>
    );
  }
}
