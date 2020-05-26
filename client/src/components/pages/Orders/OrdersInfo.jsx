import React, { Component } from 'react';
import { Table } from 'antd';
import { renderBook, renderCustomer } from '../../../utils/renderColumns';
const { Column } = Table;

class OrdersInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentData, costData } = this.props;
    return (
      <>
        <div>
          <p>Книга: {currentData ? renderBook(currentData.book) : '-'}</p>
          <p>Заказчик: {currentData ? renderCustomer(currentData.customer) : '-'}</p>
          <p>Дата создания: {currentData ? currentData.receipt_date : '-'}</p>
          <p>Дата завершения: {currentData ? currentData.completion_date : '-'}</p>
        </div>
        <Table dataSource={costData}>
          <Column title="Стоимость производства" dataIndex="full_cost" key="full_cost" />
          <Column title="Стоимость продажи" dataIndex="sell_cost" key="sell_cost" />
          <Column title="Итоговая прибыль" dataIndex="profit_cost" key="profit_cost" />
        </Table>
      </>
    );
  }
};

export default OrdersInfo;