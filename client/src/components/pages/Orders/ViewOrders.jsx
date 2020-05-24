import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderBook, renderCustomer } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewOrders = ({ onRowClick }) => {
    return (
        <BaseView route={'orders'} onRowClick={onRowClick}>
            <Column title="receipt_date" dataIndex="receipt_date" key="receipt_date" />
            <Column title="completion_date" dataIndex="completion_date" key="completion_date" />
            <Column title="oredered_book_copies_number" dataIndex="oredered_book_copies_number" key="oredered_book_copies_number" />
            <Column title="book" dataIndex="book" key="book" render={renderBook} />
            <Column title="customer" dataIndex="customer" key="customer" render={renderCustomer} />
        </BaseView>
    )
};

export default ViewOrders;