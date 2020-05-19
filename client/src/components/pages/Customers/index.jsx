import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddCustomer from './AddCustomer';
import ModalButton from '../../ModalButton';
import EditCustomers from './EditCustomers';
import { Modal, Button } from 'antd';
import CustomerInfo from './CustomerInfo';

class Customers extends Component {
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
                <h2 style={{textAlign: 'center'}}>Customers</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new customer'} formComponent={AddCustomer} actionType={'Add'}/>
                </div>
                <BaseTable route={"customers"} onRowClick={this.onClick}/>
                <Modal
                    title={`customer: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >   
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Edit' : 'Back to info' }
                    </Button>
                    { this.state.viewMode ? <CustomerInfo currentData={this.state.record} /> : <EditCustomers currentData={this.state.record}/>}
                </Modal>
            </>
        )
    }
}

export default Customers;