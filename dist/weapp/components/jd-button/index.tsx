import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';

import './index.scss';

interface JDButtonProps {
  type?: 'primary' | 'default';
  label: string;
  onClick: Function;
  size?: 'default' | 'small';
}

interface JDButtonState {
  className: string;
}

export default class JDButton extends Component<JDButtonProps, JDButtonState> {
  static options = { addGlobalClass: true };

  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps: JDButtonProps = {
    type: 'default',
    size: 'default',
    label: '未设置',
    onClick: (e) => {},
  };

  state: JDButtonState = {
    className: 'btn',
  };

  constructor(props) {
    super(props);

    this.updateState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState(props: JDButtonProps) {
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
      className: _cls,
    });
  }

  onClick($event) {
    this.props.onClick(...arguments);
  }

  render() {
    return (
      <View className={this.state.className} onClick={this.onClick}>
        {this.props.label}
      </View>
    );
  }
}
