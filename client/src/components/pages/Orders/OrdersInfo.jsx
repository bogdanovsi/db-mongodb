import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

class OrdersInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentData, costData } = this.props;
    return (
      <>
        <div>
          <p>book: {currentData.book}</p>
          <p>customer: {currentData.customer}</p>
          <p>receipt_date: {currentData.receipt_date}</p>
          <p>completion_date: {currentData.completion_date}</p>
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