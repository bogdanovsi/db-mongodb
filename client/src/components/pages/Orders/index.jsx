import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddOrderForm from './AddNewOrder';
import ModalButton from '../../ModalButton';
import EditOrders from './EditOrders';
import OrdersInfo from './OrdersInfo';
import ViewOrders from './ViewOrders';
import { Modal, Button } from 'antd';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: '',
            viewMode: true,
            data: ''
        }
    }

    
    onClick = (record) => {
        this.setState({ isOpen: true, record });
        fetch(`/orders/data/${record._id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          }).then(res => res.json())
            .then(data => this.setState({ data: data }))
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
                    <ModalButton tableType={'Add new order'} formComponent={AddOrderForm} actionType={'Add'}/>
                </div>
                <ViewOrders onRowClick={this.onClick}/>
                <Modal
                    title={`order: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >   
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Edit' : 'Back to info' }
                    </Button>
                    { this.state.viewMode ? <OrdersInfo currentData={this.state.record} costData={this.state.data}/> : <EditOrders closePopup={this.handleOk} currentData={this.state.record}/>}
                </Modal>
            </>
        )
    }
}

export default Orders;