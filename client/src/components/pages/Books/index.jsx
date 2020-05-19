import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddBookForm from './AddBookForm';
import ModalButton from '../../ModalButton';
import EditBook from './EditBook';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import BooksInfo from './BooksInfo';


class Books extends Component {
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
                <h2 style={{textAlign: 'center'}}>Books</h2>
                <div className="table-btns-row">
                    <ModalButton tableType={'Add new book'} formComponent={AddBookForm} actionType={'Add'}/>
                </div>
                <BaseTable route={"books"}  onRowClick={this.onClick}/>
                

                <Modal
                    title={`book: ${this.state.record._id || ""}`}
                    visible={this.state.isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >       
                    <Button type="primary" htmlType="button" onClick={this.onModeChange}>
                        { this.state.viewMode ? 'Edit' : 'Back to info' }
                    </Button>
                    {this.state.viewMode ? <BooksInfo currentData={this.state.record}/> : <EditBook currentData={this.state.record}/> }
                </Modal>
            </>
        )
    }
}

export default Books;