import { URL_PREFIX } from '@/mock';
import { Button, Tabs } from 'antd';
import React from 'react';
import BasicInfo from './BasicInfo';
import ConnectionInfo from './ConnectionInfo';
import './InstanceTab.css';
import NodeInfo from './NodeInfo';

const { TabPane } = Tabs;

class InstanceTab extends React.Component {
  constructor(props) {
    super(props);
    this.state.instanceInfo = this.props.instanceInfo;
    this.state.nodeInfo = this.props.nodeInfo;
    this.state.connection = this.props.connection;

    console.log('URL_PREFIX', URL_PREFIX);
  }

  state = {
    show: true,
    instanceInfo: {},
    nodeInfo: [],
    connection: [],
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { instanceInfo, nodeInfo, connection } = this.state;
    return (
      <div className='wrapper'>
        <Button hidden={this.state.show} onClick={this.handleClick}>点我点我点我点我点我点我点我</Button>
        <div className='floating'>
          {this.state.show && <Tabs type='card'>
            <TabPane tab='基本信息' key='1'>
              <BasicInfo data={instanceInfo} />
            </TabPane>
            <TabPane tab='结点信息' key='2'>
              <NodeInfo data={nodeInfo} />
            </TabPane>
            <TabPane tab='网关链接' key='3'>
              <ConnectionInfo data={connection} />
            </TabPane>
          </Tabs>}
        </div>
      </div>
    )
  }
}

InstanceTab.defaultProps = {
  instanceInfo: {
    id: 1,
    name: 'l2cg',
    user: 'user',
    status: 'running',
    flavor: 'high',
    mode: 'ha',
    vpcId: '123456',
    subnet: '192.168.0.0/24',
    subnetIp: '192.168.0.2',
    desc: '第一个实例',
    chargeMode: '预付费',
    availableZone: '可用区1',
  },
  nodeInfo: {
    config: {
      role: { name: "角色", editable: false },
      hrpRole: { name: "当前角色", editable: false },
      status: { name: "当前状态", editable: true },
      ecsId: { name: "ecsId", editable: false },
      flavor: { name: "规格", editable: false },
      tunnelIp: { name: "隧道IP", editable: false },
      downlinkIp: { name: "下联面IP", editable: false },
      uplinkIp: { name: "上联面IP", editable: false },
      createTime: { name: "创建时间", editable: false },
      updateTime: { name: "更新时间", editable: false },

      order: ['role', 'hrpRole', 'status', 'ecsId', 'flavor', 'tunnelIp', 'downlinkIp', 'uplinkIp', 'createTime', 'updateTime'],
    },
    data: [
      {
        role: 'master',
        hrpRole: 'master',
        status: 'running',
        ecsId: 'masterEcsId',
        flavor: '高性能',
        tunnelIp: '192.168.0.2',
        downlinkIp: '192.168.1.2',
        uplinkIp: '10.18.1.2',
        createTime: '27/08/2020',
        updateTime: '27/09/2020',
      },
      {
        role: 'slave',
        hrpRole: 'slave',
        status: 'running',
        ecsId: 'slaveEcsId',
        flavor: '高性能',
        tunnelIp: '192.168.0.3',
        downlinkIp: '192.168.1.3',
        uplinkIp: '10.18.1.23',
        createTime: '27/08/2020',
        updateTime: '27/09/2020',
      },
    ]
  },
  connection: [
    {
      id: 'connect1',
      name: '链接1',
      status: '已连接',
      vpcId: 'vpc1',
      tunnelSubnet: '192.168.3.0/24',
      tunnelIp: '192.168.3.4',
      remoteTunnelNo: '9987',
      remoteTunnelIp: '10.17.9.12',
      masterIp: '192.168.5.2',
      slaveIp: '192.168.5.3',
      createTime: '2020年10月17日 19时54分31秒 CST',
      updateTime: '2020年10月18日 19时54分31秒 CST',
    },
    {
      id: 'connect2',
      name: '链接2',
      status: '已连接',
      vpcId: 'vpc2',
      tunnelSubnet: '192.168.4.0/24',
      tunnelIp: '192.168.4.4',
      remoteTunnelNo: '9984',
      remoteTunnelIp: '10.17.9.14',
      masterIp: '192.168.5.4',
      slaveIp: '192.168.5.9',
      createTime: '2020年10月17日 19时54分31秒 CST',
      updateTime: '2020年10月18日 19时54分31秒 CST',
    },
  ],
}

export default InstanceTab;
