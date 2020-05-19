import React, { Component } from 'react';


const CustomerInfo = ({ currentData }) => {

  return (
      <>
        <p>customer name : {currentData.customer_name}</p>
        <p>address: {currentData.address}</p>
        <p>phone_number: {currentData.phone_number}</p>
        <p>contact_person: {currentData.contact_person}</p>
      </>
  );
};

export default CustomerInfo;