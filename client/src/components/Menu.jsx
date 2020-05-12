import React from 'react';
import { Link } from 'react-router-dom';
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

export default class Sidebar extends React.Component {
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{width: 80, height: 80}}>
        <div style={{ width: 256, position: 'absolute', zIndex: 1000 }}>     
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="dark"
              onClick={this.onMenuClick}
              inlineCollapsed={this.state.collapsed}
              >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">
                    Home
                </Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<DatabaseOutlined />} title="Collections">
                  <Menu.Item icon={<BookOutlined />} key="2">
                    <Link to="/books">
                      Books
                    </Link>
                  </Menu.Item>
                  <Menu.Item icon={<EditOutlined />} key="3">
                    <Link to="/writers">
                      Writers
                    </Link>
                  </Menu.Item>
                  <Menu.Item icon={<CopyOutlined />} key="4">
                    <Link to="/contracts">
                      Contracts
                    </Link>
                  </Menu.Item>
                  <Menu.Item icon={<OrderedListOutlined />} key="5">
                    <Link to="/orders">
                      Orders
                    </Link> 
                  </Menu.Item>
                  <Menu.Item icon={<GoldOutlined />} key="6">
                    <Link to="/customers">
                      Customers
                    </Link>
                  </Menu.Item>
              </SubMenu>
            </Menu>
        </div>
      </div>      
    );
  }
}