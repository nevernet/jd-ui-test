import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
export const objectToString = style => {
  if (style && typeof style === 'object') {
    let styleStr = '';
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += `${lowerCaseKey}:${style[key]};`;
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};
export default class JDComponent extends Component {
  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */
  mergeStyle(style1, style2) {
    if (style1 && typeof style1 === 'object' && style2 && typeof style2 === 'object') {
      return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
  }
}
JDComponent.options = {
  addGlobalClass: true
};