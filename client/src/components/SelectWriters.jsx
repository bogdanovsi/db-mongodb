import React, { Component } from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

class SelectWriters extends Component {
    state = { writers: [] }

    componentWillMount() {
        fetch(`writers/all`,
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
            writers: res
          })
        })
    }

    render() {
        return (
            <Form.Item
                label="Writer"
                name="writer"
                rules={[
                {
                    required: true,
                    message: 'Please input number contract',
                },
                ]}
            >
                <Select allowClear defaultValue={this.props.value}>
                {
                    this.state.writers ? this.state.writers.map(w => {
                    return (
                        <Option value={w._id}>{`${w.surname} ${w.name}`}</Option>
                    )
                    }) : null
                }
                </Select>
            </Form.Item>
        );
    }

}

export default SelectWriters;