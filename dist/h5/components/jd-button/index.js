import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import './index.scss';
export default class JDButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'btn'
    };
    this.updateState(props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }
  updateState(props) {
    const { type, size } = props;
    const className = ['btn'];
    if (type === 'primary') {
      className.push('btn-primary');
    }
    if (size === 'small') {
      className.push('btn-small');
    }
    const _cls = Array.from(new Set(className)).join(' ');
    this.setState({
      className: _cls
    });
  }
  onClick($event) {
    this.props.onClick(...arguments);
  }
  render() {
    return <View className={this.state.className} onClick={this.onClick}>
        {this.props.label}
      </View>;
  }
}
JDButton.options = { addGlobalClass: true };
JDButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};
JDButton.defaultProps = {
  type: 'default',
  size: 'default',
  label: '未设置',
  onClick: e => {}
};