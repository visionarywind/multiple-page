import { Descriptions } from 'antd';
import React from 'react';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state.instanceInfo = this.props.data;
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
      tunnelSubNet: undefined,
      subnetIp: undefined,
      desc: undefined,
      chargeMode: undefined,
      availableZone: undefined,
    }
  }

  render() {
      const { id, name, user, status, flavor, mode, vpcId, tunnelSubNet, subnetIp, desc, chargeMode, availableZone } = this.state.instanceInfo;

      const title = '租户:' + user + ' - id:' + id;

      return (
        <Descriptions title = { title } >
          <Descriptions.Item label = "名称" > { name } </Descriptions.Item>
          <Descriptions.Item label = "状态" > { status } </Descriptions.Item>
          <Descriptions.Item label = "规格" > { flavor } </Descriptions.Item>
          <Descriptions.Item label = "模式" > { mode } </Descriptions.Item>
          <Descriptions.Item label = "vpcId" > { vpcId } </Descriptions.Item>
          <Descriptions.Item label = "隧道子网" > { tunnelSubNet } </Descriptions.Item>
          <Descriptions.Item label = "子网ip" > { subnetIp } </Descriptions.Item>
          <Descriptions.Item label = "描述" > { desc } </Descriptions.Item>
          <Descriptions.Item label = "计费模式" > { chargeMode } </Descriptions.Item>
          <Descriptions.Item label = "availableZone" > { availableZone } </Descriptions.Item>
        </Descriptions>
      );
  }
}

BasicInfo.defaultProps = {
  data: { }
}

export default BasicInfo;
