import React, { Component } from 'react';


const CustomerInfo = ({ currentData }) => {

  return (
      <>
        <div style={{ margin: '10px 0' }}>
          <p><b>surname:</b> {currentData.surname}</p>
          <p><b>name:</b> {currentData.name}</p>
          <p><b>passport number:</b> {currentData.pasport_number}</p>
          <p><b>patronymic:</b> {currentData.patronymic}</p>
          <p><b>address:</b> {currentData.address}</p>
          <p><b>phone:</b> {currentData.phone}</p>
        </div>
        
      </>
  );
};

export default CustomerInfo;