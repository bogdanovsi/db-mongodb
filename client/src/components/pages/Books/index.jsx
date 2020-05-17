import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddBookForm from './AddBookForm';
import ModalButton from '../../ModalButton';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Modal } from 'antd';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            record: ''
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

    render() {
        return (
            <>
                <h2 style={{textAlign: 'center'}}>Books</h2>
                <div className="table-btns-row">
                    <Button 
                         type="danger"
                         icon={<DeleteOutlined style={{ verticalAlign: '0.12rem' }}/>}
                         onClick={
                            () => console.log('what')
                         }
                    >
                        Delete All
                    </Button>
                    <ModalButton tableType={'Add new book'} formComponent={AddBookForm} actionType={'Add'}/>
                </div>
                
                <BaseTable route={"books"}  onRowClick={this.onClick}/>
            </>
        )
    }
}

export default Books;