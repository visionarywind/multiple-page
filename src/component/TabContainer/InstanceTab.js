import { URL_PREFIX } from '@/mock';
import { Button, Descriptions, Tabs } from 'antd';
import React from 'react';
import BasicInfo from './BasicInfo';
import './InstanceTab.css';
import NodeInfo from './NodeInfo';

const { TabPane } = Tabs;

class InstanceTab extends React.Component {
  constructor(props) {
    super(props);
    this.state.instanceInfo = this.props.instanceInfo;

    console.log("URL_PREFIX", URL_PREFIX);
  }

  state = {
    show: false,
    nodeInfo: {

    },
    gwConnection: {

    },
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  renderNodeInfo() {
    return (
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    );
  }

  renderGwConnection() {
    return (
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    );
  }

  render() {
    return (
      <div className='wrapper'>
        <Button hidden={this.state.show} onClick={this.handleClick}>点我点我点我点我点我点我点我</Button>
        <div className='floating'>
          {this.state.show && <Tabs type="card">
            <TabPane tab='基本信息' key="1">
              <BasicInfo instanceInfo={this.props.instanceInfo} />
            </TabPane>
            <TabPane tab="结点信息" key="2">
              <NodeInfo />
            </TabPane>
            <TabPane tab="网关链接" key="3">
              {this.renderGwConnection()}
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
  },
  nodeInfo: {

  },
  gwConnection: {

  },
}

export default InstanceTab;
