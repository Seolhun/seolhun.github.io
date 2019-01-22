---
title: "[Algorithm/Javascript] 비트연산자를 이용하여 간단한 알고리즘 및 예제 만들어보기"
author: Seolhun
date: 2018-04-05
category: "Algorithm"
tags: ['Algorithm', 'Javascript', 'Bit', 'Operators']
cover: "javascript.jpeg"
---

이번에는 Javascript에 Bit Operators를 이용하여 다양한 예제를 만들어볼까 합니다. 예를들어, * 이용하지 않고 곱셈하기, 외로운 수 찾기 알고리즘 등을 풀어볼까 합니다.
더 좋은 내용과 참고사항 있으시면 알려주세요. :)

## Intro
알고리즘을 풀다보면 비트연산으로 풀어야 하는 경우가 발생합니다. 특히, 기본에 충실한 간단한 알고리즘들이 대부분 비트연산자로 풀어야 하는 경우가 많습니다. 이럴 경우를 대비하여 비트 연산자를 이해하는 시간을 가져볼까 합니다.

비트 연산자를 들어가기에 앞서 `논리 연산자`와 `조건부 논리연산자`를 간단하게 정리해볼까 합니다. 저 또한 준비하면서 알게된 내용이었으며 들어가기 전에 보는 것이 논리 연산자를 이해하는데 큰 도움이 될 것이라고 생각합니다.

#### 논리 연산자 vs 조건부 논리연산자란?
`& 와 | 는 논리 연산자 Logical Operator`라고 부르며 `&& 와 ||는 조건부 논리 연산자 Conditional Logical Operator`라고 부릅니다.

#### 차이점은?
1. 조건부 연산자의 경우 앞의 조건을 만족하면 뒤의 조건들은 연산하지 않습니다.
    - 예를 들어, AND는 둘다 1일 경우 1을 출력하는 연산자입니다. 조건부 논리 연산자의 경우는 false가 앞에 나온 경우 1이 나오지 않기 때문에 다음 조건을 확인하지 않고 바로 0을 출력합니다. 하지만, 논리 연산자는 다음 값도 전부 확인하여 결과 값을 출력합니다. 모두 검증해야 할 이유가 없다면 조건부 논리 연산을 사용하는 것이 효율적입니다.
2. 비트 연산자는 비트 값을 결과 값을 기준으로 결과 출력합니다.
    - 논리 연산자는 비트 0과 1을 출력하는 반면, 조건부 논리연산자는 boolean 값을 결과 값으로 출력합니다.

간단한 예제를 보면 이해하기 수월할 것입니다.

```js
// 1. 논리 연산자
console.log(true & true) // 1
console.log(true & false) // 0
console.log(false & true) // 0
console.log(false & false) // 0

// 2. 조건부 논리 연산자
console.log(true && true) // true
console.log(false && false) // false
console.log(false && true) // false
console.log(false && false) // false
```

## Contents
#### 비트 연산자란?
- 비트 연산자는 피연산자를 10진수나 16진수, 8진수로 다루지 않고 `32개의 비트 집합을 기준으로 연산합니다.` 예를 들어, 10진수 9는 2진수로 1001입니다.
- `비트 연산자는 2진수 표현으로 연산`을 하지만, 반환값은 JavaScript 표준 수 값으로 반환합니다.

##### 1. 비트 AND
- a & b
- 두 피연산자의 대응되는 비트가 모두 1이면 1을 반환.

```js
console.log(true & true) // 1
console.log(true & false) // 0
console.log(false & true) // 0
console.log(false & false) // 0
```

##### 2. 비트 OR
- a | b
- 두 피연산자의 대응되는 비트에서 둘 중 하나가 1이거나 모두 1인 경우 1을 반환.

```js
console.log(true | true) // 1
console.log(true | false) // 1
console.log(false | true) // 1
console.log(false | false) // 0
```

##### 3. 비트 XOR
- a ^ b
- 두 피연산자의 대응되는 비트에서 둘 중 하나가 1이고, 둘 다 1이나 0이 아닐 경우 1을 반환.

```js
console.log(true ^ true) // 0
console.log(true ^ false) // 1
console.log(false ^ true) // 1
console.log(false ^ false) // 0
```

-  `외로운 수 찾기`에서 XOR 비트 연산자를 이용하여 쉽게 계산할 수 있습니다.
- ex) const array = [1, 1, 3, 4, 4, 5, 5, 6, 6]에서 3을 찾는 문제.

##### 4. 비트 NOT
- ~ a
- 피연산자의 비트를 뒤집음.

<table class="table table-dark text-center">
  <tr>
    <th>
        10진 값
    </th>
    <th>
        초기 이진 값
    </th>
    <th>
        식
    </th>
    <th>
        연산 후 이진 값
    </th>
  </tr>
  <tr>
    <td>
        5
    </td>
    <td>
        00000000 00000000 00000000 00000101
    </td>
    <td>
        ~ 5
    </td>
    <td>
        11111111 11111111 11111111 11111010
    </td>
  </tr>
  <tr>
    <td>
        -6
    </td>
    <td>
        11111111 11111111 11111111 11111010
    </td>
    <td>
        ~ 5
    </td>
    <td>
        00000000 00000000 00000000 00000101
    </td>
  </tr>
</table>

```js
console.log(~ 5) // -6
console.log(~ -6) // 5
```

#### 5. 비트 왼쪽(`<<`) 시프트 연산자
- a << b
- a의 2진수 표현을 b 비트만큼 왼쪽으로 이동함. 오른쪽은 0으로 채움.

<table class="table table-dark text-center">
  <tr>
    <th>
        보수 이진수
    </th>
    <th>
        식
    </th>
    <th>
        이동 후 보수 이진수
    </th>
  </tr>
  <tr>
    <td>
        00000101
    </td>
    <td>
        5 << 2
    </td>
    <td>
        00010100
    </td>
  </tr>
  <tr>
    <td>
        11110010
    </td>
    <td>
        -14 << 2
    </td>
    <td>
        11001000
    </td>
  </tr>
</table>

```js
console.log(5 << 2) // 20
console.log(-14 << 2) // -56
```

#### 6. - 비트 오른쪽(`>>`) 시프트 연산자
- a >> b
- a의 2진수 표현을 b 비트만큼 오른쪽으로 이동함. 오른쪽 남는 비트는 버림.

<table class="table table-dark text-center">
  <tr>
    <th>
        보수 이진수
    </th>
    <th>
        식
    </th>
    <th>
        이동 후 보수 이진수
    </th>
  </tr>
  <tr>
    <td>
        00000101
    </td>
    <td>
        5 >> 2
    </td>
    <td>
        00000001
    </td>
  </tr>
  <tr>
    <td>
        11110010
    </td>
    <td>
        -14 >> 2
    </td>
    <td>
        11111100
    </td>
  </tr>
</table>

```js
console.log(5 >> 2) // 1
console.log(-14 >> 2) // -4
```

##### 7. - 0으로 채우는 비트 오른쪽(`>>>`) 시프트 연산자
- a >>> b
- a의 2진수 표현을 b 비트만큼 오른쪽으로 이동함. 오른쪽 남는 비트는 버리고, 왼쪽은 0으로 채움.

<table class="table table-dark text-center">
  <tr>
    <th>
        10진 값
    </th>
    <th>
        초기 이진 값
    </th>
    <th>
        식
    </th>
    <th>
        연산 후 이진 값
    </th>
  </tr>
  <tr>
    <td>
        5
    </td>
    <td>
        00000000 00000000 00000000 00000000
    </td>
    <td>
        5 >>> 3
    </td>
    <td>
        11111111 11111111 11111111 11111010
    </td>
  </tr>
  <tr>
    <td>
        -14
    </td>
    <td>
        11111111 11111111 11111111 11110010
    </td>
    <td>
        -14 >>> 2
    </td>
    <td>
        00011111 11111111 11111111 11111110
    </td>
  </tr>
</table>

```js
console.log(5 >>> 3) // 0
console.log(-14 >>> 3) // 536870910
```

## Outro
비트에 대한 이해를 하면 할수록 컴퓨터에 대한 연산을 이해하기 쉽습니다. 특히, 이번 비트 연산자들을 통해 간단하게 비트관련한 정보를 숙지할 수 있었으며, 프로그래밍 간 숫자들이 어떻게 비트로 구성되었는지를 간단하게 체험하는데 좋은 시간이 되었습니다. 이와 관련한 알고리즘과 비트관련 된 좋은 정보를 더 조사하여 다음시간에 공유하겠습니다.

## References
- [Mozilla - Bitwise_Operators](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Operators/Bitwise_Operators)
- [Microsoft - BitOperators](https://docs.microsoft.com/ko-kr/scripting/javascript/reference/unsigned-right-shift-operator-decrement-javascript)
