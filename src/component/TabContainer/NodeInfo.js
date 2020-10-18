import { Button, Descriptions, Divider, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';


export default class NodeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state.nodeInfo = this.props.data;
  }

  state = {
    nodeInfo: [],
  }

  renderNodeInfo(nodeInfo) {
    const { role, hrpRole, status, ecsId, flavor, tunnelIp, downlinkIp, uplinkIp, createTime, updateTime } = nodeInfo;
    const title = '角色: ' + role + ', 当前角色: ' + hrpRole + ', 当前状态: ' + status;
    return (
      <div key = {ecsId}>
        <Descriptions title = { title } >
          <Descriptions.Item label = 'ecsId' > { ecsId } </Descriptions.Item>
          <Descriptions.Item label = '规格' > { flavor } </Descriptions.Item>
          <Descriptions.Item label = '隧道IP' > { tunnelIp } </Descriptions.Item>
          <Descriptions.Item label = '下联面IP' > { downlinkIp } </Descriptions.Item>
          <Descriptions.Item label = '上联面IP' > { uplinkIp } </Descriptions.Item>
          <Descriptions.Item label = '创建时间' > { createTime } </Descriptions.Item>
          <Descriptions.Item label = '更新时间' > { updateTime } </Descriptions.Item>
          <Descriptions.Item>
            {
              <Space>
                <Button type='primary'>刷新</Button>
                <Button type='primary'>主备切换</Button>
              </Space>
            }
          </Descriptions.Item>
        </Descriptions >


        <Divider dashed/>
      </div>
    );
  }

  render() {
      const nodeInfoList = this.state.nodeInfo.map(e => this.renderNodeInfo(e));
      return (
        <div>
          { nodeInfoList }
        </div>
      );
  }
}

NodeInfo.defaultProps = {
    data: []
}
