import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddBookForm from './AddBookForm';
import ModalButton from '../../ModalButton';
import EditBook from './EditBook';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import BooksInfo from './BooksInfo';
import ViewBook from './ViewBook';
import EditButton from '../../EditButton';


class Books extends Component {
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
                    <ModalButton tableType={'Добавить новую книгу'} formComponent={AddBookForm} actionType={'Добавить'} closePopup={this.handleOk}/>
                </div>
                <ViewBook ref={this.viewRef} onRowClick={this.onClick} />
                { this.state.isOpen ?
                    <Modal
                    title={`book: ${this.state.record ? this.state.record._id : ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <EditButton viewMode={this.state.viewMode} onModeChange={this.onModeChange} />
                    {this.state.viewMode ? <BooksInfo currentData={this.state.record}/> : <EditBook closePopup={this.handleOk} currentData={this.state.record}/> }
                </Modal> : null }
            </>
        )
    }
}

export default Books;