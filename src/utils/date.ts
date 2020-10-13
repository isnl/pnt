/*
 * @Author: Peanut
 * @Description:  时间处理工具
 * @Date: 2020-09-16 14:24:37
 * @Last Modified by: Peanut
 * @Last Modified time: 2020-09-16 15:24:05
 */
const getTodayDate = (): Date => {
  return new Date();
};
const date = {
  /**
   * 获取当前日期 2020-10-01
   * @param showZero 是否自动补0
   * @param sep 分隔符号
   */
  getDate(showZero?: boolean, sep?: string): string {
    const date: Date = getTodayDate();
    const y: number = date.getFullYear();
    const m: string | number = showZero
      ? date.getMonth() + 1 > 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
    const d: number | string = showZero
      ? date.getDate() > 10
        ? date.getDate()
        : "0" + date.getDate()
      : date.getDate();
    if (!sep) {
      sep = "/";
    }
    return `${y}${sep}${m}${sep}${d}`;
  },
  /**
   * 获取当前时间 00:00:00
   * @param showZero 是否自动补0
   * @param sep 分隔符号
   */
  getTime(showZero?: boolean, sep?: string): string {
    const date: Date = getTodayDate();
    const h: string | number = showZero
      ? date.getHours() < 10
        ? "0" + date.getHours()
        : date.getHours()
      : date.getHours();
    const m: string | number = showZero
      ? date.getMinutes() < 10
        ? "0" + date.getMinutes()
        : date.getMinutes()
      : date.getMinutes();
    const s: string | number = showZero
      ? date.getSeconds() < 10
        ? "0" + date.getSeconds()
        : date.getSeconds()
      : date.getSeconds();
    if (!sep) {
      sep = ":";
    }
    return `${h}${sep}${m}${sep}${s}`;
  },
  /**
   * 获取日期和时间
   * @param showZero 是否自动补0
   * @param dsep 日期分隔符
   * @param tse 时间分隔符
   */
  getDateAndTime(showZero?: boolean, dsep?: string, tse?: string): string {
    const d = this.getDate(showZero, dsep);
    const t = this.getTime(showZero, tse);
    return `${d} ${t}`;
  },
  /**
   * 获取星期
   * @param prefix 前缀
   */
  getWeek(prefix: string): string {
    if (!prefix) {
      prefix = "星期";
    }
    const date: Date = getTodayDate();
    const weeks = ["日", "一", "二", "三", "四", "五", "六"];
    const w = date.getDay();
    return prefix + weeks[w];
  },
  /**
   * 获取现在到未来某一时间戳的倒计时
   * @param ts 时间戳
   */
  getCountDown(ts: number): string {
    //如果大于或者等于
    const nowDate = new Date().getTime();
    if (nowDate >= ts) {
      return "已结束";
    }
    const diffTime = ts - nowDate; //距离结束时间的毫秒数
    let d = Math.floor(diffTime / (1000 * 60 * 60 * 24)); //计算天数
    let h = Math.floor((diffTime / (1000 * 60 * 60)) % 24); //计算小时数
    let m = Math.floor((diffTime / (1000 * 60)) % 60); //计算分钟数
    let s = Math.floor((diffTime / 1000) % 60); //计算秒数
    return d + "天" + h + "小时" + m + "分" + s + "秒"; //返回倒计时的字符串
  },
};
export { date };
