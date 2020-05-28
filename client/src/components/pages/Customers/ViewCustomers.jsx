import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

import BaseView from '../../BaseTable/BaseView';

const ViewCustomers = React.forwardRef(({ onRowClick }, ref) => (
        <BaseView ref={ref} route={'customers'} onRowClick={onRowClick}>
            <Column title="ФИО заказчика" dataIndex="customer_name" key="customer_name" />
            <Column title="Адрес" dataIndex="address" key="address" />
            <Column title="Номер телефона" dataIndex="phone_number" key="phone_number" />
            <Column title="Контактное лицо" dataIndex="contact_person" key="contact_person" />
        </BaseView>
    )
);

export default ViewCustomers;