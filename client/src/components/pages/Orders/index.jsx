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
            data: []
        }
        this.viewRef = React.createRef();
    }
    
    onClick = (record) => {
        this.setState({ isOpen: true, record });
        fetch(`/orders/data/${record._id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        })
        .then(res => res.json())
        .then(data => this.setState({ data: [data] }))
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
                    <ModalButton tableType={'Add new order'} formComponent={AddOrderForm} actionType={'Добавить'} closePopup={this.handleOk}/>
                </div>
                <ViewOrders ref={this.viewRef} onRowClick={this.onClick}/>
                <Modal
                    title={`order: ${this.state.record ? this.state.record._id : ''}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >   
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Редактировать' : 'Вернутся к информации' }
                    </Button>
                    { 
                        this.state.viewMode ? 
                            <OrdersInfo currentData={this.state.record} costData={this.state.data}/> : 
                            <EditOrders currentData={this.state.record} closePopup={this.handleOk} />
                    }
                </Modal>
            </>
        )
    }
}

export default Orders;