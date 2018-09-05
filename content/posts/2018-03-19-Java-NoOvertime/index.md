---
title: "[Algorithm/Java] Programmers - 야근지수"
author: Seolhun
date: 2018-03-19
categories: ['Java', 'Algorithm']
tags: ['Java', 'Algorithm', 'Programmers', '야근지수']
cover: "java.jpg"
---

이번에는 Java로 Programmers의 25번 문제 야근지수를 구현해보도록 하겠습니다.
[Programmers 야근지수 - Java](https://programmers.co.kr/learn/challenge_codes/25#)

## 1. Question
[야근 지수]
회사원인 수민이는 많은 일이 쌓여 있습니다. 수민이는 야근을 최소화하기 위해 남은 일의 작업량을 숫자로 메기고, 일에 대한 야근 지수를 줄이기로 결정했습니다. 야근 지수는 남은 일의 작업량을 제곱하여 더한 값을 의미합니다. 수민이는 1시간 동안 남은 일 중 하나를 골라 작업량 1만큼 처리할 수 있습니다. 수민이의 퇴근까지 남은 N 시간과 각 일에 대한 작업량이 있을 때, noOvertime 함수를 제작하여 수민이의 야근 지수를 최소화 한 결과를 출력해 주세요. 예를 들어, N=4 일 때, 남은 일의 작업량이 [4, 3, 3] 이라면 야근 지수를 최소화하기 위해 일을 한 결과는 [2, 2, 2]가 되고 야근 지수는 22 + 22 + 22 = 12가 되어 12를 반환해 줍니다.

## 2. Process
1. 주어진 횟수(n)만큼 루프한다
2. 가장 높은 시간이 걸리는 work 값을 -1해준다.
3. -1해준 값보다 높은 값이 있을 때 그 값을 -1, 없으면 같은 값(또는 해당 값을) 다시 -1해준다.
4. 2-3을 횟수만큼 반복한다
5. 횟수만큼 다 돌았으면 해당 배열을 제곱하여 값을 구한다

## 3. Code
```java
class NoOvertime {
    public int noOvertime(int no, int[] works) {
        int result = 0;

        while (no != 0) {
            getWorktime(no, works);
            no--;
        }

        for (int i = 0; i < works.length; i++) {
            result += Math.pow(works[i], 2);
        }

        return result;
    }

    void getWorktime(int n, int[] works) {
        int selected = 0;
        int index = 0;
        for (int i = 0; i < works.length; i++) {
            if (works[i] > selected) {
                selected = works[i];
                index = i;
            }
        }
        works[index]--;
    }

    public static void main(String[] args) {
        NoOvertime c = new NoOvertime();
        int[] test = {4, 3, 3};
        System.out.println(c.noOvertime(4, test));
    }
}
```
