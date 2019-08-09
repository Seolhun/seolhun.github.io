---
title: "[Algorithm/Javascript] Binary Search(이진탐색) Algorithm"
author: Seolhun
date: 2018-04-05
category: "Algorithm"
tags: ['Algorithm', 'Javascript', 'Search', 'Binary']
banner: "javascript.jpeg"
---

이번에는 검색 시 자주 사용되는 이진검색에 대해서 알고리즘을 작성해볼까 합니다.
이진검색은 배열 안에서 중간 값을 기준으로 계속 나누어 근사 값으로 찾아가는 알고리즘입니다.


## 1. Contents
이진 검색 알고리즘(binary search algorithm)은 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘입니다.

처음 중간의 값을 임의의 값으로 선택하여, 그 값과 찾고자 하는 값의 크고 작음을 비교하는 방식을 채택하고 있습니다.  **처음 선택한 중앙값이 만약 찾는 값보다 크면 그 값은 새로운 최고값이 되며, 작으면 그 값은 새로운 최하값이 된다.**

- 주의사항
    - 검색 원리상 정렬된 리스트에만 사용이 가능하다,
- 특징
    - 검색이 반복될 때마다 목표값을 찾을 확률은 두 배가 되므로 속도가 빠릅니다.
- 시간 복잡도
    - O(log n)

## 2. Code
1. While을 사용하여 이진탐색 만들어보기
```tsx
const arr = [1, 2, 3, 4, 5, 6 ,7];
const binarySearch = ((arr, value) => {
  let mid;
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    // floor을 쓰는 이유는 배열의 index가 0으로 시작하여 내림으로 값을 구해준다.
    mid = Math.floor((min + max) / 2);
    let result = arr[mid];
    if (result === value) {
      return mid;
    }
    // mid에 1을 더해주는 이유는 배열의 index는 0에서 시작하여 원래 길이의 값은 다시 1을 더해주어야 한다.
    if (result < value) {
      min = mid + 1;
    }
    if (result > value) {
      max = mid - 1;
    }
  }
  return -1;
});
```

## 3. Outro
이진 탐색은 기본적으로 n의 개수를 줄여나감으로써 시간 복잡도를 개선해나가는 알고리즘입니다. 대부분의 탐색은 해당 값의 위치를 알고 있으면 이를 줄여나갈 수 있습니다. 하지만, 값을 알지 못할 때에는 확률적으로 이를 줄여나가는 방법밖에 없는데, 이진탐색이 이를 기본적으로 이용하는 알고리즘이라고 할 수 있습니다.

다음에는 **이진 탐색 트리 알고리즘**을 알아보겠습니다.

## 4. References
- [Wiki - 이진탐색 알고리즘](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
