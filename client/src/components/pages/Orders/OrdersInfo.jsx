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
          <p>book: {currentData ? renderBook(currentData.book) : '-'}</p>
          <p>customer: {currentData ? renderCustomer(currentData.customer) : '-'}</p>
          <p>receipt_date: {currentData ? currentData.receipt_date : '-'}</p>
          <p>completion_date: {currentData ? currentData.completion_date : '-'}</p>
        </div>
        <Table dataSource={costData}>
          <Column title="Full cost" dataIndex="full_cost" key="full_cost" />
          <Column title="Sell cost" dataIndex="sell_cost" key="sell_cost" />
        </Table>
      </>
    );
  }
};

export default OrdersInfo;