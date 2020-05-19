import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddNewContract from './AddNewContract';
import ModalButton from '../../ModalButton';
import EditContracts from './EditContracts';
import { Modal } from 'antd';


class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: ''
        }
    }
    onClick = (record) => {
        this.setState({ isOpen: true, record });
    }

    handleOk = e => {
        this.setState({
            isOpen: false,
            record: ''
        });
    };
    
    handleCancel = e => {
        this.setState({
            isOpen: false,
            record: ''
        });
    };

    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Contracts</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddNewContract} actionType={'Add'}/>
                </div>
                <BaseTable 
                    route={"contracts"} 
                    onRowClick={this.onClick}
                    renderLookup={(writer) => `${writer.name} ${writer.surname}`}
                />
                <Modal
                    title={`contract: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >       
                    <EditContracts currentData={this.state.record} />
                </Modal>
            </>
        )
    }
}

export default Contracts;