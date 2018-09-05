---
title : "[Algorithm/JavaScript] HackerRank - CountingSort Part 2"
author: Seolhun
date : 2018-03-24
categories: "Algorithm"
tags : ['Algorithm', 'JavaScript', 'HackerRank', 'Sort', 'Counting']
cover: "javascript.jpeg"
---

저번 시간에 Counting Sort Part 1을 풀어보았습니다.
이번에는 Counting Sort Part 2를 풀어보겠습니다.

이번 알고리즘은 개수에 상관없이 정렬하면 될것으로 보입니다.
[HackerRank - Sort - CountingSort Part 2](https://www.hackerrank.com/challenges/countingsort2/problem)


## 1. Question
- Sample Input
```
100
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33
```

- Sample Output
```
1 1 3 3 6 8 9 9 10 12 13 16 16 18 20 21 21 22 23 24 25 25 25 27 27 30 30 32 32 32 33 33 33 34 39 39 40 40 41 42 43 44 44 46 46 48 50 53 56 56 57 59 60 61 63 65 67 67 68 69 69 69 70 70 73 73 74 75 75 76 78 78 79 79 80 81 81 82 83 83 84 85 86 86 87 87 89 89 89 90 90 91 92 94 95 96 98 98 99 99
```

## 2. Process
1. 오름차순으로 정렬한다.

## 3. Code
```tsx
function countingSort(arr) {
    return arr.sort(function(a, b) {
        if(a < b) {
            return -1;
        }
        if(a > b) {
            return 1;
        }
        return 0;
    });
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = countingSort(arr);
    console.log(result.join(' '))
}
```
