import React, { Component, useState } from 'react';
import { Table, Popconfirm } from 'antd';
import DeleteCell from './DeleteCell';

const PRIVATE_FLAG = '_';

class BaseTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            columns: [],
            editOpen: false
        }
    }
    
    operations = [
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
              this.state.dataSource.length >= 1 ? (
                <DeleteCell 
                    record={record}
                    onConfirm={() => this.handleDelete(record.key)}
                />
              ) : null,
        }
    ]

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        let row = dataSource.find(item => item.key === key);
        fetch(`${this.props.route}?_id=${row._id}`, 
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }  
        })
        .then(res => {
            if (!res.ok) { throw res; }
            return res.json();
        })
        .then(res => {
            const checkDeleteCount = (res) => res.deletedCount && res.deletedCount > 0;
            if(res.ok && checkDeleteCount(res)) { 
                this.setState({
                    dataSource: dataSource.filter(item => item.key !== key),
                });
            } else {
                console.error("Не удалось удалить элемент");
            }
        })
    };

    addedOperations(columns) {
        return columns.concat(this.operations)
    }

    transformDataToColumns(data) {
        if(Array.isArray(data) && data.length < 1) return [];
        
        return Object.keys(data[0])
            .filter((key) => key[0] !== PRIVATE_FLAG)
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
                <Table
                     onRow={(record, rowIndex) => {
                        return {
                          onClick: event => {
                              this.props.onRowClick(record);
                          }
                    }}}
                  dataSource={this.state.dataSource} columns={this.state.columns} />
            </>
        );
    }
}

export default BaseTable;