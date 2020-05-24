import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

import BaseView from '../../BaseTable/BaseView';

const ViewWriters = ({ onRowClick }) => {
    return (
        <BaseView route={'writers'} onRowClick={onRowClick}>
            <Column title="passport_number" dataIndex="passport_number" key="passport_number" />
            <Column title="surname" dataIndex="surname" key="surname" />
            <Column title="name" dataIndex="name" key="name" />
            <Column title="patronymic" dataIndex="patronymic" key="patronymic" />
            <Column title="address" dataIndex="address" key="address" />
            <Column title="phone" dataIndex="phone" key="phone" />            
        </BaseView>
    )
};

export default ViewWriters;