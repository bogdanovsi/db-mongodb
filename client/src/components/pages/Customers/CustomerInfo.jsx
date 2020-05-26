import React, { Component } from 'react';


const CustomerInfo = ({ currentData }) => {

  return (
      <>
        <p>ФИО заказчика: {currentData.customer_name}</p>
        <p>Адресс: {currentData.address}</p>
        <p>Номер телефона: {currentData.phone_number}</p>
        <p>Контактоне лицо: {currentData.contact_person}</p>
      </>
  );
};

export default CustomerInfo;