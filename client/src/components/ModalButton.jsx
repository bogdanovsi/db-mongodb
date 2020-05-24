import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class ModalButton extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
    
    this.props.onOk && this.props.onOk();
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.actionType}
        </Button>
        <Modal
          title={this.props.tableType}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <this.props.formComponent closePopup={this.handleOk}/>
        </Modal>
      </div>
    );
  }
}