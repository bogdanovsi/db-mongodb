import React, { Component } from 'react';


const ContractsInfo = ({ currentData }) => {

  return (
      <>
        <p>Номер контракта: {currentData.contract_number}</p>
        <p>Дата истичения: {currentData.expiration_date}</p>
        <p>Дата создания: {currentData.created}</p>
        <p>Дата аннулирования: {currentData.annulment_date}</p>
        <p>Аннулирование: {currentData.annulment ? 'yes' : 'no'}</p>
      </>
  );
};

export default ContractsInfo;