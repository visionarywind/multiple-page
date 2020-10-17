import { Button, Tabs } from 'antd';
import React from 'react';
import './InstanceTab.css';

const { TabPane } = Tabs;

class InstanceTab extends React.Component {
  state = {
    show: false
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <Button onClick={this.handleClick}>点我</Button>
        <div className='floating'>
          {this.state.show && <Tabs type="card">
            <TabPane tab="Tab Title 1" key="1">
              <p>Content of Tab Pane 1</p>
              <p>Content of Tab Pane 1</p>
              <p>Content of Tab Pane 1</p>
            </TabPane>
            <TabPane tab="Tab Title 2" key="2">
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab="Tab Title 3" key="3">
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
            </TabPane>
          </Tabs>}
        </div>
      </div>
    )
  }
}

export default InstanceTab;
