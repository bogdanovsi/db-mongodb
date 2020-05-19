import React, { Component } from 'react';

const BooksInfo = ({ currentData }) => {

  return (
      <>
        <p>name: {currentData.name}</p>
        <p>book_cipher: {currentData.book_cipher}</p>
        <p>circulation: {currentData.circulation}</p>
        <p>cost_price: {currentData.cost_price}</p>
        <p>fee: {currentData.fee}</p>
        <p>publication_date: {currentData.publication_date}</p>
        <p>selling_price: {currentData.selling_price}</p>
      </>
  );
};

export default BooksInfo;