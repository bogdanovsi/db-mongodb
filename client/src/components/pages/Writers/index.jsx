import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddWriter from './AddWriter';
import ModalButton from '../../ModalButton';

class Writers extends Component {
    render() {
        const container = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginBottom: '15px'
        }   

        return (
            <>
                <h2 style={{textAlign: 'center'}}>Writers</h2>
                <div style={container}>
                    <ModalButton tableType={'Add new order'} formComponent={AddWriter} />
                </div>
                <BaseTable route={"writers"} />
            </>
        )
    }
}

export default Writers;