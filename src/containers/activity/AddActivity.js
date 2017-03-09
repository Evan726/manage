import React from 'react';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Tooltip from 'antd/lib/tooltip';
import Cascader from 'antd/lib/cascader';
import Select from 'antd/lib/select';
import Checkbox from 'antd/lib/checkbox';

const FormItem = Form.Item;
const Option = Select.Option;

import UploadHeadImg from "../../components/common/UploadHeadImg";

class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmDirty: false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
        this.checkConfirm = this.checkConfirm.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur(e) {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        });
    }
    checkPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {
                force: true
            });
        }
        callback();
    }
    render() {


        const residences = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                    value: 'xihu',
                    label: 'West Lake',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                }],
            }],
        }];



        const {
            getFieldDecorator
        } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 3
            },
            wrapperCol: {
                span: 10
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 3,
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
            </Select>
        );
        return (
            <Form onSubmit={this.handleSubmit} className="addForm">
          <FormItem
          {...formItemLayout}
          label="活动图片"
          >
            <UploadHeadImg/>
          </FormItem>
         
          <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Register</Button>
          </FormItem>
      </Form>
        );
    }
}

const AddActivityForm = Form.create()(AddForm);

export default class AddActivity extends React.Component {
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
                        <Breadcrumb.Item>
                            列表
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="s_panel s_p1 s_p2">
                    <AddActivityForm/>
                </div>
            </div>
        );
    }
}



 // <FormItem
 //          {...formItemLayout}
 //          label="Password"
 //          hasFeedback
 //          >
 //          {getFieldDecorator('password', {
 //            rules: [{
 //              required: true, message: 'Please input your password!',
 //            }, {
 //              validator: this.checkConfirm,
 //            }],
 //          })(
 //          <Input type="password" />
 //          )}
 //          </FormItem>
 //          <FormItem
 //          {...formItemLayout}
 //          label="Confirm Password"
 //          hasFeedback
 //          >
 //          {getFieldDecorator('confirm', {
 //            rules: [{
 //              required: true, message: 'Please confirm your password!',
 //            }, {
 //              validator: this.checkPassword,
 //            }],
 //          })(
 //          <Input type="password" onBlur={this.handleConfirmBlur} />
 //          )}
 //          </FormItem>
 //          <FormItem
 //          {...formItemLayout}
 //          label={(
 //            <span>
 //            Nickname&nbsp;
 //            <Tooltip title="What do you want other to call you?">
 //            <Icon type="question-circle-o" />
 //            </Tooltip>
 //            </span>
 //            )}
 //          hasFeedback
 //          >
 //          {getFieldDecorator('nickname', {
 //            rules: [{ required: true, message: 'Please input your nickname!' }],
 //          })(
 //          <Input />
 //          )}
 //          </FormItem>
 //          <FormItem
 //          {...formItemLayout}
 //          label="Habitual Residence"
 //          >
 //          {getFieldDecorator('residence', {
 //            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
 //            rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
 //          })(
 //          <Cascader options={residences} />
 //          )}
 //          </FormItem>
 //          <FormItem
 //          {...formItemLayout}
 //          label="手机号码"
 //          >
 //          {getFieldDecorator('phone', {
 //            rules: [{ required: true, message: 'Please input your phone number!' }],
 //          })(
 //          <Input addonBefore={prefixSelector} />
 //          )}
 //          </FormItem>
 //          <FormItem
 //          {...formItemLayout}
 //          label="Captcha"
 //          extra="We must make sure that your are a human."
 //          >
 //          <Row gutter={8}>
 //          <Col span={20}>
 //          {getFieldDecorator('captcha', {
 //            rules: [{ required: true, message: 'Please input the captcha you got!' }],
 //          })(
 //          <Input size="large" />
 //          )}
 //          </Col>
 //          <Col span={4}>
 //          <Button size="large">Get captcha</Button>
 //          </Col>
 //          </Row>
 //          </FormItem>
 //          <FormItem {...tailFormItemLayout}>
 //          {getFieldDecorator('agreement', {
 //            valuePropName: 'checked',
 //          })(
 //          <Checkbox>I had read the <a>agreement</a></Checkbox>
 //          )}
 //          </FormItem>