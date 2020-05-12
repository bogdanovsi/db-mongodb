import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddBookForm from './AddBookForm';
import ModalButton from '../../ModalButton';

class Books extends Component {
    render() {
        const container = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginBottom: '15px'
        }   

        return (
            <>
                <h2 style={{textAlign: 'center'}}>Books</h2>
                <div style={container}>
                    <ModalButton tableType={'Add new book'} formComponent={AddBookForm} />
                </div>
                <BaseTable route={"books"} />
            </>
        )
    }
}

export default Books;