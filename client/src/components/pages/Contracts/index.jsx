import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddNewContract from './AddNewContract';
import ModalButton from '../../ModalButton';

class Contracts extends Component {
    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Contracts</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddNewContract} actionType={'Add'}/>
                </div>
                <BaseTable route={"contracts"} />
            </>
        )
    }
}

export default Contracts;