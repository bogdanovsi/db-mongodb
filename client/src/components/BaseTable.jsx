import React, { Component, useState } from 'react';
import { Table, Popconfirm } from 'antd';

class BaseTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            columns: []
        }
    }
    
    operations = [
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a>Delete</a>
                </Popconfirm>
              ) : null,
        }
    ]

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    addedOperations(columns) {
        return columns.concat(this.operations)
    }

    transformDataToColumns(data) {
        if(!data) return [];

        return Object.keys(data[0])
            .filter((key) => key !== '_id')
            .map((key, i) => {
                return {
                    title: key,
                    dataIndex: key,
                    key: i
                } 
            });
    }
    
    componentWillMount() {    
        fetch(`${this.props.route}/all`,
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
        .then(res => this.setState({
                dataSource: res.map((item, i) => { return { ...item, key: i } }),
                columns: this.addedOperations(this.transformDataToColumns(res))
            })
        )
    }

    render() {
        return (
            <>
                <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </>
        );
    }
}

export default BaseTable;