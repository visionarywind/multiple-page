import { Button, Descriptions, Input, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import EditableItem from './EditableItem';

class NodeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state.nodeInfo = this.props.data;
  }

  state = {
    nodeInfo: [],
  }

  renderItem({label, data}) {
    return <EditableItem label={label} data={data}></EditableItem>
  }



  renderNodeInfo(nodeInfo, config) {
    console.log('renderNodeInfo nodeInfo', nodeInfo);
    console.log('renderNodeInfo config', config);
    const { order } = config.order;

    console.log('renderNodeInfo order', config.order);
    const itemList = config.order.map(e => {
      const cfg = config[e];
      const val = nodeInfo[e];
      console.log('cfg', cfg);
      console.log('cfg.editable', cfg.editable);

      console.log('val', val);

      return (
        <Descriptions.Item label={cfg.name}>
          {
          cfg.editable ?
            <Input editable='true' defaultValue={val}></Input> :
          val
          }
        </Descriptions.Item>
      );
    });

    const { ecsId } = nodeInfo;
    return (
      <div key={ecsId}>
        <Descriptions title={ecsId}>
          {itemList}
          <Descriptions.Item>
            {
              <Space>
                <Button type='primary'>编辑</Button>
                <Button type='primary'>刷新</Button>
                <Button type='primary'>主备切换</Button>
              </Space>
            }
          </Descriptions.Item>
        </Descriptions>
        </div>
    )

/* 静态页面
    const { role, hrpRole, status, ecsId, flavor, tunnelIp, downlinkIp, uplinkIp, createTime, updateTime } = nodeInfo;
    const title = '角色: ' + role + ', 当前角色: ' + hrpRole + ', 当前状态: ' + status;
    return (
      <div key={ecsId}>
        <Descriptions title = { title } >
          <Descriptions.Item label='ecsId'>{ecsId}</Descriptions.Item>
          <Descriptions.Item label='规格'>{flavor}</Descriptions.Item>
          <Descriptions.Item label='隧道IP'> { tunnelIp } </Descriptions.Item>
          <Descriptions.Item label='下联面IP'> { downlinkIp } </Descriptions.Item>
          <Descriptions.Item label='上联面IP'> { uplinkIp } </Descriptions.Item>
          <Descriptions.Item label='创建时间'> { createTime } </Descriptions.Item>
          <Descriptions.Item label='更新时间'> { updateTime } </Descriptions.Item>
          <Descriptions.Item>
            {
              <Space>
                <Button type='primary'>编辑</Button>
                <Button type='primary'>刷新</Button>
                <Button type='primary'>主备切换</Button>
              </Space>
            }
          </Descriptions.Item>
        </Descriptions >


        <Divider dashed/>
      </div>
    );
  */
  }

  render() {
    const nodeInfoList = this.state.nodeInfo.data.map(e => this.renderNodeInfo(e, this.props.data.config));
      return (
        <div>
          { nodeInfoList }
        </div>
      );
  }
}

NodeInfo.defaultProps = {
  editable: {},
  data: []
}

export default NodeInfo;
