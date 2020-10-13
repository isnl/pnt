declare const date: {
    /**
     * 获取当前日期 2020-10-01
     * @param showZero 是否自动补0
     * @param sep 分隔符号
     */
    getDate(showZero?: boolean | undefined, sep?: string | undefined): string;
    /**
     * 获取当前时间 00:00:00
     * @param showZero 是否自动补0
     * @param sep 分隔符号
     */
    getTime(showZero?: boolean | undefined, sep?: string | undefined): string;
    /**
     * 获取日期和时间
     * @param showZero 是否自动补0
     * @param dsep 日期分隔符
     * @param tse 时间分隔符
     */
    getDateAndTime(showZero?: boolean | undefined, dsep?: string | undefined, tse?: string | undefined): string;
    /**
     * 获取星期
     * @param prefix 前缀
     */
    getWeek(prefix: string): string;
    /**
     * 获取现在到未来某一时间戳的倒计时
     * @param ts 时间戳
     */
    getCountDown(ts: number): string;
};
export { date };
