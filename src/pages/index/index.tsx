import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import './index.scss';

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'JD UI',
  };

  constructor() {
    super(...arguments);
  }

  onShareAppMessage() {}

  render() {
    return <View className="page page-index">JD UI 文档</View>;
  }
}
