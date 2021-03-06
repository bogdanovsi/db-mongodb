import React, { Component, useForm } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import SelectCollection from '../../SelectWriters';
import moment from 'moment';

import { DATE_FORMAT, REQUER_RULE } from '../../../constants';

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

const EditBook = ({currentData, closePopup}) => {
  const [form] = Form.useForm();
  const onFinish = values => {
    fetch(`/books/${currentData._id}`, {
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
      label="Писатель"
      name={["writer", "_id"]}
      route="writers"
      value={currentData.writer != null ? currentData.writer._id : null}
      renderValue={(w) => {
        return `${w.surname} ${w.name}`
      }}
    />
    <Form.Item
      label="Название книги"
      name="name"
      rules={[ REQUER_RULE ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Шифр книги"
      name="book_chiper"
      rules={[ REQUER_RULE ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Тираж"
      name="circulation"
      rules={[ REQUER_RULE ]}
    >
      <InputNumber min={0} step={100} />
    </Form.Item>

    <Form.Item
      label="Дата публикации"
      name="publication_date"
      rules={[ REQUER_RULE ]}
    >
      <DatePicker placeholder={"Введите дату"} />
    </Form.Item>

    <Form.Item
      label="Цена изготовления"
      name="cost_price"
      rules={[ REQUER_RULE ]}
    >
      <InputNumber 
        step={100}
        min={0}
      />
    </Form.Item>
    
    <Form.Item
      label="Цена продажи"
      name="selling_price"
      rules={[ REQUER_RULE ]}
    >
      <InputNumber 
        step={100}
        min={0}
      />
    </Form.Item>
    
    <Form.Item
      label="Гонорар"
      name="fee"
      rules={[ REQUER_RULE ]}
    >
      <InputNumber 
        step={100}
        min={0}
      />
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Редактировать
      </Button>
    </Form.Item>
  </Form>
  );
};

export default EditBook;