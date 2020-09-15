### Install

```bash
npm i pnt
```

### How to use

```javascript
import { utils } from "pnt";
console.log(utils.getDate(true, "-")); //2020-09-15
console.log(utils.getDate(false, "/")); //2020/9/15

console.log(utils.getTime(true, ":")); //18:51:06
console.log(utils.getTime(false, " ")); //18 51 6

console.log(pnt.utils.getDateAndTime(true, "-", ":")); //2020-09-15 18:51:07
console.log(pnt.utils.getDateAndTime(false, "-", ":")); //2020-9-15 18:51:7
console.log(pnt.utils.getDateAndTime(false, "/", " ")); //2020/9/15 18 51 7
```
