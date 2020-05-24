import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

import BaseView from '../../BaseTable/BaseView';

const ViewCustomers = ({ onRowClick }) => {
    return (
        <BaseView route={'customers'} onRowClick={onRowClick}>
            <Column title="customer_name" dataIndex="customer_name" key="customer_name" />
            <Column title="address" dataIndex="address" key="address" />
            <Column title="phone_number" dataIndex="phone_number" key="phone_number" />
            <Column title="contact_person" dataIndex="contact_person" key="contact_person" />
        </BaseView>
    )
};

export default ViewCustomers;