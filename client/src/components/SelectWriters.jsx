import React, { Component } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

class SelectCollection extends Component {
    state = { items: [] }

    componentWillMount() {
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
        .then(res => {
          this.setState({
            items: res
          })
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
                    this.state.items ? this.state.items.map((w,i) => {
                    return (
                        // 
                        <Option key={i} value={w._id}>{this.props.renderValue(w)}</Option>
                    )
                    }) : null
                }
                </Select>
            </Form.Item>
        );
    }

}

export default SelectCollection;