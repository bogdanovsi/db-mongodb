import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';
const { Column } = Table;

const WriterInfo = ({ currentData, booksData, contract }) => {

  const expDays = (contract) => moment(contract.expiration_date).diff(moment(), 'days');

  return (
      <>
        <div style={{ margin: '10px 0' }}>
          <p><b>Фамилия:</b> {currentData.surname}</p>
          <p><b>Имя:</b> {currentData.name}</p>
          <p><b>Отчество:</b> {currentData.patronymic}</p>
          <p><b>Номер паспорта:</b> {currentData.passport_number}</p>
          <p><b>Адрес:</b> {currentData.address}</p>
          <p><b>Телефон:</b> {currentData.phone}</p>
        </div>
        <div>
          { 
            expDays(contract) <= 0 || (contract.annulment || moment(contract.annulment_date) < moment(new Date())) ?
              <h3>Контракт окончен</h3>
            : <>
              <h3>Контракт</h3>
              <p>Дни до конца контракта: {expDays(contract)}</p>
            </>
          }
          <h3>Книги</h3>
          <Table dataSource={booksData}>
            <Column title="Название книги" dataIndex="name" key="name" />
            <Column title="Гонорар" dataIndex="fee" key="fee" />
            <Column title="Шифр книги" dataIndex="book_chiper" key="book_chiper" />
          </Table>
        </div>
      </>
  );
};

export default WriterInfo;
