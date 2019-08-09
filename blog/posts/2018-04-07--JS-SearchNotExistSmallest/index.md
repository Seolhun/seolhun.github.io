---
title: "[Algorithm/Javascript] Programmers Algorithm 야근지수"
author: Seolhun
date: 2018-04-07
category: "Algorithm"
tags: ['Algorithm', 'Javascript', 'Javascript']
cover: "javascript.jpeg"
---
이번에는 Java로 000 문제 야근지수를 구현해보도록 하겠습니다.
[]()


## 1. Question
function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
- Given A = [1, 2, 3], the function should return 4.
- Given A = [−1, −3], the function should return 1.

#### Assume that:
- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [−1,000,000..1,000,000].

#### Complexity:
- expected worst-case time complexity is O(N);
- expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

## 2. Process
1. `음수만 있을 때`와 아닐 때의 2가지 경우의 수
  - 음수만 있는 경우 1 정답 처리
2. 음수는 무조건 1이 정답이므로, 음수만 있을 때를 제외하고는 음수 무시
3. min 값을 활용하여 해당 값보다 작지만 존재하지 않는 값이 있을 경우 min 값에 할당.
4. 0보다 크고 min 값보다 작은 모든 경우의 수를 확인하여 정답을 확인한다.

## 3. Code
```tsx
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min;
    let exist_negative = false;
    let exist_positive = false;
    for(let i of A) {
        if (!exist_negative && i < 0) {
            exist_negative = true;
        }
        if (!exist_positive && i > 0) {
            exist_positive = true;
        }

        if (!min) {
            min = i + 1;
        }

        if(i > 0 && i < min) {
            if (A.indexOf(i+1) === -1) {
                min = i + 1;
            }
        }
    }

    if(!exist_positive && exist_negative) {
        return 1;
    }

    return min;
}
```
