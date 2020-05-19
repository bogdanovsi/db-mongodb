import React, { Component } from 'react';
import { Form, Input, Checkbox, Button, DatePicker, InputNumber, Select } from 'antd';
import SelectCollection from '../../SelectWriters';

const { Option } = Select;

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

class AddNewContract extends Component {
  state = { writers: [] };

  onFinish = values => {    
    fetch('/contracts/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    });
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
      return (
        <Form
          action="contracts"
          method="post"
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
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
            <DatePicker />
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
            <DatePicker />
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
            <DatePicker />
          </Form.Item>
        
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    }
}

export default AddNewContract;