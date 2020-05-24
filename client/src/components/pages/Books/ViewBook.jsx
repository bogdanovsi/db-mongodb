import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

import BaseView from '../../BaseTable/BaseView';

const ViewBook = ({ onRowClick }) => {
    return (
        <BaseView route={'books'} onRowClick={onRowClick}>
            <Column title="book_chiper" dataIndex="book_chiper" key="book_chiper" />
            <Column title="Book name" dataIndex="name" key="name" />
            <Column title="circulation" dataIndex="circulation" key="circulation" />
            <Column title="publication_date" dataIndex="circulation" key="circulation" />
            <Column title="cost_price" dataIndex="circulation" key="circulation" />
            <Column title="selling_price" dataIndex="circulation" key="circulation" />
            <Column title="fee" dataIndex="circulation" key="circulation" />
            <Column title="writer" dataIndex="writer" key="writer" render={
               (all, record) => all.length > 0 ? `${all[0].name} ${all[0].surname}` : '-'
            } />
        </BaseView>
    )
};

export default ViewBook;