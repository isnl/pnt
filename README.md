### Install

```bash
npm install pnt -S
```

### How to use

```javascript
import { date } from "pnt";
console.log(date.getDate(true, "-")); //2020-09-15
console.log(date.getDate(false, "/")); //2020/9/15

console.log(date.getTime(true, ":")); //18:51:06
console.log(date.getTime(false, " ")); //18 51 6

console.log(date.getDateAndTime(true, "-", ":")); //2020-09-15 18:51:07
console.log(date.getDateAndTime(false, "-", ":")); //2020-9-15 18:51:7
console.log(date.getDateAndTime(false, "/", " ")); //2020/9/15 18 51 7
```
