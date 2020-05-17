import React, { Component } from 'react';
import { Form, Input, Checkbox, Button, DatePicker, InputNumber } from 'antd';

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

const AddOrderForm = () => {
  const onFinish = values => {    
    fetch('/contracts/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      action="contracts"
      method="post"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Number contract"
        name="number_contract"
        rules={[
          {
            required: true,
            message: 'Please input number contract',
          },
        ]}
      >
        <InputNumber 
          step={100}
          min={0}
        />
      </Form.Item>

      <Form.Item
        label="Created"
        name="created"
        rules={[
          {
            required: true,
            message: 'Please input created',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      
      <Form.Item
        label="Expiration date"
        name="expiration_date"
        rules={[
          {
            required: true,
            message: 'Please input expiration date',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Annulment"
        name="annulment"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Annulment date"
        name="annulment_date"
      >
        <DatePicker />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddOrderForm;