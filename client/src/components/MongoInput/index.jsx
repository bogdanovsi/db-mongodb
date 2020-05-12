import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';

export default class MongoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            output: ''
        }

        this.onFinish = this.onFinish.bind(this);
    }

    onFinish(values) {
        fetch(`${this.props.route}/${values.searchValue}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(res => {
                this.setState({
                    output: JSON.stringify(res)
                });
            });
    }

    render() {
        return (
            <>
                <Form 
                    layout="horizontal"
                    onFinish={this.onFinish}
                >
                    <Form.Item 
                        name="searchValue" 
                        label={this.props.route}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Test it</Button>
                    </Form.Item>
                </Form>
                <p>{this.state.output}</p>
            </>
        );
    }
}