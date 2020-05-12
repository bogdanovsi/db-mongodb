import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddCustomer from './AddCustomer';
import ModalButton from '../../ModalButton';

class Customers extends Component {
    render() {
        const container = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginBottom: '15px'
        }   

        return (
            <>
                <h2 style={{textAlign: 'center'}}>Customers</h2>
                <div style={container}>
                    <ModalButton tableType={'Add new customer'} formComponent={AddCustomer} />
                </div>
                <BaseTable route={"customers"} />
            </>
        )
    }
}

export default Customers;