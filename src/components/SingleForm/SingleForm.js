import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';

class SingleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  submitForm = (values) => {
    console.log(`{"Name": "${values.name}", "E-mail": "${values.email}" }`);
    this.setState({ disabled: true });
  };

  render() {
    return (
      <div className="single-form">
        <Form hideRequiredMark onFinish={this.submitForm}>
          <Form.Item
            labelCol={{ span: 24 }}
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your friends name!',
              },
            ]}
          >
            <Input disabled={this.state.disabled} placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 24 }}
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your friends email!',
              },
            ]}
          >
            <Input disabled={this.state.disabled} placeholder="Enter e-mail" />
          </Form.Item>
          <Button type="primary" disabled={this.state.disabled} htmlType="submit">
            Invite
          </Button>
        </Form>
      </div>
    );
  }
}

export default SingleForm;
