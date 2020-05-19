import React, { Component, useForm } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
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

const EditBook = ({currentData}) => {
  const [form] = Form.useForm();
  const onFinish = values => {
    fetch(`/books/${currentData._id}`, {
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
      publication_date: moment(currentData.publication_date, DATE_FORMAT)
    }
  }

  if(currentData) form.setFieldsValue(formatDates(currentData));

  return (
    <Form
        action="books"
        method="post"
        form={form}
        {...layout}
        name="basic"
        initialValues={formatDates(currentData)}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
    <SelectCollection 
      label="Writer"
      name="writer"
      route="writers"
      value={currentData.writerData != null ? currentData.writerData._id : null}
      renderValue={(w) => {
        return `${w.surname} ${w.name}`
      }}
    />
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input book name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Chiper"
      name="book_cipher"
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
      label="Circulation"
      name="circulation"
      rules={[
        {
          required: true,
          message: 'Please input circulation',
        },
      ]}
    >
      <InputNumber min={0} step={100} />
    </Form.Item>

    <Form.Item
      label="Publication date"
      name="publication_date"
      rules={[
        {
          required: true,
          message: 'Please input publication date',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      label="Cost price"
      name="cost_price"
      rules={[
        {
          required: true,
          message: 'Please input cost price',
        },
      ]}
    >
      <InputNumber 
        step={100}
        min={0}
      />
    </Form.Item>
    
    <Form.Item
      label="Selling price"
      name="selling_price"
      rules={[
        {
          required: true,
          message: 'Please input selling price',
        },
      ]}
    >
      <InputNumber 
        step={100}
        min={0}
      />
    </Form.Item>
    
    <Form.Item
      label="Fee"
      name="fee"
      rules={[
        {
          required: true,
          message: 'Please input fee',
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

export default EditBook;