import React, { Component, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const DeleteCell = (props) => {
    return (
        <Popconfirm title="Sure to delete?" 
            onConfirm={(ev) => {       
                ev.stopPropagation();
                props.onConfirm()
            }} 
            onCancel={(ev) => {
                ev.stopPropagation();
            }}
        >
            <Button
                type="danger"
                icon={<DeleteOutlined 
                    style={{ verticalAlign: '0.12rem' }}
                />}
                onClick={(ev) => { 
                    ev.stopPropagation();
                }}
            />
        </Popconfirm>
    );       
}
export default DeleteCell;