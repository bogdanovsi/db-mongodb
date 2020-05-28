import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderColumnWriter } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewContracts = React.forwardRef(({ onRowClick }, ref) => (
        <BaseView ref={ref} route={'contracts'} onRowClick={onRowClick}>
            <Column title="Номер контракта" dataIndex="contract_number" key="contract_number" />
            <Column title="Дата создания" dataIndex="created" key="created" />
            <Column title="Дата истечения" dataIndex="expiration_date" key="expiration_date" />
            <Column title="Аннулирование" dataIndex="annulment" key="annulment" />
            <Column title="Дата аннулирования" dataIndex="annulment_date" key="annulment_date" />
            <Column title="Писатель" dataIndex="writer" key="writer" render={renderColumnWriter} />
        </BaseView>
    )
)

export default ViewContracts;