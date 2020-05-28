import React from 'react';
import { Form, Button, DatePicker, InputNumber } from 'antd';
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

const EditOrders = ({currentData, closePopup}) => {
  const [form] = Form.useForm();

  const onFinish = values => {    
    fetch(`/orders/${currentData._id}`, {
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
      receipt_date: moment(currentData.receipt_date, DATE_FORMAT),
      completion_date: moment(currentData.completion_date, DATE_FORMAT)
    }
  }

  if(currentData) {
    form.setFieldsValue(formatDates(currentData));
  }

  return (
    <Form
      form={form}
      action="order"
      method="post"
      {...layout}
      name="basic"
      initialValues={formatDates(currentData)}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <SelectCollection 
          label="Заказчик"
          name={["customer", "_id"]}
          route="customers"
          renderValue={(w) => {
            return `${w.customer_name}`
          }}
        />

      <SelectCollection 
          label="Книга"
          name={["book", "_id"]}
          route="books"
          renderValue={(w) => {
            return `${w.name}`
          }}
        />

      <Form.Item
        label="Дата создания"
        name="receipt_date"
        rules={[ REQUER_RULE ]}
      > 
        <DatePicker placeholder={"Введите дату"} />
      </Form.Item>
      
      <Form.Item
        label="Дата завершения"
        name="completion_date"
        rules={[ REQUER_RULE ]}
      >
        <DatePicker placeholder={"Введите дату"} />
      </Form.Item>

      <Form.Item
        label="Количество"
        name="oredered_book_copies_number"
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

export default EditOrders;