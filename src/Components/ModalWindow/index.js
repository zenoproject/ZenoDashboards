import React from 'react';
import { Modal } from 'antd';
class ModalWindow extends React.Component {
  render() {
    return (
      <Modal
        centered
        footer={this.props.footer}
        title={this.props.title}
        width={this.props.width}
        visible={this.props.visible}
        onCancel={this.props.onCancel}
        onOk={this.props.onOk}
        okText={this.props.okText}
        className={this.props.className || ''}
        maskClosable={!this.props.isNonMaskable}>
        {this.props.children}
      </Modal>
    );
  }
}
export default ModalWindow;
