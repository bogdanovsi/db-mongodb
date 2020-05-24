import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddNewContract from './AddNewContract';
import ModalButton from '../../ModalButton';
import EditContracts from './EditContracts';
import { Modal } from 'antd';
import { Button } from 'antd';
import ContractsInfo from './ContractsInfo';
import ViewContracts from './ViewContracts';

class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: '',
            viewMode: true
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

    onModeChange = e => {
        this.setState({
            viewMode: !this.state.viewMode
        });
    }


    render() {
        return (
            <>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddNewContract} actionType={'Add'}/>
                </div>
                <ViewContracts onRowClick={this.onClick} />
                <Modal
                    title={`contract: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >       
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Edit' : 'Back to info' }
                    </Button>
                    {this.state.viewMode ? <ContractsInfo currentData={this.state.record}/> : <EditContracts closePopup={this.handleOk} currentData={this.state.record}/> }
                </Modal>
            </>
        )
    }
}

export default Contracts;