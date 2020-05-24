import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
const { Column } = Table;
import moment from 'moment';

import { DATE_FORMAT } from '../../constants';
const DATEFORMAT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})*Z$/;
import DeleteCell from './DeleteCell';

const BaseView = ({route, onRowClick, children}) => {
    const [currentData, setCurrentData] = useState([]);

    const handleDelete = key => {
        const dataSource = [...currentData];
        let row = dataSource.find(item => item.key === key);
        fetch(`${route}?_id=${row._id}`, 
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
                setCurrentData(dataSource.filter(item => item.key !== key));
            } else {
                console.error("Не удалось удалить элемент");
            }
        })
    };

    useEffect(() => {
        fetch(`${route}/all`,
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
            setCurrentData(res.map((item, i) => { 
                let data = { key: i }

                for(let key in item) {
                    if(DATEFORMAT.test(item[key])) {
                        data[key] = moment(item[key]).format(DATE_FORMAT)
                    } else {
                        data[key] = item[key]
                    }
                }

                return data
            }))
        })
    }, [])

    return (
        <Table
            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        event.stopPropagation();
                        onRowClick(record);
                    }
                }
            }}
            dataSource={currentData}
        >
            {children}
            <Column title="Delete Item" dataIndex="action" key="action" render={
                (text, record) => (
                    <DeleteCell 
                        record={record}
                        onConfirm={() => handleDelete(record.key)}
                    />
                )}
            />
        </Table>
    )
};

export default BaseView;