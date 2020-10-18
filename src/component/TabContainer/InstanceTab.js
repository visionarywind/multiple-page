import { Button, Descriptions, Tabs } from 'antd';
import React from 'react';
import './InstanceTab.css';

const { TabPane } = Tabs;

class InstanceTab extends React.Component {
  state = {
    show: false,
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
    },
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

  renderBasicInfo() {
    const title = 'id:' + this.state.instanceInfo.id + ' - 名称： ' + this.state.instanceInfo.name;
    return (
      <Descriptions title={title}>
        <Descriptions.Item label="user">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    );
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
              {this.renderBasicInfo()}
            </TabPane>
            <TabPane tab="结点信息" key="2">
              {this.renderNodeInfo()}
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

export default InstanceTab;
