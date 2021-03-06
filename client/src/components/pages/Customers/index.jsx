import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddCustomer from './AddCustomer';
import ModalButton from '../../ModalButton';
import EditCustomers from './EditCustomers';
import { Modal, Button } from 'antd';
import CustomerInfo from './CustomerInfo';
import EditButton from '../../EditButton';
import ViewCustomers from './ViewCustomers';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: '',
            viewMode: true
        }
        this.viewRef = React.createRef();
    }
    onClick = (record) => {
        this.setState({ isOpen: true, record });
    }

    handleOk = e => {
        this.viewRef.current.updateData();

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
                    <ModalButton tableType={'Добавить нового заказчика'} formComponent={AddCustomer} actionType={'Добавить'} closePopup={this.handleOk}/>
                </div>
                <ViewCustomers ref={this.viewRef} onRowClick={this.onClick}/>
                <Modal
                    title={`customer: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >   
                    <EditButton viewMode={this.state.viewMode} onModeChange={this.onModeChange} /> 
                    { this.state.viewMode ? <CustomerInfo currentData={this.state.record} /> : <EditCustomers closePopup={this.handleOk} currentData={this.state.record}/>}
                </Modal>
            </>
        )
    }
}

export default Customers;