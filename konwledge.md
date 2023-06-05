   // 一、解构赋值

    constperson = {

    firstName:'John',

    lastName:'Doe',

    age:25

    };

    const {firstName, age} = person;

    console.log(firstName); // 'John'

    console.log(age); // 25

    console.log(person.lastName); // 'Doe'

```javascript
const {firstName, age} = person;
```

<h1>开头</h1>


// ----------------------------------------------------------------------------------------------------------------------------------------------------

    // 二、Set是一种类似数组的数据结构，其中每个元素都是唯一的，即不能重复。可以使用Set来过滤重复的值，并且对于查找和删除操作，Set相比于数组会更加高效。

    letset1 = [

    1,

    2,

    3,

    2,

    4

    ]

    set2 = newSet(set1);

    set2.add(5)

    set2.delete(1)

    console.log(set2);

    console.log(set1.has(3)); // true

    console.log(set1.has(2)); // false

// ----------------------------------------------------------------------------------------------------------------------------------------------------

    // 三、Map是一种键值对的数据结构，其中的键和值可以是各种类型的JavaScript对象，如数字、字符串、对象等。Map提供了类似于对象的功能，但是它的语法更加简洁、易读，并且对于查找、插入、删除等操作也更加高效。

    constmap1 = newMap();

    map1.set('key1', 'value1');

    map1.set(2, 'value2');

    console.log(map1.get('key1')); // value1

    console.log(map1.get(2)); // value2

    console.log(map1);

    map1.delete('key1');

    console.log(map1.has('key1')); // false


```javascript

```
