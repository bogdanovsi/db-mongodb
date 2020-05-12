import React, { Component } from 'react';
import BaseTable from '../BaseTable';

class Customers extends Component {
    render() {
        return (
            <>
                <BaseTable route={"customers"} />
            </>
        )
    }
}

export default Customers;