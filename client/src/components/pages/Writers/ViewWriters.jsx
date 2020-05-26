import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

import BaseView from '../../BaseTable/BaseView';

const ViewWriters = React.forwardRef(({ onRowClick }, ref) => (
    <BaseView ref={ref}  route={'writers'} onRowClick={onRowClick}>
            <Column title="Номер паспорта" dataIndex="passport_number" key="passport_number" />
            <Column title="Фамилия" dataIndex="surname" key="surname" />
            <Column title="Имя" dataIndex="name" key="name" />
            <Column title="Отчество" dataIndex="patronymic" key="patronymic" />
            <Column title="Адрес" dataIndex="address" key="address" />
            <Column title="Телефон" dataIndex="phone" key="phone" />            
        </BaseView>
    )
);

export default ViewWriters;