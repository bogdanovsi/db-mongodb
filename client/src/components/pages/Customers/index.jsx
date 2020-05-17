import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddCustomer from './AddCustomer';
import ModalButton from '../../ModalButton';

class Customers extends Component {
    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Customers</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new customer'} formComponent={AddCustomer} actionType={'Add'}/>
                </div>
                <BaseTable route={"customers"} />
            </>
        )
    }
}

export default Customers;