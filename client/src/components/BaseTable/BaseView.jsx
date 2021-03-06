import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
const { Column } = Table;
import moment from 'moment';

import { DATE_FORMAT } from '../../constants';
const DATEFORMAT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})*Z$/;
import DeleteCell from './DeleteCell';

class BaseView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentData: null,
            isLoading: true
        }
    }

    componentDidMount() {
        this.updateData();
    }

    handleDelete = key => {
        const dataSource = [...this.state.currentData];
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
                if (res.ok && checkDeleteCount(res)) {
                    this.setState({ currentData: dataSource.filter(item => item.key !== key) });
                } else {
                    console.error("Не удалось удалить элемент");
                }
            })
    };

    updateData = () => {
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
            .then(res => {
                this.setState({
                    currentData: res.map((item, i) => {
                        let data = { key: i }

                        for (let key in item) {
                            if (Array.isArray(item[key])) {
                                let lookup = item[key][0];
                                data[key] = lookup;
                                data['writerData'] = lookup;
                            } else if (DATEFORMAT.test(item[key])) {
                                data[key] = moment(item[key]).format(DATE_FORMAT)
                            } else {
                                data[key] = item[key]
                            }
                        }

                        return data
                    })
                });

                this.setState({ isLoading: false });
            })
    }

    render() {
        return (
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            event.stopPropagation();
                            this.props.onRowClick(record);
                        }
                    }
                }}
                loading={this.state.isLoading}
                dataSource={this.state.currentData}
            >
                {this.props.children}
                <Column title="Удаление элемента" dataIndex="action" key="action" render={
                    (text, record) => (
                        <DeleteCell
                            record={record}
                            onConfirm={() => this.handleDelete(record.key)}
                        />
                    )}
                />
            </Table>
        )
    }
}

export default BaseView;