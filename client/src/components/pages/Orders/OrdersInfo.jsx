import React, { Component } from 'react';


class OrdersInfo extends Component {
  constructor(props) {
    super(props);
}


  
  render() {
    const { currentData, costData } = this.props;
    return (
        <>
          <p>book_cipher : {currentData.book_cipher}</p>
          <p>book: {currentData.book}</p>
          <p>customer: {currentData.customer}</p>
          <p>receipt_date: {currentData.receipt_date}</p>
          <p>completion_date: {currentData.completion_date}</p>

          <h4>full cost: {costData.full_cost}</h4>
          <h4>sell cost: {costData.sell_cost}</h4>
        </>
    );
  }
};

export default OrdersInfo;