import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

import BaseView from '../../BaseTable/BaseView';

const ViewOrders = ({ onRowClick }) => {
    return (
        <BaseView route={'orders'} onRowClick={onRowClick}>
            <Column title="receipt_date" dataIndex="receipt_date" key="receipt_date" />
            <Column title="completion_date" dataIndex="completion_date" key="completion_date" />
            <Column title="oredered_book_copies_number" dataIndex="oredered_book_copies_number" key="oredered_book_copies_number" />
            <Column title="book" dataIndex="book" key="book" render={
                (all, record) => all.length > 0 ? `${all[0].name}` : '-'
            } />
            <Column title="customer" dataIndex="customer" key="customer" render={
                (all, record) => all.length > 0 ? `${all[0].customer_name}` : '-'
            } />
        </BaseView>
    )
};

export default ViewOrders;