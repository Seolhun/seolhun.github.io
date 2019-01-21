---
title: "[Algorithm/JS] 배열에서 사용하면 좋을 Javascript 메소드들"
author: Seolhun
date: 2018-04-07
category: "Algorithm"
tags: ['Algorithm', 'JS', 'Anti Pattern', 'Methods']
cover: "javascript.jpeg"
---
이번에는 알고리즘을 풀 때, 배열에 필요한 메소드들을 정리해볼까 합니다. 이러한 메소드들을 숙지하면 안티패턴으로 또 구성할 필요없이 잘 짜여진 코드들을 이용할 수 있습니다.

## Intro
- 배열 메소드에는 사용하면 생산성이 많이 올라가는 메소드가 많습니다. 특히, 배열은 알고리즘 문제에서 기본적으로 주어지는 문제타입입니다. 그렇기에 배열 관련 메소드를 이해하면 문제를 알고리즘을 푸는데 많은 도움을 받을 수 있습니다. 이번 시간을 통해 배열에 기본 내장된 메소드를 숙지하여 생산성과 가독성을 높이면 좋을 것 같습니다.

## Contents
#### 1. 배열에서 특정 값 존재 여부는 indexOf
indexOf를 사용하면 배열 값에 존재하는 값을 쉽게 찾을 수 있습니다.

- 존재하지 않을 경우, -1
- 존재하는 경우, 해당 배열의 index 값(중복시 더 앞에 있는 값)

```js
let arr = [1, 2, 2, 2, 3, 4, 5, 6, 7];
function isExist(arr, value) {
  return arr.indexOf(value);
}
isExist(arr, 0); // -1
isExist(arr, 1); // 0
isExist(arr, 2); // 1
isExist(arr, 3); // 4
```

#### 2. 배열에서 특정 값을 찾을 때는 filter와 find, findIndex
ES6부터 새롭게 등장한 find, findIndex를 이용하면 편리하게 우리가 원하는 것을 해결할 수 있다.
- 배열에서 원하는 값을 모두 찾을 때, `filter`
- 배열에서 원하는 값 하나를 찾을 때, `find`
- 배열에서 원하는 값의 index를 찾을 때, `findIndex`

```js
let arr = [
  {name:"apple", count: 2},
  {name:"orange", count: 5},
  {name:"pear", count: 3},
  {name:"peach", count: 16},
  {name:"orange", count: 10},
];
// Filter
arr.filter((item) => {
  return item.name === "orange";
});
// [{name:"orange", count: 5}, {name:"orange", count: 10}]

// Find
arr.find((item) => {
  return item.name === "orange";
});
// {name:"orange", count: 5}

// FindIndex
arr.findIndex((item) => {
  return item.name === "orange";
});
// 1
```

#### 3. 배열에서 순차적으로 이동하며 누적된 결과 연산이 필요할 때는 reduce
reduce() 메서드는 왼쪽에서 오른쪽으로 이동하며 배열의 각 요소마다 누적 계산값과 함께 함수를 적용해 하나의 값으로 줄입니다.

```js
let arr = [1, 2, 3, 4, 5, 6, 7];
function add(a, b) {
  return a + b;
}
arr.reduce(add);
// 28

arr.reduce((accumulator, current_value, current_index, array) => {
  return accumulator + current_value;
});
// 28
```

<table class="table table-dark text-center">
  <tr>
    <th>
        accumulator
    </th>
    <th>
        current_value
    </th>
    <th>
        current_index
    </th>
    <th>
        array
    </th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    <td>1,2,3,4,5,6,7</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>2</td>
    <td>1,2,3,4,5,6,7</td>
  </tr>
  <tr>
    <td>6</td>
    <td>4</td>
    <td>3</td>
    <td>1,2,3,4,5,6,7</td>
  </tr>
  <tr>
    <td>10</td>
    <td>5</td>
    <td>4</td>
    <td>1,2,3,4,5,6,7</td>
  </tr>
  <tr>
    <td>15</td>
    <td>6</td>
    <td>5</td>
    <td>1,2,3,4,5,6,7</td>
  </tr>
  <tr>
    <td>21</td>
    <td>7</td>
    <td>6</td>
    <td>1,2,3,4,5,6,7</td>
  </tr>
</table>

#### 4. 배열의 유효성 검사에 따른 결과 검사를 위한 every, some
- `every`
  - 배열의 모든 요소가 제공된 함수에 의해 구현 된 테스트를 통과하는지 여부를 테스트합니다.
- `some`
  - 배열의 적어도 하나의 요소가 제공된 함수에 의해 구현 된 테스트를 통과하는지 여부를 테스트합니다.

```js
let arr = [1, 2, 3, 4, 5];

function isEven(element) {
  return element % 2 === 0;
};

console.log(arr.every(isEven));
// false
console.log(arr.some(isEven));
// true
```

## Outro
ES6부터 새롭게 등장한 메소드도 포함시켜 lodash같은 helper library를 이용하지 않아도, 이미 많은 기능들을 충분히 이용할 수 있다는 것을 알 수 있습니다. 특히, 안티패턴을 지향하기 위해서는 기본적으로 내장된 메소드를 숙지하는 것이 우선입니다. 이번에 기본 내장딘 메소드를 정리하면서 알고리즘 및 로직 구현 간 이용하면서 직관적이고 빠른 코드를 구현할 수 있을 것입니다.

## References
- [Mozilla - Javascript](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
