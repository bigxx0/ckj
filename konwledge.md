## 一、解构赋值

```javascript
const person = {

    firstName:'John',

    lastName:'Doe',

    age:25

    };
const {firstName, age} = person;

console.log(firstName); // 'John'

console.log(age); // 25

console.log(person.lastName); // 'Doe'
```

## 二、Set

set是一种类似数组的数据结构，其中每个元素都是唯一的，即不能重复。可以使用Set来过滤重复的值，并且对于查找和删除操作，Set相比于数组会更加高效。

```javascript
let set1 = [1, 2, 3, 2, 4]

    set2 = new Set(set1);// 1，2，3，4

    set2.add(5) // 1,2,3,4,5

    set2.delete(1) // 2,3,4,5

    console.log(set2);// 2,3,4,5

    console.log(set2.has(3)); // true

    console.log(set2.has(1)); // false

```

## 三、Map

Map是一种键值对的数据结构，其中的键和值可以是各种类型的JavaScript对象，如数字、字符串、对象等。Map提供了类似于对象的功能，但是它的语法更加简洁、易读，并且对于查找、插入、删除等操作也更加高效。

```javascript
const map1 = new Map();

    map1.set('key1', 'value1');

    map1.set(2, 'value2');

    console.log(map1.get('key1')); // value1

    console.log(map1.get(2)); // value2

    console.log(map1); // Map(2) {'key1' => 'value1', 2 => 'value2'}

    map1.delete('key1');

    console.log(map1.has('key1')); // false

    map1.delete('value1');

    console.log(map1.has('key1')); // true
```

## 四、HTTP 协议传递数据的方式

`params`、`query` 和 `request body` 都是 HTTP 协议中用于传递数据的方式

1、 `params`

`params` 是一种将参数传递给服务器的方式，通常用于 RESTful API 中。通过 URL 路径中的占位符来传递参数，例如：

```javascript
https://example.com/books/123

app.get('/books/:id', (req, res) => {
  const bookId = req.params.id
  // ...
})
```

2、`query`

`query` 是一种将参数传递给服务器的方式，通常用于 GET 请求中。通过在 URL 后面加上 `?`，然后加上 `key=value` 的形式传递参数，例如：

```javascript
https://example.com/books?id=123&type=mystery

app.get('/books', (req, res) => {
  const bookId = req.query.id
  const bookType = req.query.type
  // ...
})
```

3、`request body`

`request body` 是通过 HTTP 请求体中来传递数据的一种方式，通常用于 POST、PUT 等请求方法中。这种方式可以传递大量的数据，且格式比较灵活（比如 JSON、XML、二进制等）。

```javascript
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/books', (req, res) => {
  const book = req.body
  // ...
})
```

## 五、HTTP协议常用请求方法

HTTP 协议的常用请求方法有 GET、POST、PUT、DELETE、HEAD、OPTIONS 和 TRACE 等，所有的方法都可以带参数。

```javascript
 1、get  GET请求可以带参数或者不带参数
async function getData() {
  try {
    const response = await axios.get('/api/data');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

2、post
async function postData() {
  try {
    const response = await axios.post('/api/login', {
      username: 'admin',
      password: '123456'
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

3、put  PUT 方法的作用是将指定的资源更新为请求中包含的数据，如果该资源不存在则创建新的资源。
async function putData() {
  try {
    const response = await axios.put('/api/user/10086', {
      name: 'Tom',
      age: 25
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

4、delete DELETE 方法的作用是删除指定的资源。
async function deleteData() {
  try {
    const response = await axios.delete('/api/user/10086');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

5、head  客户端请求获取指定资源的头部信息，而不获取资源本身。HEAD 方法通常用于检查资源是否存在、获取资源的元数据信息等
async function headData() {
  try {
    const response = await axios.head('/api/user/10086');
    console.log(response.headers);
  } catch (error) {
    console.log(error);
  }
}

6、option  客户端请求服务器返回支持的 HTTP 请求方法、首部字段和其他选项。OPTIONS 方法通常用于在发起正式请求之前，获取有关支持的选项的信息，以便将来发起更加有效的请求。
async function optionsData() {
  try {
    const response = await axios.options('/api/user/10086');
    console.log(response.headers);
  } catch (error) {
    console.log(error);
  }
}

7、trace 客户端请求服务器返回经过代理服务器传输的请求和响应的完整副本。TRACE 方法通常用于诊断网络连接时，查看请求和响应是否经过代理服务器或其他中间设备。
async function traceData() {
  try {
    const response = await axios.request({
      url: '/api/user/10086',
      method: 'TRACE',
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
```

## 六、数组操作

### (一)、push() 方法和 pop() 方法

#### 1、push()

push()方法用于向数组 **末尾 **添加一个或多个元素，并返回修改后的数组的 `新长度`。

```javascript
const fruits = ['苹果', '香蕉'];
const res = fruits.push('橘子', '西瓜');
console.log(fruits);  //[ '苹果', '香蕉', '橘子', '西瓜' ]
console.log(res);     //4
```

#### 2、pop()

pop() 方法用于删除并返回数组的 **最后** 一个元素。

```javascript
const fruits = ['苹果', '香蕉', '橘子'];
const lastFruit = fruits.pop();
console.log(fruits);     // ['苹果', '香蕉']
console.log(lastFruit); //橘子
```

### (二)、shift() 方法和 unshift() 方法

#### 1、shift()

shift() 方法用于删除并返回数组的 `第一个`元素。

```javascript
const fruits = ['苹果', '香蕉', '橘子'];
const firstFruit = fruits.shift();
console.log(fruits);      //[ '香蕉', '橘子' ]
console.log(firstFruit);  //苹果
```

#### 2、 unshift()

unshift() 方法用于向数组的 **开头** `添加`一个或多个元素，并返回修改后的数组的新长度。

```javascript
const fruits = ['苹果', '香蕉'];
const newLength = fruits.unshift('橘子', '西瓜');
console.log(fruits);        //[ '橘子', '西瓜', '苹果', '香蕉' ]
console.log(newLength); //4
```

### (三)、slice() 方法

slice() 方法用于从数组中截取指定位置的元素，返回一个新的数组。

语法是：`array.slice(start, end)`，其中，`start`和 `end`都是可选参数，表示选取的元素的起始位置和结束位置。如果不传入参数则默认选取整个数组。该方法返回的是一个新的数组，包含从 `start`到 `end`（`不包括end`）的元素。

```javascript
const names = ['张三', '李四', '王五', '赵六'];
const slicedNames = names.slice(1, 3);
const slicedNames1 = names.slice();
const slicedNames2 = names.slice(0);
const slicedNames3 = names.slice(2);
const slicedNames4 = names.slice(3);
const slicedNames5 = names.slice(4);

//slice不改变原数组
console.log(names);          //[ '张三', '李四', '王五', '赵六' ] 
console.log(slicedNames);  //[ '李四', '王五' ]
console.log(slicedNames1); //[ '张三', '李四', '王五', '赵六' ] 
console.log(slicedNames2); //[ '张三', '李四', '王五', '赵六' ] 
console.log(slicedNames3); //[ '王五', '赵六' ]
console.log(slicedNames4); //[ '赵六' ]
console.log(slicedNames5); //[] 参数大于等于4时就输出空数组
```

### (四)、splice() 方法

splice() 方法用于从数组中删除、替换或添加元素，并返回被删除的元素组成的数组，它会直接修改原数组。

语法：`array.splice(start, deleteCount, item1, item2, ...)`

其中，start表示要修改的起始位置，deleteCount表示要删除的元素个数，item1、item2等表示要添加的元素。如果 `deleteCount为0`，则表示只添加元素，不删除元素。

```javascript
//实现删除
let arr = [1,2,3,4,5]
console.log(arr.splice(0,2));  //[ 1, 2 ] 返回被删除的元素
console.log(arr);  //[ 3, 4, 5 ]   该方法会改变原数组

//实现添加
let arr2 = [1,2,3,4,5]
console.log(arr2.splice(1,0,666,777)); //[] 返回空数组，没有删除元素
console.log(arr2);  //[ 1, 666, 777, 2, 3, 4, 5 ]  原数组改变了

// 实现替换
let arr3 = [1,2,3,4,5]
console.log(arr3.splice(2,1,"aaa","bbb")); //[ 3 ]  返回被删除的一个元素
console.log(arr3);  //[ 1, 2, 'aaa', 'bbb', 4, 5 ]  可以添加字符串

let arr4 = [1,2,3,4,5]
console.log(arr4.splice(1,4,666)); //[ 2, 3, 4, 5 ]  返回被删除的四个元素
console.log(arr4);  //[ 1, 666 ]
```

### (五)、 join()方法

join() 方法用于将数组中的所有元素以指定的分隔符连接成一个 `字符串`。

```javascript
const fruits = ['苹果', '香蕉', '橘子'];
const joinedString = fruits.join(',');
console.log(fruits);  //[ '苹果', '香蕉', '橘子' ]
console.log(joinedString); //苹果,香蕉,橘子
```

### (六)、concat() 方法

concat() 方法用于合并两个或多个数组，返回一个新的数组。

```javascript
const fruits1 = ['苹果', '橘子'];
const fruits2 = ['西瓜', '蓝莓'];
const combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits); //[ '苹果', '橘子', '西瓜', '蓝莓' ]
```

### (七)、forEach() 方法

forEach() 方法用于对数组中的每个元素执行一个回调函数。

```javascript
const fruits = ['火龙果', '蓝莓', '西瓜', '葡萄'];
fruits.forEach(fruit => {
  console.log(fruit); //火龙果 蓝莓 西瓜 葡萄
});
```

### (八)、map() 方法

map() 方法用于对数组中的每个元素执行一个回调函数，并返回一个新的数组，新数组中的元素为回调函数的返回值。

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); //[ 1, 4, 9, 16, 25 ]
```

### (九)、filter() 方法

filter() 方法用于筛选、过滤数组中符合条件的元素，并返回一个新的数组。

```javascript
//筛选出偶数
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); //[ 2, 4 ]
```

### (十)、reduce() 方法

reduce() 方法是数组对象的一个方法，用于将数组中的所有元素按照指定的规则进行归并计算，返回一个最终值。

语法：`array.reduce(callback, initialValue)`

该方法接收两个参数，第一个参数是一个回调函数，第二个参数是一个初始值。回调函数中可以接收四个参数，分别是：

1. accumulator：累加器，用于存储上一次回调函数的返回值或初始值。
2. currentValue：当前元素的值。
3. currentIndex：当前元素的索引。
4. array：数组对象本身。

initialValue是初始值，可选参数。

```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, num) => {
  return acc + num
}, 10);
console.log(sum); //25
//如果初始值是设为0，则输出15
```

### (十一)、fill() 方法

JS中的fill方法可以填充一个数组中的所有元素，它会直接修改原数组。

语法：`array.fill(value, start, end)`

其中，value表示要填充的值，start和end表示要填充的起始位置和结束位置。如果不传入start和end，则默认填充整个数组。该方法返回的是被修改后的原数组。

```
let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

//将数组中从位置2到位置4(不包括位置4)的元素都填充为6
arr.fill(6, 2, 4);
console.log(arr);  //[ 0, 0, 6, 6, 0 ]
```

### (十二)、数组查找API

#### 1、includes()方法

includes方法用于检查数组中是否包含某个元素，如果包含则返回 true，否则返回 false。

与 indexOf() 方法不同，includes() 方法不支持指定起始位置，它从数组的开头开始搜索。

```javascript
const fruits = ['苹果', '香蕉', '橘子', '西瓜', 1, 2, 3];
console.log(fruits.includes('橘子')); //true
console.log(fruits.includes('葡萄')); //false
console.log(fruits.includes(3));      //true
console.log(fruits.includes(4));      //false
```

#### 2、indexOf()方法

需要注意的是，indexOf方法只会返回第一个匹配项的位置。如果数组中存在多个相同的元素，该方法只会返回第一个元素的位置。

此外，indexOf方法还可以接受一个可选的第二个参数，用于指定从哪个位置开始查找。

```javascript
const fruits = ['苹果', '蓝莓', '橘子', '西瓜', '葡萄'];
console.log(fruits.indexOf('橘子', 1));  //2  返回元素下标
console.log(fruits.indexOf('橘子', 3));  //-1  没有该元素
const arr = [1,2,3,4,5,6,7,6,6,5];
// 从下标6开始查找元素5
console.log(arr.indexOf(5,6)); //9
```

#### 3、lastIndexOf()方法

lastIndexOf() 方法用于查找数组中某个元素最后一次出现的索引（位置），如果找到则返回该索引值，否则返回 -1。

```javascript
const fruits = ['火龙果', '橘子', '蓝莓', '西瓜', '葡萄', '橘子'];
console.log(fruits.lastIndexOf('橘子')); //5
console.log(fruits.lastIndexOf('柚子')); //-1
```

#### 4.findIndex()方法

findIndex() 方法用于查找数组中满足条件的元素的索引，如果找到则返回该索引值，否则返回 -1

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const index = arr.findIndex(num => num > 3);
console.log(index);   //3  返回第一个符合条件的元素的下标
const index2 = arr.findIndex(num => num > 10);
console.log(index2); //-1  不存在符合条件的元素
```

### (十三)、sort() 方法

sort() 方法用于对数组进行原地排序，会直接修改原始数组，而不会创建新的数组。默认情况下，它将数组元素视为字符串，并按照 Unicode 码点进行排序。但是，可以传入自定义的比较函数来实现基于其他规则的排序。

`比较函数`：比较函数接收两个参数，通常被称为 a 和 b，表示进行比较的两个元素。它应该返回一个负数、零或正数，表示 a 应该在 b 之前、与 b 相同位置还是在 b 之后。比较函数的返回值规则如下：

1. 如果返回值小于 0，则 a 排在 b 前面。
2. 如果返回值等于 0，则 a 和 b 的相对位置不变。
3. 如果返回值大于 0，则 a 排在 b 后面。

   ```javascript
   const arr = [3, 1, 5, 2, 4];
   arr.sort();
   console.log(arr);  //[1, 2, 3, 4, 5]

   //默认排序（按照 Unicode 码点排序）
   const arr = ['f', 'k', 'c', 'a', 'b'];
   arr.sort();
   console.log(arr);  //[ 'a', 'b', 'c', 'f', 'k' ]

   //使用比较函数进行自定义排序
   const arr = [10, 2, 66, 26, 13, 1];
   arr.sort((a, b) => a - b);
   console.log(arr);  //[ 1, 2, 10, 13, 26, 66 ]

   const arr = [10, 2, 66, 26, 13, 1];
   arr.sort((a, b) => b - a);
   console.log(arr);  //[ 66, 26, 13, 10, 2, 1 ]
   ```

### (十四)、reverse() 方法

reverse() 方法用于反转数组中的元素顺序，即将数组元素进行逆序排列。

```javascript
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); //[ 5, 4, 3, 2, 1 ]
```

### (十五)、toString() 方法和toLocaleSting()方法

#### 1、toString() 方法

toString方法将数组转换为一个由数组元素组成的字符串，元素之间用逗号分隔。

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.toString());  //1,2,3,4,5
const arr2 = ['苹果', '蓝莓', '橘子', '西瓜', '葡萄'];
const arr3 = ['a', 'null', 'b', 'c', 'undefined', 'd', 'e']
console.log(arr2.toString());  //苹果,蓝莓,橘子,西瓜,葡萄
console.log(arr3.toString());  //a,null,b,c,undefined,d,e
```

#### 2、toLocaleSting()方法

toLocaleString方法将数组转换为一个由数组元素组成的字符串，元素之间同样用逗号分隔，但是它会根据当前环境的语言和地区设置来决定元素的格式。

```js
//根据当前环境的语言和地区设置来决定元素的格式
const arr = [123456.789, new Date()];
//我补充写作的时间
console.log(arr.toLocaleString()); //123,456.789,2023/5/29 07:57:19

const arr2 = [1000, 2000, 3000];
const str = arr2.toLocaleString();
console.log(str); //1,000,2,000,3,000
```

### (十六)、Array.from() 方法

Array.from() 是 JavaScript 中一个用于从 `类数组或可迭代对象`创建新数组的静态方法。它接收一个可迭代对象或类数组的对象，并返回一个新的数组实例。

`Array.from(iterable, mapFn, thisArg)`

1. iterable: 必需，一个可迭代对象或类似数组的对象，用于创建新的数组。
2. mapFn (可选): 一个映射函数，用于对每个元素进行处理后返回新数组中的元素。
3. thisArg (可选): 可选参数，执行 mapFn 函数时的 this 值。

```js
//使用字符串创建数组
const str = "Hello";
const arr = Array.from(str);
console.log(arr); //[ 'H', 'e', 'l', 'l', 'o' ]

```

```js
//使用类似数组的对象创建数组
const obj = {
  0: "榴莲",
  1: "牛油果",
  2: "蓝莓",
  length: 3
};
const arr = Array.from(obj);
console.log(arr);  //[ '榴莲', '牛油果', '蓝莓' ]
```

```js
//使用映射函数处理数组元素
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = Array.from(numbers, num => num * 2);
console.log(doubledNumbers); //[ 2, 4, 6, 8, 10 ]
```

## 七、字符串操作

###  (一)、substring()方法和slice()方法

1、substring()方法

字符串的 `截取`可以使用substring()方法和slice()方法。其中substring()方法接受两个参数，第一个参数是起始位置，第二个参数是结束位置，截取的字符串不包括结束位置的字符。

```js
let str = "Hello, World!";
let str2 = "卡布奇诺,拿铁,维也纳,摩卡,冰美式,库比卡,浓缩"
console.log(str.substring(1, 8));    //ello, W
console.log(str2.substring(5, 8));  //拿铁,
console.log(str2);  //卡布奇诺,拿铁,维也纳,摩卡,冰美式,库比卡,浓缩
//substring(1, 8) 返回从下标1开始8结束(不包括8)的长度为7的子字符串。
```

2、slice()方法

slice()方法也接受两个参数，第一个参数是起始位置，第二个参数是结束位置，但是可以使用 `负数`表示从后往前数的位置。返回一个新字符串，不会影响原始字符串。如果省略第二个参数，该方法会提取字符串的剩余部分。提取的字符串为 `[start, end)`长度的子字符串，其中起始位置包含第一个字符。

```js
let str = "123456789";
console.log(str.slice(0, 5));   //12345
console.log(str.slice(2));      //3456789
console.log(str.slice(3, -2));  //4567
console.log(str);     //123456789
let str2 = "给我来一杯卡布奇诺!";
console.log(str2.slice(0, 5));  //给我来一杯
console.log(str2.slice(2));     //来一杯卡布奇诺!
console.log(str2.slice(3, -2)); //一杯卡布奇
console.log(str2.slice(3, -4)); //一杯卡
console.log(str2);    //给我来一杯卡布奇诺!
```

###  (二)、replace()方法和replaceAll()方法

1、replace()方法

replace() 方法用于将指定的字符串或正则表达式匹配的部分 `替换`为新的字符串，替换字符串中的 `第一个`匹配项。

```js
const str = "Hello, World! World!";
const newStr = str.replace("World", "JavaScript");
console.log(newStr);  //Hello, JavaScript! World!

//将一个或多个空格替换成空字符
const str2 = "你    好 呀!"
const newStr2 = str2.replace(/\s+/g, "");
console.log(newStr2);  //你好呀!
```

replace("World", "JavaScript") 将字符串中的第一个 "World" 替换为 "JavaScript"。

正则表达式 `/\s+/g` 可以匹配所有连续的空格字符。其中，\s 表示空白字符，包括空格、制表符和换行符，+ 表示匹配一个或多个。

2、replaceAll()方法

replaceAll() 方法是在 ES2021（ES12）中引入的，用于 `替换`字符串中 `所有`匹配的部分。

```js
const str3 = "哎哟! 你干嘛啊啊啊!";
const newStr3 = str3.replaceAll("啊", "呀");
console.log(newStr3);  //哎哟! 你干嘛呀呀呀!
const str4 = "你    好 呀!"
const newStr4 = str4.replaceAll(" ", "");
console.log(newStr4);  //你好呀!
```

可以直接将字符串空格作为第一个参数，将空字符串作为第二个参数，这样可以把所有的空格字符替换为空字符。

### (三)、trim()方法

trim() 方法 `去除`字符串两端的 `空格`，返回新的字符串。

```js
let str = "    卡布奇诺 拿铁 维也纳    摩卡 冰美式 浓缩  "
console.log(str.trim());        //卡布奇诺 拿铁 维也纳    摩卡 冰美式 浓缩
console.log(str.trimStart()); //卡布奇诺 拿铁 维也纳    摩卡 冰美式 浓缩  
console.log(str.trimEnd());   //    卡布奇诺 拿铁 维也纳    摩卡 冰美式 浓缩
```

trim()去掉了字符串开头和结尾的空格。trimStart()(trimLeft) 只删除字符串开头的空格，trimEnd()(trimRight) 只删除字符串结尾的空格。trimLeft()和trimRight()方法现已舍弃。

### (四)、match()方法

match方法用于在一个字符串中查找匹配的子串，并返回一个数组，包含所有匹配的子串及其位置。

语法: `string.match(regexp)`，其中，string是要匹配的字符串，regexp是一个正则表达式。

如果regexp `没有全局标志g`，则match()方法返回一个数组，该数组的第一个元素是匹配到的子串，后面的元素是正则表达式中的捕获组（如果有的话）。

如果regexp `有全局标志g`，则match()方法返回所有匹配到的子串组成的数组。如果没有匹配到任何子串，则返回null。

```js
const str = "Hello, World!";
const matches = str.match(/l/g);
console.log(matches);  //[ 'l', 'l', 'l' ]

//使用"/(l)(o)/g"正则表达式来查找字符串中所有的 "lo" 组合。
const str2 = "Hello, World!";
const matches2 = str2.match(/(l)(o)/g);
console.log(matches2);  //[ 'lo' ]

//使用"/o/g"正则表达式来查找字符串中所有的小写字母 "o"。
const str3 = 'Hello, World!';
console.log(str3.match('o'));//['o', index: 4, input: 'Hello, World!', groups: undefined]
console.log(str3.match('l'));//['l', index: 2, input: 'Hello, World!', groups: undefined]
console.log(str3.match(/o/g)); //['o', 'o']
```

### (五)、split()方法

split() 方法将字符串按指定的分隔符 `拆分`成数组。

```js
//s.split("-")使用-作为分隔符将字符串拆分成数组。
const s = "卡布奇诺-拿铁-维也纳-摩卡-冰美式-浓缩";
const arr = s.split("-");
console.log(arr); //[ '卡布奇诺', '拿铁', '维也纳', '摩卡', '冰美式', '浓缩' ]

const str = "Hello     World!";
console.log(str.split(/\s+/));   //['Hello', 'World!']
const str2 = "Hello,World!";
console.log(str2.split("-"));     //['Hello,World!']
```

`/\s+/`正则表达式匹配一个或多个空白字符。如果分隔符没有在字符串中出现，split函数会返回一个包含 `整个字符串`作为唯一元素的数组。

### (六)、search()方法

search方法用于在一个字符串中 `查找匹配的子串`，并返回 `第一个`匹配的子串的位置。它可以接受一个参数，用于指定要查找的子串。

```js
const str = "Hello, World!";
console.log(str.search(/World/i));  //7
console.log(str.search(/world/i));  //7
console.log(str.search("World"));  //7
console.log(str.search("l"));  //2
const str2 = "维也纳,拿铁,摩卡,冰美式,浓缩";
console.log(str2.search("拿铁"));      //4
console.log(str2.search("卡布奇诺")); //-1
```

`/World/i` 是一个正则表达式，用于匹配字符串中的 "World"，其中 `i` 是忽略大小写的标志。 如果找不到匹配的子串则返回-1。

### (七)、valueOf()方法

valueOf()方法返回字符串对象的 `原始值`。

```js
const num = 123;
const str = "卡布奇诺 拿铁 维也纳 摩卡 冰美式";
const bool = true;
const obj = {name:"咖啡", type:"卡布奇诺"}
const arr = ["拿铁", "摩卡", "美式", "卡布奇诺"]
const date = new Date();

console.log(num.valueOf());   //123
console.log(str.valueOf());     //"卡布奇诺 拿铁 维也纳 摩卡 冰美式"
console.log(bool.valueOf());  //true
console.log(obj.valueOf());   //{name: '咖啡', type: '卡布奇诺'}
console.log(arr.valueOf());    //['拿铁', '摩卡', '美式', '卡布奇诺']
console.log(date.valueOf());  //1685850114551  (获取时间戳)
```

valueOf()方法返回一个对象的原始值。如果对象本身就是一个原始值（如数字、字符串、布尔值），则直接返回该值；否则，返回对象本身。

### (八)、concat()方法

concat用于将多个字符串 `连接`成一个新的字符串。该方法不会改变原有的字符串，而是返回一个新的字符串。

语法：`string.concat(str1, str2, ..., strN)`

其中，string是要连接的字符串，str1, str2, ..., strN是要连接的其他字符串，可以有多个参数。

```js
const str1 = "冰美式";
const str2 = "和摩卡";
const str3 = "!";
const result = str1.concat(str2, str3);
console.log(result);  //冰美式和摩卡!
console.log(str1);    //冰美式
console.log(str2);    //和摩卡
console.log(str3);    //!
```

concat()方法返回的是一个新的字符串，原有的字符串不会改变。如果要改变原有的字符串，可以使用赋值运算符（+=）或字符串模板(用 `` 和 ${} )来实现。

```js
let str = "冰美式";
str += "和摩卡!";
console.log(str);   //冰美式和摩卡!

let str2 = "冰美式";
str2 = `${str2}和摩卡!`;
console.log(str2);  //冰美式和摩卡!
```

### (九)、JSON.stringify()方法

JSON.stringify()是JavaScript中的一个方法，用于将JavaScript对象 `转换为JSON字符串`。该方法接受一个JavaScript对象作为参数，并返回一个JSON字符串。

语法：`JSON.stringify(value, replace, space)`

1. value是要转换为JSON字符串的JavaScript对象；
2. replace是一个函数，用于控制转换过程中哪些属性应该被包含在JSON字符串中；
3. space是一个用于缩进输出的空格数或缩进字符串。

```js
const person = {
  name: "张三",
  age: 20,
  city: "南昌",
  fn: function(){console.log(666);},
  test: undefined,
  hobbies: ["读书", "旅游", "羽毛球"]
};
console.log(JSON.stringify(person));
//{"name":"张三","age":20,"city":"南昌","hobbies":["读书","旅游","羽毛球"]}
console.log(JSON.stringify(person, ["name", "hobbies"]));
//{"name":"张三","hobbies":["读书","旅游","羽毛球"]}
console.log(JSON.stringify(person, null, 2));
// {
//   "name": "张三",
//   "age": 20,
//   "city": "南昌",
//   "hobbies": [
//     "读书",
//     "旅游",
//     "羽毛球"
//   ]
// }
```

1. 如果对象中包含函数、undefined、symbol或循环引用等特殊类型的属性，则在转换为JSON字符串时会被忽略或转换为null。
2. 如果需要控制转换过程中哪些属性应该被包含在JSON字符串中，可以使用replace参数。这里只输出 `name`和 `hobbies`。
3. 第三个参数表示缩进的空格数，这里设置为2。由于缩进输出的JSON字符串更易于阅读和调试，因此在开发过程中常常会使用这种方式。
4. 可以用 `JSON.parse()`方法将这些 JSON 字符串转换回 JS 对象。

### (十)、includes()方法、indexOf()方法和lastIndexOf()方法

#### 1、includes()方法

includes方法用于检查数组中是否 `包含`某个元素，如果包含则返回 true，否则返回 false。includes()方法 `区分大小写`。

```js
const str = "Hello world";
console.log(str.includes("world")); //true
console.log(str.includes("Hello")); //true
console.log(str.includes("o"));      //true
console.log(str.includes("h"));      //false
console.log(str.includes("H"));      //true
console.log(str.includes("JS"));     //false
console.log(str.includes("WORLD"));  //false
```

#### 2、indexOf()方法

需要注意的是，indexOf方法只会返回 `第一个`匹配项的位置。如果数组中存在多个相同的元素，该方法只会返回第一个元素的位置，indexOf()方法是 `区分大小写`的。

```js
const str = "Hello world";
console.log(str.indexOf("o"));      //4
console.log(str.indexOf("e"));      //1
console.log(str.indexOf("E"));      //-1
console.log(str.indexOf("llo"));    //2
console.log(str.indexOf("world"));  //6
console.log(str.indexOf("Hello"));  //0
console.log(str.indexOf("hello"));  //-1
```

#### 3、lastIndexOf()方法

lastIndexOf()方法与indexOf()方法类似，不同之处在于它返回指定字符串或字符在原字符串中 `最后一次`出现的位置，而不是第一次出现的位置。

```js
const str = "Hello world, world";
console.log(str.lastIndexOf("world"));//13
console.log(str.lastIndexOf("l", 8));   //3
console.log(str.lastIndexOf("l"));      //16
console.log(str.lastIndexOf("L"));      //-1
console.log(str.lastIndexOf("k"));      //-1
console.log(str.lastIndexOf("hello")); //-1
```

我们使用 `str.lastIndexOf("l", 8)`查找字符串"Hello world, world"中字符"l"最后一次出现的位置，但是限定了查找范围只在前8个字符内。也就相当于在字符串 `"Hello wo"`中使用 `lastIndexOf("l")`方法，`l`最后出现在下标3的位置，所以返回3。

如果lastIndexOf()方法没有找到指定的字符串或字符，它将返回-1。

### (十一)、endsWith()方法和startsWith()方法

#### 1、endsWith()方法

endsWith() 方法用于判断一个字符串是否以指定的子字符串结尾。

```js
const str = "Hello, World!";
console.log(str.endsWith("!"));     //true
console.log(str.endsWith("ld"));   //false
console.log(str.endsWith("l"));     //false
console.log(str.endsWith("W", 7)); //false  "Hello, " 不以W结尾
console.log(str.endsWith("W", 8)); //true   "Hello, W" 以W结尾
```

endsWith() 方法接受两个参数，第一个参数是要查找的子字符串，第二个参数是查找的终止位置。当省略第二个参数时，默认从结尾开始查找。如果找到指定的子字符串，则返回 true，否则返回 false。

2、startsWith()方法

startsWith() 方法用于判断一个字符串是否以指定的子字符串开头。

```js
const str = "Hello, World!";
console.log(str.startsWith("He"));   //true
console.log(str.startsWith("l"));     //false
console.log(str.startsWith("l", 3));  //true  "lo, World!"以l开头
console.log(str.startsWith("l", 4));  //false  "o, World!"不以l开头
console.log(str.startsWith("e", 1));  //true  "ello, World!"以e开头
console.log(str.startsWith("e", 4));  //false "o, World!"不以e开头
```

startsWith() 方法接受两个参数，第一个参数是要查找的子字符串，第二个参数是查找的 `起始位置`。当省略第二个参数时，默认从头开始查找。如果找到指定的子字符串，则返回 true，否则返回 false。

### (十二)、normalize()方法

normalize()用于将字符串 `标准化`为一致的Unicode形式。因为在Unicode中，同样的字符可以有多种不同的表示方式，这可能会导致某些比较或排序操作的混淆。normalize() 方法可以将这些不同表示方式的字符转换为一致的形式，以便在比较和排序等操作中得到正确的结果。

normalize() 方法接受一个参数，表示需要使用哪种标准化形式，共有四种：

1. NFC：使用组合字符标准化形式。
2. NFD：使用分解字符标准化形式。
3. NFKC：使用组合字符同时兼容性标准化形式。
4. NFKD：使用分解字符同时兼容性标准化形式。

```js
const str1 = "café";
const str2 = "cafe\u0301";
console.log(str1.normalize());  //café
console.log(str2.normalize());  //café
console.log(str1 === str2);     //false
console.log(str1.normalize() === str2.normalize()); // true
console.log(str1.normalize('NFD'));   //café
console.log(str1.normalize('NFC'));   //café
console.log(str1.normalize('NFKC'));  //café
console.log(str1.normalize('NFKD'));  //café
console.log(str2.normalize('NFD'));   //café
console.log(str2.normalize('NFC'));   //café
console.log(str2.normalize('NFKC'));  //café
console.log(str2.normalize('NFKD'));  //café
```

### (十三)、repeat()方法

repeat() 方法用于将字符串 `重复`指定的次数，并返回重复后的字符串。

```js
const str = "冰美式";
console.log(str.repeat(-1)); //报错
console.log(str.repeat(0));  //空字符
console.log(str.repeat(3));  //冰美式冰美式冰美式
console.log(str);  //冰美式
```

repeat() 方法只接受一个参数，表示需要重复的次数。少于 0 的次数会报错，等于 0 的次数会返回空字符串，大于等于 1 的次数会返回重复后的字符串。

### (十四)、localeCompare()方法

字符串的 `比较`可以使用比较运算符和localeCompare()方法。其中比较运算符可以直接比较两个字符串的大小，localeCompare()方法可以比较两个字符串在字典序中的大小。

返回值是一个数字，目前的主流浏览器都返回的是1、0、-1三个值。

1. 返回值大于0：说明当前字符串string大于对比字符串targetString
2. 返回值小于0：说明当前字符串string小于对比字符串targetString
3. 返回值等于0：说明当前字符串string等于对比字符串targetString

```js
var str1 = "hello";
var str2 = "world";
var str3 = "hello";
console.log(str1 > str2); //false
console.log("a" > "b");   //false
console.log("f" > "c");    //true
console.log(str1.localeCompare(str2)); // -1
console.log(str1.localeCompare(str3)); // 0
console.log(str2.localeCompare(str3)); // 1
```

### (十五)、toUpperCase()方法和toLowerCase()方法

#### 1、toUpperCase()方法

toUpperCase：将字符串中的所有字母变为 `大写字母`，非字母不受影响，不改变原字符串。

```js
const str = "hello world 冰美式";
const upperStr = str.toUpperCase();
console.log(upperStr);  //HELLO WORLD 冰美式
console.log(str);  //hello world 冰美式
```

2、toLowerCase()方法

toLowerCase：将字符串中的所有字母变为 `小写字母`，非字母不受影响，不改变原字符串。

```js
const str = "HELLO WORLD 冰美式";
const lowerStr = str.toLowerCase();
console.log(lowerStr);  //hello world 冰美式
console.log(str);  //HELLO WORLD 冰美式
```

### (十六)、toLocaleUpperCase()方法和toLocaleLowerCase()方法

`toLocaleUpperCase()`和 `toLocaleLowerCase()`是JavaScript中的字符串方法，用于将字符串转换为大写字母和小写字母，与 `toUpperCase()`和 `toLowerCase()`方法的区别在于它们使用特定的语言环境设置来进行转换，可以根据用户所处的地区，将不同的字符转换为大写或小写。

#### 1、toLocaleUpperCase()方法

toLocaleUpperCase：将字符串中的所有字母转换为大写字母，同时根据本地化规则将字符转换为特定于语言和区域设置的大小写形式。

```js
// 将字符转换为特定于土耳其语本土化规则的大写形式
const str = "hello world";
const upperStr = str.toLocaleUpperCase('tr-TR');
console.log(upperStr);  //HELLO WORLD

// 希腊语字符示例：
const str = 'Γειά σου';
console.log(str.toLocaleUpperCase()); //ΓΕΙΆ ΣΟΥ

// 阿拉伯语字符示例：
const str2 = 'مرحبا بالعالم';
console.log(str2.toLocaleUpperCase()); //مرحبا بالعالم
```

#### 2、toLocaleLowerCase()方法

toLocaleLowerCase：将字符串中的所有字母转换为小写字母，同时根据本地化规则将字符转换为特定于语言和区域设置的大小写形式。

```js
//将字符转换为特定于土耳其语本土化规则的小写形式。
const str = "HELLO WORLD";
const lowerStr = str.toLocaleLowerCase('tr-TR');
console.log(lowerStr);  //hello world
//土耳其语中的I转换为ı
const str2 = 'Türkİye Cumhurİyetİ';
console.log(str2.toLocaleLowerCase()); //türkiye cumhuriyeti
```

### (十七)、toString()方法

toString()方法返回一个对象的 `字符串形式`。对于自定义对象，如果没有为其定义toString()方法，会使用默认的 toString() 实现，即返回 “[Object object]” 字符串。

```js
const num = 666
console.log(num.toString());  //666

const arr = [1, 2, 3];
console.log(arr.toString());  //1,2,3

const b = true;
console.log(b.toString());    //true

const obj = {name: "张三", age: 20};
console.log(obj.toString());  //[object Object]
```

我们可以通过为自定义对象定义toString()方法来自定义它们的字符串表示形式。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.toString = function() {
  return `Person(name='${this.name}', age=${this.age})`;
};
const str = new Person("张三", 20);
console.log(str.toString());  //Person(name='张三', age=20)
```

### (十八)、at()方法和charAt()方法

#### 1、at()方法

at()方法用于 `返回指定位置的Unicode字符`，如果索引超出字符串范围，则返回undefined。

```js
const str = '😀hello';
console.log(str.at(0)); //�
console.log(str.at(4)); //l
console.log(str.at(6)); //o
const str1 = "Oh, what are you doing?";
const str2 = "卡布奇诺 拿铁 维也纳 摩卡 冰美式";
const str3 = "ΠΑΡΆΔΕΙΓΜΑ ΕΝΌΤΗΤΑΣ";
const str4 = "The 🐕 jumps over the 🦊.";
console.log(str1.at(4)); //w
console.log(str2.at(2)); //奇
console.log(str3.at(4)); //Δ
console.log(str4.at(4)); //�
```

#### 2、charAt()方法

charAt()方法用于 `返回指定位置的字符`，如果索引超出字符串范围，则返回空字符串。

```js
//返回指定位置的字符
const str = "Hello, World!";
console.log(str.charAt(1));   //e
console.log(str.charAt(8));   //o
console.log(str.charAt(20));  //输出空字符串
```

### (十九)、codePointAt()方法和charCodeAt()方法

#### 1、codePointAt()方法

codePointAt()方法返回指定索引位置处的字符的 Unicode 编码。

```js
const str = "Hello world";
const str2 = "卡布奇诺";
//字符"e"的Unicode编码为101
console.log(str.codePointAt(1));   //101
console.log(str.codePointAt(2));   //108
console.log(str2.codePointAt(0));  //21345
console.log(str2.codePointAt(1));  //24067

const str = "彩虹 🌈";
const str2 = "独角兽 🦄";
console.log(str.codePointAt(0)); //24425
console.log(str.codePointAt(3)); //127752
console.log(str.codePointAt(5)); //undefined
console.log(str2.codePointAt(1)); //35282
console.log(str2.codePointAt(4)); //129412
console.log(str2.codePointAt(6)); //undefined
```

如果指定的索引位置不存在字符，则codePointAt()方法返回undefined。

#### 2、charCodeAt()方法

charCodeAt()方法可返回指定位置的字符的 Unicode 编码，返回值是 0 - 65535 之间的整数。

```js
const str = "Hello world";
const str2 = "卡布奇诺";
//字符"e"的Unicode编码为101
console.log(str.charCodeAt(1));   //101
console.log(str.charCodeAt(2));   //108
console.log(str2.charCodeAt(0));  //21345
console.log(str2.charCodeAt(1));  //24067

const str = "彩虹 🌈";
const str2 = "独角兽 🦄";
console.log(str.charCodeAt(0)); //24425
console.log(str.charCodeAt(3)); //55356
console.log(str.charCodeAt(5)); //NaN
console.log(str2.charCodeAt(1)); //35282
console.log(str2.charCodeAt(4)); //55358
console.log(str2.charCodeAt(6)); //NaN
```

如果指定的索引位置不存在字符，则codePointAt()方法返回NaN。

## 八、pinia状态管理库
