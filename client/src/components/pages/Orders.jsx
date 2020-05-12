import React, { Component } from 'react';
import BaseTable from '../BaseTable';

class Orders extends Component {
    render() {
        return (
            <>
                <BaseTable route={"orders"} />
            </>
        )
    }
}

export default Orders;