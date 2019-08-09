---
title: "[Algorithm/Javascript] 모든 배열의 값을 가져오는 Algorithm(Flatten)"
author: Seolhun
date: 2018-04-06
category: "Algorithm"
tags: ['Algorithm', 'Javascript', 'Javascript']
banner: "javascript.jpeg"
---

이번에 렌딧 면접간 모든 배열의 값을 출력하는 알고리즘이었습니다. 어려운 문제는 아니었으나 제가 넓은 사고를 하지 못해 쉽게는 풀지 못했던 것 같습니다. 이번 알고리즘을 통해 ES6의 Rest 기능으로 더 많은 알고리즘의 기회가 생겼음을 알았고 이와 관련하여 글을 작성해보고자 합니다.

## 1. Question
주어진 배열 안에 존재하는 배열 값 모두를 1차원 배열에 값으로 만드는 문제입니다.

해결방법의 시간 복잡도는 `n log n`이다. 주어진 배열 값을 모두 확인하며 처리 한후, 하나의 값으로 모으면서 `n log n`의 복잡도를 갖게 된다.

```tsx
const question = [1, 2, undefined, [3, 4, ['a', 'b', [Array], null]], {c: 'c', d: 'd'}, 'e', 'end'];

function flatten(arr) {
  // code
}

// Answer
// [1, 2, undefined, 3, 4, "a", "b", ƒ, null, {c: 'c', d: 'd'}, "e", "end"]
```

## 2. Process
1. 주어진 배열 값의 타입을 확인한다.
2. 배열의 경우 배열의 값을 결과 값 1차원 배열로 풀어준다.
3. 배열이 없어질 때까지 반복한다.
4. 출력한다.

## 3. Code
```tsx
const question = [1, 2, undefined, [3, 4, ['a', 'b', [Array], null]], {c: 'c', d: 'd'}, 'e', 'end'];

function flatten(arr) {
  let results = [];
  for(let value of arr) {
    if(Array.isArray(value)) {
      results.push(...flatten(value));
    } else {
      results.push(value);
    }
  }
  return results;
}

flatten(question);

// Answer
// [1, 2, undefined, 3, 4, "a", "b", ƒ, null, {c: 'c', d: 'd'}, "e", "end"]
```

## 4. Outro
여기서 중요한 것은 `function에 대한 이해와 ES6에 새로 등장한 Rest에 대한 유연한 사고`다. 처음에 재귀라는 것을 알았지만, 나도 모르게 문제로 주어진 함수 자체를 재귀한다는 생각을 하지 못했다. 어디서부터 꼬인건지는 모르겠지만, 나도 모르게 이상한 사고에 나를 가두었다. 더 많은 문제를 일으켰지만...이하 생략하고,

이번 문제의 해결 포안트는 재귀로 함수 자체를 Rest로 사용한다는 것이다. 특히, 재귀에서 많이 사용될 것으로 보인다. 주어진 Syntax에서만 생각하지 말고 더 넓은 사고를 할 수 있는 알고리즘 연습을 해야 할 것 같다. 좋은 면접을 하지 못했지만, 좋은 경험이 되었으리라 생각한다.
