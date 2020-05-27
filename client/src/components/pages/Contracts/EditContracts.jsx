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

const dateFormat = 'DD-MM-YYYY';

const EditContracts = ({currentData, closePopup}) => {
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
    closePopup();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const formatDates = (currentData) => {
    return {
      ...currentData,
      created: moment(currentData.created, DATE_FORMAT),
      expiration_date: moment(currentData.expiration_date, DATE_FORMAT),
      annulment_date: moment(currentData.annulment_date, DATE_FORMAT)
    }
  }

  if(currentData) {
    form.setFieldsValue(formatDates(currentData));
  }

  return (
    <Form
      action="contracts"
      method="post"
      form={form}
      {...layout}
      name="basic"
      initialValues={formatDates(currentData)}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <SelectCollection 
        label="Писатель"
        name={["writer", "_id"]}
        route="writers"
        value={(currentData && currentData.writer) != null ? currentData.writerData._id : null}
        renderValue={(w) => {
          return `${w.surname} ${w.name}`
        }}
      />

      <Form.Item
        label="Номер контракта"
        name="contract_number"
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
        label="Дата создания"
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
        label="Дата истичения"
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
        label="Аннулирование"
        name="annulment"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label="Дата аннулирования"
        name="annulment_date"
      >
        <DatePicker format={dateFormat} />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Редактировать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditContracts;