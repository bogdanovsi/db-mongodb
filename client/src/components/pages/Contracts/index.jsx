import React, { Component } from 'react';
import BaseTable from '../../BaseTable';

class Contracts extends Component {
    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Contracts</h2>
                <BaseTable route={"contracts"} />
            </>
        )
    }
}

export default Contracts;