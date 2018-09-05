---
title: [Algorithm/Javascript] HackerRank - LonelyInterger Algorithm
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2018-04-09
weight: 1
categories: ['Algorithm', 'Javascript']
categories_weight: 10
tags: ['Algorithm', 'Javascript', 'Search', 'Binary','Tree']
tags_weight: 10
---
이번에는 저번 블로그에 작성한 Bit연산자를 이용하여 [LonelyInteger](https://www.hackerrank.com/challenges/lonely-integer/problem) 알고리즘을 풀어볼까 합니다.
[Bit 연산자](/posts/javascript/operators/20180405-js-bitwiseoperators/)를 읽어보면 해당 알고리즘을 언급하였습니다. 읽어보시고 풀어보면 좋을 것 같습니다.


## 1. Question
#### [HackerRank - LonelyInteger](https://www.hackerrank.com/challenges/lonely-integer/problem)
- Sample Input 0
```
1
1
```

- Sample Output 0
```
1
```

- Sample Input 1
```
3
1 1 2
```

- Sample Output 1
```
2
```

- Sample Input 2
```
5
0 0 1 2 1
```

- Sample Output 2
```
2
```

## 2. Process
1. 모든 수를 XOR 연산자로 처리한다.
2. 결과를 출력한다.

모든 수의 연산을 해야하므로 O(N)의 시간 복잡도를 가진다.

## 3. Code
```tsx
function lonelyinteger(arr) {
    return arr.reduce((a, b) => a ^ b);
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var result = lonelyinteger(a);
    process.stdout.write("" + result + "\n");
}
```
