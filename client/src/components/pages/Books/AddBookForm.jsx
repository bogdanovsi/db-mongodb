import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import SelectCollection from '../../SelectWriters';

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
        label="Писатель"
        name="writer"
        route="writers"
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
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBookForm;