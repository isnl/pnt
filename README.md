## Install

```bash
npm install pnt -S
```

## How to use

### date(日期工具类) 

- getDate(showZero, sep) 获取当前日期

| 属性     | 类型    | 默认值 | 必填 | 说明         |
| -------- | ------- | ------ | ---- | ------------ |
| showZero | Boolean | true   | 否   | 是否自动补 0 |
| sep      | String  | -      | 否   | 分隔符       |

- getTime(showZero, sep) 获取当前时间

| 属性     | 类型    | 默认值 | 必填 | 说明         |
| -------- | ------- | ------ | ---- | ------------ |
| showZero | Boolean | true   | 否   | 是否自动补 0 |
| sep      | String  | :      | 否   | 分隔符       |

- getDateAndTime(showZero, dsep, tse) 获取日期和时间

| 属性     | 类型    | 默认值 | 必填 | 说明         |
| -------- | ------- | ------ | ---- | ------------ |
| showZero | Boolean | true   | 否   | 是否自动补 0 |
| dsep     | String  | -      | 否   | 日期分隔符   |
| tse      | String  | :      | 否   | 时间分隔符   |

- getWeek(prefix) 获取星期

| 属性   | 类型   | 默认值 | 必填 | 说明 |
| ------ | ------ | ------ | ---- | ---- |
| prefix | String | 星期   | 否   | 前缀 |

- getCountDown(ts) 获取现在到未来某一时间戳的倒计时

| 属性 | 类型   | 默认值 | 必填 | 说明                 |
| ---- | ------ | ------ | ---- | -------------------- |
| ts   | Number |        | 是   | 未来某一时刻的时间戳 |

#### examples

```javascript
import { date } from "pnt";
console.log(date.getDate(true, "-")); //2020-09-15
console.log(date.getDate(false, "/")); //2020/9/15

console.log(date.getTime(true, ":")); //18:51:06
console.log(date.getTime(false, " ")); //18 51 6

console.log(date.getDateAndTime(true, "-", ":")); //2020-09-15 18:51:07
console.log(date.getDateAndTime(false, "-", ":")); //2020-9-15 18:51:7
console.log(date.getDateAndTime(false, "/", " ")); //2020/9/15 18 51 7

console.log(date.getWeek("")); //星期三
console.log(date.getWeek("礼拜")); //礼拜三
console.log(date.getWeek("星期")); //星期三
console.log(date.getWeek("周")); //周三

console.log(date.getCountDown(1602727200000)); //3天12时20秒
```

### utils(其他工具类)

- getQueryByUrl(url) 获取 url 中 query 参数对象

| 属性 | 类型   | 默认值 | 必填 | 说明          |
| ---- | ------ | ------ | ---- | ------------- |
| url  | String |        | 是   | 完整 url 路径 |

- thousandBitSeparator(n) 给当前数字添加千分位分隔符

| 属性 | 类型   | 默认值 | 必填 | 说明 |
| ---- | ------ | ------ | ---- | ---- |
| n    | Number |        | 是   | 添加千分位分隔符的数字 |

#### examples

```javascript
import { utils } from "pnt";
console.log(utils.getQueryByUrl("https://iiter.cn/user?a=peanut&b=true$c=123")); //{ a: "peanut", b: true, c: 123 };
console.log(utils.thousandBitSeparator(9999999)); // "9,999,999"
```
