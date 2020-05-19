import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddWriter from './AddWriter';
import EditWriter from './EditWriter';
import WritersInfo from './WritersInfo';
import ModalButton from '../../ModalButton';
import { Modal, Button } from 'antd';

class Writers extends Component {
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
                <h2 style={{textAlign: 'center'}}>Writers</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new order'} formComponent={AddWriter} actionType={'Add'}/>
                </div>
                <BaseTable route={"writers"} onRowClick={this.onClick}/>
                <Modal
                    title={`writer: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >       
                    
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Edit' : 'Back to info' }
                    </Button>
                    { this.state.viewMode ? <WritersInfo currentData={this.state.record} /> : <EditWriter currentData={this.state.record}/>}
                </Modal>
            </>
        )
    }
}

export default Writers;