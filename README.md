### Install

```bash
npm install pnt -S
```

### How to use

#### date

```javascript
import { date } from "pnt";
console.log(date.getDate(true, "-")); //2020-09-15
console.log(date.getDate(false, "/")); //2020/9/15

console.log(date.getTime(true, ":")); //18:51:06
console.log(date.getTime(false, " ")); //18 51 6

console.log(date.getDateAndTime(true, "-", ":")); //2020-09-15 18:51:07
console.log(date.getDateAndTime(false, "-", ":")); //2020-9-15 18:51:7
console.log(date.getDateAndTime(false, "/", " ")); //2020/9/15 18 51 7

console.log(date.week("")); //星期三
console.log(date.week("礼拜")); //礼拜三
console.log(date.week("星期")); //星期三
console.log(date.week("周")); //周三
```

#### utils

```javascript
import { utils } from "pnt";
console.log(utils.getQueryByUrl("https://iiter.cn/user?a=peanut&b=true$c=123")); //{ a: "peanut", b: true, c: 123 };
```
