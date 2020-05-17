import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddOrderForm from './AddNewOrder';
import ModalButton from '../../ModalButton';

class Orders extends Component {
    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Orders</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddOrderForm} actionType={'Add'}/>
                </div>
                <BaseTable route={"orders"} />
            </>
        )
    }
}

export default Orders;