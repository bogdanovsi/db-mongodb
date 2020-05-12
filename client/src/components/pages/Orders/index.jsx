import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddOrderForm from './AddNewOrder';
import ModalButton from '../../ModalButton';

class Orders extends Component {
    render() {
        const container = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginBottom: '15px'
        }   
        
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Orders</h2>
                <div style={container}>
                    <ModalButton tableType={'Add new order'} formComponent={AddOrderForm} />
                </div>
                <BaseTable route={"orders"} />
            </>
        )
    }
}

export default Orders;