import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderColumnWriter } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewBook = ({ onRowClick }) => {
    return (
        <BaseView route={'books'} onRowClick={onRowClick}>
            <Column title="book_chiper" dataIndex="book_chiper" key="book_chiper" />
            <Column title="Book name" dataIndex="name" key="name" />
            <Column title="circulation" dataIndex="circulation" key="circulation" />
            <Column title="publication_date" dataIndex="publication_date" key="publication_date" />
            <Column title="cost_price" dataIndex="cost_price" key="cost_price" />
            <Column title="selling_price" dataIndex="selling_price" key="selling_price" />
            <Column title="fee" dataIndex="fee" key="fee" />
            <Column title="writer" dataIndex="writer" key="writer" render={renderColumnWriter} />
        </BaseView>
    )
};

export default ViewBook;