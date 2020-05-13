import React, { Component, useState } from 'react';
import { Table } from 'antd';

class BaseTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            columns: []
        }
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
                columns: this.transformDataToColumns(res)
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