import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './index.scss';

export default class JDPageWrap extends Component {
  static options = { addGlobalClass: true };

  static defaultProps = {};
  render() {
    return <View className="page-wrap test">{this.props.children}</View>;
  }
}
