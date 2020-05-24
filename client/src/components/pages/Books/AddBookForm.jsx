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

const AddBookForm = ({ closePopup }) => {
  const [form] = Form.useForm();

  const onFinish = values => {    
    fetch('/books/', {
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
      action="book"
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
        label="Writer"
        name="writer"
        route="writers"
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
        name="book_chiper"
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

export default AddBookForm;