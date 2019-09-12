---
author: Seolhun
banner: "/assets/covers/js.png"
category: "Algorithm"
date: 2018-03-21
subTitle:  ""
tags: ['Algorithm', 'Javascript', 'HackerRank', 'InsertionSort', '삽입정렬']
title: "[Algorithm/Javascript] HackerRank - InsertionSort Part 1"
---

안녕하세요, 설훈입니다.
이번에 친구와 함께 해커랭크에 1일 1알고리즘을 스터디를 시작하였습니다.
알고리즘 사이트는 `HackerRank`로 선정하였습니다. 깃허브와 연동 및 기록도 남고 오류 확인 등 사이트가 아주 잘 되어있어 편리하기 때문입니다.
앞으로 영어공부도 할 겸 일석 삼조 효과를 거둘 수 있는 스터디가 되었으면 좋겠습니다.

Sort부터 해서 차례대로 나아가도록 하겠습니다.
[HackerRank - Sort - Insertion Sort Part 1](https://www.hackerrank.com/challenges/insertionsort1/problem)


## 0. Intro
Insertion Sort는 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘이다.
Insertion Sort은 왼쪽부터 정렬하여 정렬된 수 모두 비교하여 정렬된 수보다 크면 오른쪽에, 작으면 왼쪽에 정렬해 나간다.
- Example)
```
5 3 4 2 1

5 3 4 2 1
3 5 4 2 1
3 4 5 2 1
2 3 4 5 1
1 2 3 4 5
```

Selection Sort이나 Bubble Sort같은 O(n2) 알고리즘에 비교하여 빠르며, 안정 정렬이고 in-place 알고리즘이다.
**중요한 것은 이번 문제는 앞에서부터가 아니라 뒤에서부터 비교를 원한다. 이점을 유의하면서 풀어야 합니다.**

## 1. Question
- Sample Input
```
5
2 4 6 8 3
```
- Sample Output
```
2 4 6 8 8
2 4 6 6 8
2 4 4 6 8
2 3 4 6 8
```

## 2. Process
1. 마지막 인덱스의 값을 앞의 값과 비교한다.
2. 해당 값을 잠시 저장한다.
3. 앞의 값이 더 크면 해당 값을 앞의 값과 자리를 교체한 후 log를 찍는다.
4. 해당 값을 앞의 값에 넣어준다.
5. 바꾼 값의 기준(n-1), 2 ~ 4번을 반복한다.
6. 전체 값을 확인 한 후 큰게 없으면 넘어간다.
7. 마지막에 결과값을 출력한다.
8. 배열 값이 기대값이 아니므로 join(' ') 메소드로 원하는 형태로 바꿔준다.

## 3. Code
```tsx
function insertionSort1(n, arr) {
  for(var i = n - 1; i > 0; i--) {
    var temp = arr[i];
    if(arr[i-1] > arr[i]) {
      arr[i] = arr[i - 1];
      console.log(arr.join(' '));
      arr[i - 1] = temp;
      return insertionSort1(n-1, arr);
    }
  }
  console.log(arr.join(' '));
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    insertionSort1(n, arr);
}
```
