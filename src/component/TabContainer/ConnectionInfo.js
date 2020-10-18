import { Descriptions, Divider } from 'antd';
import React from 'react';

export default class ConnectionInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state.connection = this.props.data;
  }

  renderConnectionInfo(connection) {
    const { id, name, status, vpcId, tunnelSubnet, tunnelIp, remoteTunnelNo, remoteTunnelIp, masterIp, slaveIp, createTime, updateTime } = connection;
    const title = '链接名称: ' + name + ', 状态: ' + status;
    return (
      <div key={id}>
        <Descriptions title={title} >
          <Descriptions.Item label='id'>{id}</Descriptions.Item>
          <Descriptions.Item label='vpcId'>{vpcId}</Descriptions.Item>
          <Descriptions.Item label='隧道子网'>{tunnelSubnet}</Descriptions.Item>
          <Descriptions.Item label='隧道IP'>{tunnelIp}</Descriptions.Item>
          <Descriptions.Item label='远端隧道号'>{remoteTunnelNo}</Descriptions.Item>
          <Descriptions.Item label='远端隧道ip'>{remoteTunnelIp}</Descriptions.Item>
          <Descriptions.Item label='主ip'>{masterIp}</Descriptions.Item>
          <Descriptions.Item label='备ip'>{slaveIp}</Descriptions.Item>
          <Descriptions.Item label='创建时间'>{createTime}</Descriptions.Item>
          <Descriptions.Item label='更新时间'>{updateTime}</Descriptions.Item>
        </Descriptions >
        <Divider dashed />
      </div>
    );
  }

  state = {
    connection: []
  }

  render() {
    const connectionInfoList = this.state.connection.map(e => this.renderConnectionInfo(e))
    return (
      <div>
        { connectionInfoList }
      </div>
    );
  }
}

ConnectionInfo.defaultProps = {
  data: []
}
