import React, { Component } from 'react';

const renderWriter = (writer) => `${writer != null ? writer._id : '---'}`

const BooksInfo = ({ currentData }) => {

  return (
      <>
        <p>Название книги: {currentData.name}</p>
        <p>Шифр книги: {currentData.book_chiper}</p>
        <p>Тираж: {currentData.circulation}</p>
        <p>Цена изготовления: {currentData.cost_price}</p>
        <p>Гонорар: {currentData.fee}</p>
        <p>Дата публикации: {currentData.publication_date}</p>
        <p>Цена продажи: {currentData.selling_price}</p>
        <p>Писатель: {renderWriter(currentData.writer)}</p>
      </>
  );
};

export default BooksInfo;