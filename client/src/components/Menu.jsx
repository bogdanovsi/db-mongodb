import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  BookOutlined,
  DatabaseOutlined,
  EditOutlined,
  CopyOutlined,
  GoldOutlined,
  OrderedListOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <div>     
            <Menu
              defaultSelectedKeys={['1']}
              mode="horizontal"
              onClick={this.onMenuClick}
              defaultOpenKeys={['books']}
              >
              <Menu.Item icon={<BookOutlined />} key="books" onClick={() => this.props.history.push('/books')}>
                Books
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="writers" onClick={() => this.props.history.push('/writers')}>
                Writers
              </Menu.Item>
              <Menu.Item icon={<CopyOutlined />} key="contracts"
                onClick={() => this.props.history.push('/contracts')}
              >
                Contracts
              </Menu.Item>
              <Menu.Item icon={<OrderedListOutlined />} key="orders"
                onClick={() => this.props.history.push('/orders')}
              >
                Orders
              </Menu.Item>
              <Menu.Item icon={<GoldOutlined />} key="customers"
                onClick={() => this.props.history.push('/customers')}
              >
                Customers
              </Menu.Item>
            </Menu>
        </div>
      </div>      
    );
  }
}

export default withRouter(Sidebar)