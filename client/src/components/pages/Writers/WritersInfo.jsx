import React, { Component } from 'react';


const CustomerInfo = ({ currentData, booksData  }) => {

  return (
      <>
        <div style={{ margin: '10px 0' }}>
          <p><b>surname:</b> {currentData.surname}</p>
          <p><b>name:</b> {currentData.name}</p>
          <p><b>passport number:</b> {currentData.pasport_number}</p>
          <p><b>patronymic:</b> {currentData.patronymic}</p>
          <p><b>address:</b> {currentData.address}</p>
          <p><b>phone:</b> {currentData.phone}</p>
          <br/>
          <ul>
            {booksData && booksData.map(el => 
              <li>
                <p>{el.name}</p>
                <p>{el.fee}</p>
                <p>{el.book_cipher}</p>
              </li>)}
          </ul>
        </div>
        
      </>
  );
};

export default CustomerInfo;