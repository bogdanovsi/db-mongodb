import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddOrderForm from './AddNewOrder';
import ModalButton from '../../ModalButton';
import EditOrders from './EditOrders';
import OrdersInfo from './OrdersInfo';
import { Modal, Button } from 'antd';


class Orders extends Component {
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
                <h2 style={{textAlign: 'center'}}>Orders</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddOrderForm} actionType={'Add'}/>
                </div>
                <BaseTable route={"orders"} onRowClick={this.onClick}/>
                <Modal
                    title={`order: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >   
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Edit' : 'Back to info' }
                    </Button>
                    { this.state.viewMode ? <OrdersInfo currentData={this.state.record} /> : <EditOrders currentData={this.state.record}/>}
                </Modal>
            </>
        )
    }
}

export default Orders;