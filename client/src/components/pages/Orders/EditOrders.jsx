import React, { Component, useForm } from 'react';
import { Form, Input, Checkbox, Button, DatePicker, InputNumber } from 'antd';
import SelectCollection from '../../SelectWriters';
import moment from 'moment';

import { DATE_FORMAT } from '../../../constants';

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

const EditOrders = ({currentData}) => {
  const [form] = Form.useForm();
  const onFinish = values => {    
    fetch(`/orders/${currentData._id}`, {
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

  const formatDates = (currentData) => {
    return {
      ...currentData,
      receipt_date: moment(currentData.receipt_date, DATE_FORMAT),
      completion_date: moment(currentData.completion_date, DATE_FORMAT)
    }
  }

  if(currentData) {
    form.setFieldsValue(formatDates(currentData));
  }

  return (
    <Form
      action="order"
      method="post"
      {...layout}
      name="basic"
      initialValues={formatDates(currentData)}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <SelectCollection 
          label="Customer"
          name="customer"
          route="customers"
          renderValue={(w) => {
            return `${w.customer_name}`
          }}
        />

      <SelectCollection 
          label="Book"
          name="book"
          route="books"
          renderValue={(w) => {
            return `${w.name}`
          }}
        />

      <Form.Item
        label="Chiper"
        name="chiper"
        rules={[
          {
            required: true,
            message: 'Please input book chiper',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Receipt date"
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
        label="Completion date"
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
        label="Copies number"
        name="order_book_copies_number"
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

export default EditOrders;