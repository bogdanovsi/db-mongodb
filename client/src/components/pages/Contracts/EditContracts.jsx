import React, { Component, useForm } from 'react';
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

const EditContracts = ({currentData}) => {
  console.log(currentData.annulment_date);
  const [form] = Form.useForm();
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

  if(currentData) form.setFieldsValue(currentData);

  return (
    <Form
      action="contracts"
      method="post"
      form={form}
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
          defaultValue={currentData.number_contract || ''}
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
        <DatePicker defaultValue={moment(currentData.created).format() || ''}/>
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
        <DatePicker defaultValue={moment(currentData.expiration_date).format() || ''}/>
      </Form.Item>

      <Form.Item
        label="Annulment"
        name="annulment"
        valuePropName="checked"
      >
        <Checkbox defaultValue={currentData.annulment || ''}/>
      </Form.Item>

      <Form.Item
        label="Annulment date"
        name="annulment_date"
      >
        <DatePicker defaultValue={moment(currentData.annulment_date).format() || ''} />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditContracts;