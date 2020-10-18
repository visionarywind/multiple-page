import { Descriptions } from 'antd';
import React from 'react';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state.instanceInfo = this.props.instanceInfo;
  }

  state = {
    instanceInfo: {
    id: undefined,
    name: undefined,
    user: undefined,
    status: undefined,
    flavor: undefined,
    mode: undefined,
    vpcId: undefined,
    subnet: undefined,
    subnetIp: undefined,
    desc: undefined,
    chargeMode: undefined,
    availableZone: undefined,
    }
  }

  render() {
    const { id, name, user, status, flavor, mode, vpcId, subnet, subnetIp, desc, chargeMode, availableZone } = this.state.instanceInfo;

    const title = '租户:' + user + ' - id:' + id;

    return (
      <Descriptions title={title}>
        <Descriptions.Item label="名称">{name}</Descriptions.Item>
        <Descriptions.Item label="状态">{status}</Descriptions.Item>
        <Descriptions.Item label="规格">{flavor}</Descriptions.Item>
        <Descriptions.Item label="模式">{mode}</Descriptions.Item>
        <Descriptions.Item label="vpcId">{vpcId}</Descriptions.Item>
        <Descriptions.Item label="子网">{subnet}</Descriptions.Item>
        <Descriptions.Item label="子网ip">{subnetIp}</Descriptions.Item>
        <Descriptions.Item label="描述">{desc}</Descriptions.Item>
        <Descriptions.Item label="计费模式">{chargeMode}</Descriptions.Item>
        <Descriptions.Item label="availableZone">{availableZone}</Descriptions.Item>
      </Descriptions>
    );
  }
}

BasicInfo.defaultProps = {
  instanceInfo: {
    id: 1,
    name: "l2cg",
    user: "user",
    status: "running",
    flavor: "high",
    mode: "ha",
    vpcId: "123456",
    subnet: "192.168.0.0/24",
    subnetIp: "192.168.0.2",
    desc: "第一个实例",
    chargeMode: "预付费",
    availableZone: "可用区1",
  }
}

export default BasicInfo;
