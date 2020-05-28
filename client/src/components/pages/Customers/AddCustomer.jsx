import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';

import { REQUER_RULE } from '../../../constants';

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
        label="ФИО заказчика"
        name="customer_name"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Адрес"
        name="address"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Номер телефона"
        name="phone_number"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item
        label="Контактное лицо"
        name="contact_person"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCustomer;