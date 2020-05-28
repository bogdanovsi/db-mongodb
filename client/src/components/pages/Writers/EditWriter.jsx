import React, { Component, useForm } from 'react';
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

const EditWriter = ({currentData, closePopup }) => {
  const [form] = Form.useForm();
  const onFinish = values => {
    fetch(`/writers/${currentData._id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    });
    closePopup();
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
      initialValues={currentData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Фамилия"
        name="surname"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Имя"
        name="name"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Номер паспорта"
        name="passport_number"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Отчество"
        name="patronymic"
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
        label="Телефон"
        name="phone"
        rules={[ REQUER_RULE ]}
      >
        <Input />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Редактировать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditWriter;