import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss';

export default class JDCard extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    return <View className="jd-card">{this.props.children}</View>;
  }
}
