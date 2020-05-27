import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddWriter from './AddWriter';
import EditWriter from './EditWriter';
import WritersInfo from './WritersInfo';
import ViewWriters from './ViewWriters';
import ModalButton from '../../ModalButton';
import { Modal, Button } from 'antd';

class Writers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: '',
            viewMode: true,
            data: '',
            contract: ''
        }

        this.viewRef = React.createRef();
    }

    onClick = (record) => {
        this.setState({ isOpen: true, record });
        fetch(`/writers/${record._id}/books`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          }).then(res => res.json())
            .then(data => this.setState({ data: data }))

        fetch(`/writers/${record._id}/contract`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          }).then(res => res.json())
            .then(data => this.setState({ contract: data }))
    }

    handleOk = e => {
        console.log('handleOk');

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
                    <ModalButton tableType={'Add new writer'} formComponent={AddWriter} actionType={'Добавить'} closePopup={this.handleOk}/>
                </div>
                <ViewWriters ref={this.viewRef} onRowClick={this.onClick} />
                <Modal
                    title={`writer: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >       
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Редактировать' : 'Вернутся к информации' }
                    </Button>
                    { this.state.viewMode ? <WritersInfo currentData={this.state.record} contract={this.state.contract} booksData={this.state.data} /> : <EditWriter closePopup={this.handleOk} currentData={this.state.record}/>}
                </Modal>
            </>
        )
    }
}

export default Writers;