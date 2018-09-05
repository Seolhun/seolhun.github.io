---
title: "[Algorithm] 알고리즘을 위한 시간복잡도 계산 방법 - Big-O 표기"
author: Seolhun
date: 2018-04-05
categories: "Algorithm"
tags: ['Algorithm', 'Big-O']
cover: "algorithm.jpeg"
---

이번에는 알고리즘을 풀면서 시간복잡도를 표기하는 Big-O 표기법에 대해 잘 알지 못해 이를 정리해보고자 합니다.

## Intro
개발자들을 면접보는 방법에는 여러가지가 있습니다. 그 중 가장 보편적인 것은
1. 알고리즘 풀기
2. 간단한 프로젝트 만들기

위 2가지 일 것입니다. 그 중에서도 더 선호되고 보편적으로 사용되는 방법은 알고리즘 풀기입니다. 알고리즘을 풀어봄으로써 `문제해결 능력`, `코드 작성습관` 등에 대한 개발적인 성향을 더 잘 파악할 수 있기 때문입니다. 어떻게 보면 스타트업들은 당장의 서비스를 개발해야하는 부분들이 많아 알고리즘 보다 서비스 개발능력 및 이해도를 많이 볼 수도 있습니다. 하지만, 대기업이나, 이미 CachCow가 있는 기업들은 기존의 코드에서 나오는 기술 부채들을 청산하기 위해 리팩토링 및 새로운 기술 도입, 알고리즘 변경 등이 보편적으로 많이 선택됩니다. 이러한 부분에서 필요한 것이 알고리즘 능력이라고 볼 수 있습니다.

그렇다면, 알고리즘을 더 좋게 만들려면 무엇을 알아야 할까요? 알고리즘은 결국 수학처럼 0, 1처럼 조건에 부합하여 문제를 해결해야합니다. 그리고, 다음으로 더 빠른 해결책을 찾아야 합니다. 이를 위해 필요한 것이 바로 `시간 복잡도`입니다. 즉, 시간 복잡도란, 일정한 조건에서 해당 코드가 얼마나 빠른지를 판단할 수 있는 기준이 되는 것입니다. 다음으로 `공간 복잡도`입니다. 얼마나 많은 메모리를 차지하는가 입니다.

그렇다면 우리가 알아야 할 시간 복잡도는 어떻게 알 수 있을까요? 간단하게 시간 복잡도를 계산하는 방법을 알아보겠습니다.

## Contents
- 알고리즘 시간 복잡도 표기법 3가지 표기법
    - 최상의 경우 : 오메가 표기법 (Big-Ω Notation)
    - 최악의 경우 : 빅오 표기법 (Big-O Notation)
    - 평균의 경우 : 세타 표기법 (Big-θ Notation)

가장 보편적으로 사용되는 것은 `Big-O 표기법`입니다.
Big-O 표기법은 계수와 낮은 차수의 항을 제외시키는 방법입니다(ex: 2n²-2n+2 > O(n2)로 표기). 이런 방식으로 표현할 때, (예를 들면, 입력 크기를 무한대로 입력하여) 시간복잡도를 점근적으로 묘사한다고 말한다.

Big-O 표기법 개발자들에게 최악의 경우가 중요하다는 의미를 내포하고 있어 최악의 경우를 대비하여 속도를 개선하는 것이 중요함을 알 수 있습니다.
그 중, Big-O 표현식에 가장 큰 영향을 미치는 것은 조건 Input의 n(개수)의 단위입니다. 주어진 Input의 개수를 의미하는 n을 기반으로 명령어들의 연산이 몇번이나 실행됬는지를 숫자로 표시하는 것입니다.

#### - Big-O Notation?
> Big-O notation is a way of converting the overall steps of an algorithm into algebraic terms, then excluding lower order constants and coefficients that don’t have that big an impact on the overall complexity of the problem.

<sub>
    <img src='/images/contents/20180404/algo/Big-O.jpg' width='100%' height='100%'>
    - [Big-O.jpg](https://joshuajangblog.wordpress.com/2016/09/21/time_complexity_big_o_in_easy_explanation/)
</sub>

#### - 대표적인 시간 복잡도
1. O(1) – 상수 시간 : 입력값 n 이 주어졌을 때, 알고리즘이 문제를 해결하는데 오직 한 단계만 거칩니다.
2. O(log n) – 로그 시간 : 입력값 n 이 주어졌을 때, 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듭니다.
3. O(n) – 직선적 시간 : 문제를 해결하기 위한 단계의 수와 입력값 n이 1:1 관계를 가집니다.
4. O(n^2) – 2차 시간 : 문제를 해결하기 위한 단계의 수는 입력값 n의 제곱입니다.
5. O(C^n) – 지수 시간 : 문제를 해결하기 위한 단계의 수는 주어진 상수값 C 의 n 제곱입니다.

##### 1. O(1) — CONSTANT TIME (상수 시간)
- 값을 검색할 때, 객체에서 Key를 알거나 배열에서 Index를 알고 있으면 언제나 한 단계만 걸립니다.

```tsx
const array = [1, 5, 4, 10, 12, 3, 2];
const findNumber = ((num) => {
    return array[num]; // 1
});
```

##### 2. O(LOG n) — LOGARITHMIC TIME (로그 시간)
- n의 개수가 늘어나면, n이 늘어난 개수보다 조금 더 연산량이 증가하고 2배를 넘지 않습니다.
- 배열에서 값을 찾을 때, 어느 쪽에서 시작할지를 알고 있으면 검색하는 시간이 두배로 줄어듭니다.
    - ex) Binary Search

```tsx
const array = [1, 2, 3, 4, 5, 6 ,7];
const binarySearch = ((array, value) => {
    let guess;
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
	    if (array[guess] === value) {
            return guess;
        } else if (array[guess] < value) {
            min = guess + 1;
        } else {
	        max = guess - 1;
        }
    }
    return guess;
});
```

##### 3. O(n²) — Quadratic Time
- 중복된 반복문을 사용했을 때 걸리는 시간을 의미합니다, n의 개수의 최악 n^2 연산량을 요구합니다.

```tsx
const nestedLoopFunction = ((array) => {
    let sum_array = [];
    for (let i = 0;i < array.length; i++) {
        for(let j = i+1;j < array.length; j++) {
            sum_array.push(array[i] + array[j]);
        }
    }
    return sum_array;
});
```

##### 4. O(2^n) — EXPONENTIAL TIME (지수 시간)
- 지수 시간은 보통 문제를 풀기 위해 모든 조합과 방법을 시도할 때 사용됩니다.
    - ex) 길이가 n인 비밀번호를 찾아야 할 경우

## Outro
이번 시간을 통해 `시간 복잡도`를 간단하게 공부해보았습니다. 알고리즘을 풀면서 시간 복잡도를 계산하는 훈련을 하는 것은 상당히 좋은 훈련으로 보입니다. 왜냐하면, 지금 제가 프로그래밍 하는 알고리즘에 대한 절차를 생각하며 이해하고 있다는 방증이기도 하기 때문입니다. 간단하게 작성된 글이고, 좋은 글들을 참조하여 작성된 글로서 다른 분들에게도 도움이 되기를 바랍니다.

앞으로 개인적으로도 알고리즘을 풀어볼 때마다 시간 복잡도를 개선하기 위한 사고로 알고리즘을 접근해볼까 합니다. 그리고, 앞으로 작성 될 알고리즘 관련 내용에 시간복잡도도 계산하여 공유하도록 노력하겠습니다.
감사합니다.

## References
- [Wiki - 시간복잡도](https://ko.wikipedia.org/wiki/%EC%8B%9C%EA%B0%84_%EB%B3%B5%EC%9E%A1%EB%8F%84)
- [Medium - Algorithms in plain English: time complexity and Big-O notation](https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c)
