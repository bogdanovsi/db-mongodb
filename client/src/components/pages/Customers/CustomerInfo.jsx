import React, { Component } from 'react';


const CustomerInfo = ({ currentData }) => {

  return (
      <>
        <p>ФИО заказчика: {currentData.customer_name}</p>
        <p>Адрес: {currentData.address}</p>
        <p>Номер телефона: {currentData.phone_number}</p>
        <p>Контактное лицо: {currentData.contact_person}</p>
      </>
  );
};

export default CustomerInfo;