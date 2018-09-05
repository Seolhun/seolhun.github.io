---
title: [Algorithm/JavaScript] HackerRank - ClosestNumbers
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2018-03-25
weight: 1
categories: ['Algorithm', 'JavaScript']
categories_weight: 10
tags: ['Algorithm', 'JavaScript', 'HackerRank', 'Sort', 'ClosestNumbers']
tags_weight: 10
---
저번 시간에 Counting Sort 2문제를 모두 풀어보았습니다.

이번에는 ClosestNumbers 알고리즘을 풀어보겠습니다.
두 값의 차가 가장 적은 두 수를 찾는 것입니다. 만약, 차가 다른 것과 같다면 같이 보여주어야 합니다.
[HackerRank - Sort - ClosestNumbers](https://www.hackerrank.com/challenges/closest-numbers/problem)


## 1. Question
- Sample Input #1
```
10
-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854
```

- Sample Output #1
```
-20 30
```
- Explanation
> (30) - (-20) = 50, which is the smallest difference.

- Sample Input #2
```
12
-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470
```
- Sample Output #2
```
-520 -470 -20 30
```
- Explanation
> (-470) - (-520) = 30 - (-20) = 50, which is the smallest difference.

- Sample Input #3
```
4
5 4 3 2
```
- Sample Output #3
```
2 3 3 4 4 5
```
- Explanation
> Here, the minimum difference will be 1. So valid pairs are (2, 3), (3, 4), and (4, 5). So we have to print 2 once, 3 and 4 twice each, and 5 once.

## 2. Process
1. 오름차순으로 정렬한다.
    - 정렬하는 이유는, 가까운 수끼리의 차가 의미가 있으므로, 먼 값끼리의 차는 클 수 밖에없다.
2. 가까운 수의 값을 이용하여 2개의 수의 차를 구한다.
    - 기존 값 보다 더 작은 경우, 새로운 값으로 대체한다.
    - 같은 경우 추가한다.
3. 값을 출력한다.

## 3. Code
```tsx
function closestNumbers(arr) {
    arr.sort((a, b) => {
      if(a > b) {
        return 1;
      }
      if(a < b) {
        return -1;
      }
      return 0;
    });
    let min_value = arr[1] - arr[0];
    let answers = [];
    for(let i = 0;i < arr.length -1;i++) {
        const temp_answer = arr[i+1] - arr[i];
        if(min_value > temp_answer) {
            min_value = temp_answer;
            answers = [arr[i], arr[i+1]]
        } else if(min_value === temp_answer) {
            answers.push(arr[i], arr[i+1]);
        }
    }
    return answers;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = closestNumbers(arr);
    console.log(result.join(" "));
}
```
