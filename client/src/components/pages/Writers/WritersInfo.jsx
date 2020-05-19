import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';
const { Column } = Table;

const WriterInfo = ({ currentData, booksData, contract }) => {

  const expDays = (contract) => moment(contract.expiration_date).diff(moment(), 'days');

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
        <div>
          { 
            expDays(contract) <= 0 ?
              <h3>Contract ended</h3>
            : <>
              <h3>Contract</h3>
              <p>Days until the end of the contract: {expDays(contract)}</p>
            </>
          }
          <h3>Books</h3>
          <Table dataSource={booksData}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Fee" dataIndex="fee" key="fee" />
            <Column title="Book chiper" dataIndex="book_chiper" key="book_chiper" />
          </Table>
        </div>
      </>
  );
};

export default WriterInfo;