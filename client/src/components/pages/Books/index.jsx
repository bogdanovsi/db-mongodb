import React, { Component } from 'react';
import BaseTable from '../../BaseTable';
import AddBookForm from './AddBookForm';
import ModalButton from '../../ModalButton';

import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class Books extends Component {
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
                
                <BaseTable route={"books"} />
            </>
        )
    }
}

export default Books;