import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import './index.scss';
export default class JDPageWrap extends Component {
  render() {
    return <View className="page-wrap test">{this.props.children}</View>;
  }
}
JDPageWrap.options = { addGlobalClass: true };
JDPageWrap.defaultProps = {};