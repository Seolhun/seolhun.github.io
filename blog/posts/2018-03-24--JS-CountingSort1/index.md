---
title: "[Algorithm/JavaScript] HackerRank - CountingSort Part 1"
author: Seolhun
date: 2018-03-24
category: "Algorithm"
tags: ['Algorithm', 'JavaScript', 'HackerRank', 'Sort', 'Counting']
cover: "javascript.jpeg"
---

저번 시간에 삽입정렬 2개 모두 풀어보았습니다.
이번에는 배열 안에서 같은 값의 개수를 파악하는 CountingSort를 풀어보겠습니다.

정렬되지 않은 값들에서 0~99까지의 번호순으로 개수를 파악하는 알고리즘
[HackerRank - Sort - CountingSort Part 1](https://www.hackerrank.com/challenges/countingsort1/problem)


## 1. Question
- Sample Input
```
100
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33
```

- Sample Output
```
0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2
```

## 2. Process
1. 0~99까지의 개수를 파악할 배열을 만든다.
2. 0~99까지의 각 값을 배열의 인덱스로 사용하여 개수를 추가한다.
3. 결과를 출력한다.

## 3. Code
```tsx
function countingSort(arr) {
    let result = [];
    for(let i=0;i<100;i++) {
        result.push(0);
    }

    for(let val of arr) {
        result[val]++;
    }
    return result;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = countingSort(arr);
    console.log(result.join(" "));
}
```
