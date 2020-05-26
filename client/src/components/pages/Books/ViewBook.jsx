import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderColumnWriter } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewBook = React.forwardRef(({ onRowClick }, ref) => (
        <BaseView ref={ref} route={'books'} onRowClick={onRowClick}>
            <Column title="Шифр книги" dataIndex="book_chiper" key="book_chiper" />
            <Column title="Название книги" dataIndex="name" key="name" />
            <Column title="Тираж" dataIndex="circulation" key="circulation" />
            <Column title="Дата публикации" dataIndex="publication_date" key="publication_date" />
            <Column title="Цена изготовления" dataIndex="cost_price" key="cost_price" />
            <Column title="Цена продажи" dataIndex="selling_price" key="selling_price" />
            <Column title="Гонорар" dataIndex="fee" key="fee" />
            <Column title="Писатель" dataIndex="writer" key="writer" render={renderColumnWriter} />
        </BaseView>
    )
);

export default ViewBook;