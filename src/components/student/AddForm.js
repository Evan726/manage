import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/time-picker';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Icon from 'antd/lib/icon';


const FormItem = Form.Item;

class AddForm extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 15
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 15,
                offset: 5,
            },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="邮箱"
                    hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '格式不正确！',
                        }, {
                            required: true, message: '邮箱不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="邮箱"
                    hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '格式不正确！',
                        }, {
                            required: true, message: '邮箱不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
        <FormItem
                    {...formItemLayout}
                    label="邮箱"
                    hasFeedback>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '格式不正确！',
                        }, {
                            required: true, message: '邮箱不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(AddForm);
export default WrappedNormalLoginForm;