import React, { Component } from 'react';


const ContractsInfo = ({ currentData }) => {

  return (
      <>
        <p>contract_number: {currentData.contract_number}</p>
        <p>expiration_date: {currentData.expiration_date}</p>
        <p>created: {currentData.created}</p>
        <p>annulment_date: {currentData.annulment_date}</p>
        <p>annulment: {currentData.annulment ? 'yes' : 'no'}</p>
      </>
  );
};

export default ContractsInfo;