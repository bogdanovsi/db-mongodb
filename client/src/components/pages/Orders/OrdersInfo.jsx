import React, { Component } from 'react';


const CustomerInfo = ({ currentData }) => {

  return (
      <>
        <p>book_cipher : {currentData.book_cipher}</p>
        <p>book: {currentData.book}</p>
        <p>customer: {currentData.customer}</p>
        <p>receipt_date: {currentData.receipt_date}</p>
        <p>completion_date: {currentData.completion_date}</p>
      </>
  );
};

export default CustomerInfo;