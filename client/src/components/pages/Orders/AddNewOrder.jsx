import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import SelectCollection from '../../SelectWriters';

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

const AddOrderForm = ({ closePopup }) => {
  const [form] = Form.useForm();
  const onFinish = values => {    
    fetch('/orders/', {
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
      action="order"
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
      <SelectCollection 
          label="Заказчик"
          name="customer"
          route="customers"
          renderValue={(w) => {
            return `${w.customer_name}`
          }}
        />

      <SelectCollection 
          label="Книга"
          name="book"
          route="books"
          renderValue={(w) => {
            return `${w.name}`
          }}
        />

      <Form.Item
        label="Дата создания"
        name="receipt_date"
        rules={[
          {
            required: true,
            message: 'Please input receipt date',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      
      <Form.Item
        label="Дата завершения"
        name="completion_date"
        rules={[
          {
            required: true,
            message: 'Please input completion date',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Количество"
        name="oredered_book_copies_number"
        rules={[
          {
            required: true,
            message: 'Please input order bool copies number',
          },
        ]}
      >
        <InputNumber 
          step={100}
          min={0}
        />
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