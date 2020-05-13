import React, { Component, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const DeleteCell = (props) => {
    return (
        <Popconfirm title="Sure to delete?" onConfirm={props.onConfirm}>
            <Button
                type="danger"
                icon={<DeleteOutlined style={{ verticalAlign: '0.12rem' }}/>}
            />
        </Popconfirm>
    );       
}
export default DeleteCell;