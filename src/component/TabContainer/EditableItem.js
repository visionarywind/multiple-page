import { Descriptions, Input } from 'antd';
import React from 'react';

const { Item } = Descriptions;

class EditableItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('EditableItem');
    this.state.value = this.props.data;
    this.state.disabled = this.props.disabled;
    console.log('EditableItem', this.state.value, this.state.disabled, this.props.label);

  }

  state = {
  }

  handleChange = value => {
    console.log('input changed', value);
  }

  render() {
    const { value, disabled } = this.state;
    const { label } = this.props;

    console.log('value', value, disabled, label);
    return (
      <Item label={label}>
        {value}
        <Input>
        </Input>
      </Item>
    )
  }
}

EditableItem.defaultProps = {
  label: undefined,
  data: undefined,
  disabled: false,
}

export default EditableItem;
