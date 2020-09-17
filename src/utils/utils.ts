import { QueryInfo } from "../typings/utils.d";
export const utils = {
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
};
