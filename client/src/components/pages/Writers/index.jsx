import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddWriter from './AddWriter';
import ModalButton from '../../ModalButton';

class Writers extends Component {
    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Writers</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddWriter} actionType={'Add'}/>
                </div>
                <BaseTable route={"writers"} />
            </>
        )
    }
}

export default Writers;