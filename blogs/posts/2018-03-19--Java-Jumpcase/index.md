---
title: "[Algorithm/Java] Programmers - 멀리뛰기"
author: Seolhun
date: 2018-03-19
category: "Algorithm"
tags: ['Java', 'Algorithm', 'Programmers', '야근지수']
banner: "java.jpg"
---

이번에는 Java로 Programmers의 31번 문제 멀리뛰기를 구현해보도록 하겠습니다.
[Programmers 멀리뛰기 - Java](https://programmers.co.kr/learn/challenge_codes/31#)

## 1. Question
[멀리뛰기]
효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
(1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸)
(1칸, 1칸, 2칸)
(2칸, 1칸, 1칸)
(2칸, 2칸)
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 출력하는 jumpCase 함수를 완성하세요. 예를 들어 4가 입력된다면, 5를 반환해 주면 됩니다.

## 2. Process
1. num이 1가 2일 경우는 바로 정답처리한다.
2. 아닌 경우는 이전전 값과 전 값을 구하는 함수로 재귀호출하여 정답을 구한다.

## 3. Code
```java
class JumpCase {
    public int jumpCase(int num) {
        if(num == 1){
            return 1;
        }else if(num == 2){
            return 2;
        }
        return jumpCase(num-1) + jumpCase(num-2);
    }

    public static void main(String[] args) {
        JumpCase c = new JumpCase();
        int testCase = 4;
        //아래는 테스트로 출력해 보기 위한 코드입니다.
        System.out.println(c.jumpCase(testCase));
    }
}
```

## 4. Outro
처음 보았을 때 익숙하다 싶었는데, 등비수열 함정에 빠져서 시간을 좀 낭비했었습니다. 근데 패턴을 나열해서 보면 피보나치 수열임을 확인하실 수 있습니다.
1 - 1 - 2 - 3 - 5 - 8 - 13 즉, 전전 값과 전 값을 더하면 다음의 값을 유추해 낼 수 있습니다. 3번째부터 전전 값의 존재하므로 이전의 길이를 요구하는 답은 바로 정답을 리턴시키는 로직으로 만들었습니다.
