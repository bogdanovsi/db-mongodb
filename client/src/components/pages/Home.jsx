import React, { Component } from 'react';
import { Table } from 'antd';
import BaseTable from '../BaseTable';

class Home extends Component {
    render() {
        return (
            <>
                <BaseTable route={"books"} />
            </>
        )
    }
}

export default Home;