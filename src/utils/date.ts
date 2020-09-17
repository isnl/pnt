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
  getDateAndTime(showZero?: boolean, dsep?: string, tse?: string): string {
    const d = this.getDate(showZero, dsep);
    const t = this.getTime(showZero, tse);
    return `${d} ${t}`;
  },
  getWeek(prefix: string): string {
    if (!prefix) {
      prefix = "星期";
    }
    const date: Date = getTodayDate();
    const weeks = ["日", "一", "二", "三", "四", "五", "六"];
    const w = date.getDay();
    return prefix + weeks[w];
  },
};
export { date };
