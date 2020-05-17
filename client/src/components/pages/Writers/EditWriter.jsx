import React, { Component, useForm } from 'react';
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

const EditWriter = ({currentData}) => {
  const [form] = Form.useForm();
  const onFinish = values => {
    fetch(`/writers/${currentData._id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    });
  };


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if(currentData) form.setFieldsValue(currentData);

  return (
    <Form
      action="writer"
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
        label="Surname"
        name="surname"
        rules={[
          {
            required: true,
            message: 'Please input Surname',
          },
        ]}
      >
        <Input defaultValue={currentData.surname || ''} />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input name',
          },
        ]}
      >
        <Input defaultValue={currentData.name || ''}/>
      </Form.Item>

      <Form.Item
        label="Passport number"
        name="passport_number"
        rules={[
          {
            required: true,
            message: 'Please input Passport number',
          },
        ]}
      >
        <Input defaultValue={currentData.passport_number || ''} />
      </Form.Item>
      
      <Form.Item
        label="Patronymic"
        name="patronymic"
        rules={[
          {
            required: true,
            message: 'Please input patronymic',
          },
        ]}
      >
        <Input defaultValue={currentData.patronymic || ''}/>
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input adress',
          },
        ]}
      >
        <Input defaultValue={currentData.address || ''}/>
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input phone',
          },
        ]}
      >
        <Input defaultValue={currentData.phone || ''}/>
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditWriter;