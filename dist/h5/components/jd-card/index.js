import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import './index.scss';
export default class JDCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View className="jd-card">{this.props.children}</View>;
  }
}
JDCard.defaultProps = {};