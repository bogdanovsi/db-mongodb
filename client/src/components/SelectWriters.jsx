import React, { Component } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

class SelectCollection extends Component {
    state = { items: [] }

    componentDidMount() {
        fetch(`/${this.props.route}/all`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        )
        .then(res => {
            if (!res.ok) { throw res; }
            return res.json();
        })
        .then(items => {
          this.setState({items})
        })
    }

    render() {
        return (
            <Form.Item
                label={this.props.label}
                name={this.props.name}
                rules={[
                    {
                        required: true,
                        message: 'Please input number contract',
                    }
                ]}
                initialValues={this.props.value}
            >
                <Select allowClear>
                {
                    this.state.items.map((w,i) => {
                        return (
                            <Option key={w._id} value={w._id}>{this.props.renderValue(w)}</Option>
                        )
                    })
                }
                </Select>
            </Form.Item>
        );
    }

}

export default SelectCollection;