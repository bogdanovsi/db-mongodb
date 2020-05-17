import React, { Component, useForm } from 'react';
import { Form, Input, Checkbox, Button, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

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

const dateFormat = 'YYYY/MM/DD';

const EditContracts = ({currentData}) => {
  console.log(currentData.annulment_date);
  const [form] = Form.useForm();
  const onFinish = values => {    
    fetch(`/contracts/${currentData._id}`, {
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

  if(currentData) form.setFieldsValue({
    ...currentData,
    created: moment(currentData.created),
    expiration_date: moment(currentData.expiration_date),
    annulment_date: moment(currentData.annulment_date)
  });

  return (
    <Form
      action="contracts"
      method="post"
      form={form}
      {...layout}
      name="basic"
      initialValues={{
        ...currentData,
        created: moment(currentData.created),
        expiration_date: moment(currentData.expiration_date),
        annulment_date: moment(currentData.annulment_date)
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
        <DatePicker format={dateFormat} />
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
        <DatePicker format={dateFormat}/>
      </Form.Item>

      <Form.Item
        label="Annulment"
        name="annulment"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Annulment date"
        name="annulment_date"
      >
        <DatePicker format={dateFormat} />
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