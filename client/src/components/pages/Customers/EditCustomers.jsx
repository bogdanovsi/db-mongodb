import React, { Component, useForm } from 'react';
import { Form, Input, Checkbox, Button, DatePicker, InputNumber } from 'antd';
import SelectCollection from '../../SelectWriters';
import moment from 'moment';

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

const EditCustomers = ({currentData, closePopup}) => {
  const [form] = Form.useForm();
  const onFinish = values => {    
    fetch(`/customers/${currentData._id}`, {
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

  if(currentData) {
    form.setFieldsValue(currentData);
  }

  return (
    <Form
      action="customer"
      method="post"
      {...layout}
      name="basic"
      initialValues={currentData}
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
          Редактировать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditCustomers;