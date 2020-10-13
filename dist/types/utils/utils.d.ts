import { QueryInfo } from "../typings/utils.d";
export declare const utils: {
    /**
     * 获取url中query参数对象
     * @param url
     */
    getQueryByUrl(url: string): QueryInfo;
    /**
     * 千位分隔符
     * @param n : number 数字
     */
    thousandBitSeparator(n: number): string;
};
