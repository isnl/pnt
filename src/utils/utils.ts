/*
 * @Author: Peanut
 * @Description:  常用工具类
 * @Date: 2020-10-13 10:52:41
 * @Last Modified by: 张欢
 * @Last Modified time: 2020-10-13 10:56:50
 */
import { QueryInfo } from "../typings/utils.d";
export const utils = {
  /**
   * 获取url中query参数对象
   * @param url
   */
  getQueryByUrl(url: string): QueryInfo {
    const [host, qs] = url.split("?");
    const arr = qs.split("&");
    let queryInfo: QueryInfo = {};
    arr.forEach(item => {
      let [key, value] = item.split("=");
      try {
        value = JSON.parse(value);
      } catch (error) {}
      queryInfo[key] = value;
    });
    return queryInfo;
  },
  /**
   * 千位分隔符
   * @param n : number 数字
   */
  thousandBitSeparator(n: number) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (n + "").replace(reg, "$&,");
  },
};
