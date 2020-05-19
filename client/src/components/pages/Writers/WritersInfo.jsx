import React, { Component } from 'react';


const CustomerInfo = ({ currentData }) => {

  return (
      <>
        <p>surname: {currentData.surname}</p>
        <p>name: {currentData.name}</p>
        <p>passport number: {currentData.pasport_number}</p>
        <p>patronymic: {currentData.patronymic}</p>
        <p>address: {currentData.address}</p>
        <p>phone: {currentData.phone}</p>
      </>
  );
};

export default CustomerInfo;