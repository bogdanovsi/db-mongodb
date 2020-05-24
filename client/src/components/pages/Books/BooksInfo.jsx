import React, { Component } from 'react';

const renderWriter = (writer) => `${writer != null ? writer._id : '---'}`

const BooksInfo = ({ currentData }) => {

  return (
      <>
        <p>name: {currentData.name}</p>
        <p>book_chiper: {currentData.book_chiper}</p>
        <p>circulation: {currentData.circulation}</p>
        <p>cost_price: {currentData.cost_price}</p>
        <p>fee: {currentData.fee}</p>
        <p>publication_date: {currentData.publication_date}</p>
        <p>selling_price: {currentData.selling_price}</p>
        <p>writer: {renderWriter(currentData.writer)}</p>
      </>
  );
};

export default BooksInfo;