import React from 'react';
import { Button } from 'antd';

const EditButton = ({ onModeChange, viewMode }) => (
    <div style={{ marginBottom: 7 }}>
        <Button type="primary" htmlType="button" onClick={onModeChange} >
            { viewMode ? 'Редактировать' : 'Вернуться к информации' }
        </Button>
    </div>
);

export default EditButton;