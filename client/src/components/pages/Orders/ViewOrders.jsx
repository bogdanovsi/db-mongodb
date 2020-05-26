import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderColumnBook, renderColumnCustomer } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewOrders = React.forwardRef(({ onRowClick }, ref) => (
    <BaseView ref={ref} route={'orders'} onRowClick={onRowClick}>
            <Column title="Дата создания" dataIndex="receipt_date" key="receipt_date" />
            <Column title="Дата завершения" dataIndex="completion_date" key="completion_date" />
            <Column title="Количество" dataIndex="oredered_book_copies_number" key="oredered_book_copies_number" />
            <Column title="Книга" dataIndex="book" key="book" render={renderColumnBook} />
            <Column title="Заказчик" dataIndex="customer" key="customer" render={renderColumnCustomer} />
        </BaseView>
    )
);

export default ViewOrders;