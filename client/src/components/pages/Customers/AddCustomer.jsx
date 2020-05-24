import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddCustomer = ({ closePopup }) => {
  const [form] = Form.useForm();
  const onFinish = values => {    
    fetch('/customers/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    }).then(() => form.resetFields());
    closePopup();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      action="customer"
      method="post"
      {...layout}
      form={form}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="customer_name"
        rules={[
          {
            required: true,
            message: 'Please input name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input address',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phone_number"
        rules={[
          {
            required: true,
            message: 'Please input phone number',
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item
        label="Contact person"
        name="contact_person"
        rules={[
          {
            required: true,
            message: 'Please input contact person',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCustomer;