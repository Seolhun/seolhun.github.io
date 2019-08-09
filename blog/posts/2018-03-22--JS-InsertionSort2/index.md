---
title: "[Algorithm/JavaScript] HackerRank - InsertionSort Part 2"
author: Seolhun
date: 2018-03-22
category: "Algorithm"
tags: ['Algorithm', 'JavaScript', 'HackerRank', 'InsertionSort']
cover: "javascript.jpeg"
---

저번 시간에 삽입 정렬 1번을 풀었고 이번에는 2번을 풀어보도록 하겠습니다.
[HackerRank - Sort - Insertion Sort Part 2](https://www.hackerrank.com/challenges/insertionsort2/problem)

## 1. Question
2번 문제는 문자가 많아 다로 간단히 첨부하지는 않겠습니다.
샘플 인풋과 아웃풋만 넣도록 하겠습니다.

- Sample Input
```
6
1 4 3 5 6 2
```

- Sample Output
```
1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6
```

## 2. Process
1. 1번은 항상 기준정렬로 되어있기때문에 0이 아닌 1부터 루프를 실행한다.
2. 2차 루프는 i값 보다 작게, 즉 정렬된 값하고만 비교할 수 있게 루프를 실행한다.
3. 정렬할 값과 정렬된 값의 크기를 비교하여, 정렬된 값이 더 크면 해당 값과 바꾼다(반복한다)
    - 해당 값 앞에 배열에 넣는것이 안되므로 값을 바꿔준뒤 값을 교체해나간다.
4. 한 루프당 정렬된 값을 출력한다.

## 3. Code
```tsx
function insertionSort2(n, arr) {
    for(var i = 1; i < n; i++) {
        for(var j = 0; j < i; j++) {
            var temp = arr[i];
            if(arr[j] > arr[i]) {
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr.join(' '));
    }
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort2(n, arr);

}
```
