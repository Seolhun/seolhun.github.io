---
title: "[Algorithm/JavaScript] HackerRank - FindTheMedian"
author: Seolhun
date: 2018-03-26
category: "Algorithm"
tags: ['Algorithm', 'JavaScript', 'HackerRank', 'Sort', 'FindTheMedian']
cover: "javascript.jpeg"
---

저번 시간에 ClosestNumbers 문제를 풀어보았습니다.
이번에는 FindTheMedian 알고리즘을 풀어보겠습니다.
주어진 배열 값 안에서 배열의 가운데 값을 찾는 알고리즘입니다.
[HackerRank - Sort - FindTheMedian](https://www.hackerrank.com/challenges/find-the-median/problem)


## 1. Question
- Sample Input
```
7
0 1 2 4 6 5 3
```

- Sample Output
```
3
```

## 2. Process
- 문제 사이트에서 문제를 자세히 보시면 주어지는 수의 개수는 항상 홀수라고 적혀있습니다.
- 배열 최대, 최소 값에서 중간값이 아닌, 배열에서의 중간 값을 구하는 것입니다.
1. 배열을 정렬합니다.
2. 배열의 길이를 구한 후 2로 나누어줍니다.
    - 길이가 항상 홀수이기 때문에 중간값은 내림해줍니다.(배열의 인덱스는 0부터 시작하기 때문).
3. 정렬된 배열에서 해당 길이를 인덱스로 사용하여 배열 값을 가져옵니다.
4. 값을 출력합니다.

## 3. Code
```tsx
function findMedian(arr) {
    arr.sort((a, b) => {
        if(a > b) {
            return 1;
        }
        if(a < b) {
            return -1;
        }
        return 0;
    });
    const answer_index = Math.floor(arr.length/2);
    return arr[answer_index];
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = findMedian(arr);
    process.stdout.write("" + result + "\n");
}
```
