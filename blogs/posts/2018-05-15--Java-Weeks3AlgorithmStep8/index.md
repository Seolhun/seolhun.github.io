---
title: "[Algorithm/Java] BAEKJOON - Study Weeks 3 : 규칙찾기 Step8"
author: Seolhun
date: 2018-05-15
category: "Algorithm"
tags: ['Algorithm', 'Java']
banner: "java.jpg"
---
이번 스터디 3주차로 [백준 알고리즘 단계별 문제풀기 : Step8](https://www.acmicpc.net/step/8)를 같이 진행하였습니다. 이전 문자열 사용하기에 비해서 난이도가 많이 올라갔다는 것을 체감할 수 있었습니다. 일정한 패턴이란게 테스트하기가 좀 어렵다는 생각을 가졌는데 이와 관련한 문제 풀이와 내용에 대해서 정리해볼까 합니다.

진행 간 문제 풀이 관련하여 토론하였고 어떠한 방식의 코드가 더 결과가 좋은지를 테스트 해보는 시간을 가졌습니다. 테스트가 필요한 테스트 내용으로는

1. 인스턴스화 vs 정적변수의 속도차이,
2. Java Stream vs Linear Search을 비교해보기로 의견이 나왔습니다.

대략 100만개의 데이터에서 어느 것이 더 빠른지를 비교해보기로 했습니다. 해당 내용은 아래에서 확인할 수 있습니다.


## Java Stream vs Linear Search 비교해보기
```java
import com.algorithm.AlgorithmUtils;

import java.util.Arrays;

public class Solution {
    public static void main(String args[]) {
        int N = 1000000;
        int[] tests = new int[N];
        tests = AlgorithmUtils.buildNotDuplRandomList(tests);

        /**
         * Stream()
         */
        AlgorithmUtils.startMethod();
        int min = Arrays.stream(tests).min().getAsInt();
        System.out.println("stream() : " + min);
        AlgorithmUtils.finishMethod();

        System.out.println("====================================");
        System.out.println("====================================");
        /**
         * Linear()
         */
        AlgorithmUtils.startMethod();
        int min2 = 999999999;
        for (int i = 0; i < tests.length; i++) {
            min2 = min2 > tests[i] ? tests[i] : min2;
        }
        System.out.println("Linear() : " + min);
        AlgorithmUtils.finishMethod();
    }
}
```
```
Ramdom Array is Created, counts : 1000000
test Start Time : 1526391350397
stream() : 54
test Finish Time : 1526391350541
test Time Taken : 144
====================================
====================================
test Start Time : 1526391350541
Linear() : 54
test Finish Time : 1526391350552
test Time Taken : 11
```
테스트 과정은 랜덤배열을 생성하여 같은 배열을 이용하여 최소값을 찾는 방식으로 테스트했습니다. 배열생성과 상관없이 테스트했으므로 테스트 결과에는 옇향이 없었을 것입니다. 테스트 시간 계산은 `System.currentTimeMillis();`을 사용하였습니다.

위의 수치로보면, 완전탐색이 약 12배 정도 빠르다는 것을 알 수 있습니다. 정렬되지 않은 배열에서 값을 찾아내는 가장 빠른 방법은 Stream을 이용하는 것보다 완전탐색이 더 효율적으로 보입니다.

## 인스턴스화 vs 정적변수 속도차이
```java
package com.algorithm.compare.InstanceVsStatic;

import com.algorithm.AlgorithmUtils;

public class Solution {

    private static StringBuilder staticSb = new StringBuilder();

    public static void main(String args[]) {
        int N = 1000000;
        int[] tests = new int[N];
        tests = AlgorithmUtils.buildRandomList(tests);

        /**
         * Instance()
         */
        AlgorithmUtils.startMethod();
        for (int test : tests) {
            StringBuilder sb = new StringBuilder();
            sb.append(test);
        }
        System.out.println("===================Instance=================");
        AlgorithmUtils.finishMethod();

        System.out.println("====================================");
        System.out.println("====================================");
        /**
         * Static()
         */
        AlgorithmUtils.startMethod();
        for (int test : tests) {
            staticSb.setLength(0);
            staticSb.append(test);
        }
        System.out.println("===================Static=================");
        AlgorithmUtils.finishMethod();
    }
}

```
```
Ramdom Array is Created, counts : 1000000
===================Instance=================
test Start Time : 1526391751323
test Finish Time : 1526391751413
test Time Taken : 91
====================================
====================================
===================Static=================
test Start Time : 1526391751414
test Finish Time : 1526391751450
test Time Taken : 36
```

StringBuilder와 같은 Class를 이용하면 Java에서 많은 문자열 처리 알고리즘에서 이점을 얻을 수 있습니다. 하지만, 재귀나 해당 값을 계속 재이용할 때, 이 값을 초기화하고 재할당하는 것이 나을지, 인스턴스를 계속 생성하고 GCC를 믿는게 빠를지를 비교해보고 싶었습니다. 당연히 Instance 생성비용으로 인해 느릴것으로 생각했지만, 값의 차이를 보니 생각보다 크다는 것을 느낄 수 있었습니다.

약 2.5배 정도가 차이났고 최소 1.8배 정도의 차이를 나타냈습니다. 아마 값이 적을때일수록 해당 차이는 줄어들겠지만 대량의 값을 통해 무엇이 더 효율적인지를 알 수 있는 좋은 시간이었습니다. 당연히 공간복잡도도 고려해야겠지만, 능력부족으로 이부분은 직접 테스트 못한 점 양해부탁드립니다.

## 1. [별찍기 - 1](https://www.acmicpc.net/problem/2438)
#### 문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

#### 입력
첫째 줄에 N (1<=N<=100)이 주어진다.

#### 출력
첫째 줄부터 N번째 줄 까지 차례대로 별을 출력한다.

#### 예제 입력 1
5

#### 예제 출력 1
*
**
***
****
*****

```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/2438
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    // Testcase
    static int T;

    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        T = Integer.parseInt(bf.readLine());

        for (int i = 0; i < T; i++) {
            sb.append("*");
            System.out.print(sb.toString());
            System.out.println();
        }
    }
}
```

## 2. [벌집](https://www.acmicpc.net/problem/2292)
#### 문제
위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

#### 입력
첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.

#### 출력
입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.

#### 예제 입력 1
13

#### 예제 출력 1
3

```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/2292
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 메모리 : 11008 KB
// 시간 : 88 MS
public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(bf.readLine());
        System.out.println(solve(T));
    }

    static int solve(int input) {
        if (input == 1) {
            return 1;
        }

        boolean repeat = true;
        int init = 1;
        int ascent = 1;
        while (repeat) {
            init += 6 * ascent;
            ascent++;
            if (init >= input) {
                repeat = false;
            }
        }
        return ascent;
    }
}
```

등비수만큼 커진다는 것을 알 수 있고, 여기서는 6의 등비로 커집니다. 해당 패턴만 찾아서 만들면 문제를 쉽게 해결할 수 있습니다.


## 3. [분수 찾기](https://www.acmicpc.net/problem/1193)
#### 문제
1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…

이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

#### 입력
첫째 줄에 X(1≤X≤10,000,000)가 주어진다.

#### 출력
첫째 줄에 분수를 출력한다.

#### 예제 입력 1
14

#### 예제 출력 1
2/4

```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/1193
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 메모리 11016 KB
// 속도 : 88 MS
public class Main {
    // Testcase
    static int input;

    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        input = Integer.parseInt(bf.readLine());

        boolean repeat = true;
        int init = 0;
        int accumulation = 0;
        while (repeat) {
            init += 1;
            accumulation += init;
            if (accumulation >= input) {
                repeat = false;
            }
        }
        printResult(init, accumulation);
    }

    static void printResult(int init, int accumulation) {
        int rest = accumulation - input;

        // 짝수
        int a = init - rest;
        int b = 1 + rest;
        System.out.println(init % 2 == 0 ? a + "/" + b : b + "/" + a);
    }
}
```

홀수, 짝수일 때 시작지점이 달라지는 것 외에는 주어진 수에서 각 값을 나눠서 분자/분모로 나눠진다는 것을 알 수 있습니다. 결국 주어진 분자/분모의 합이 같기 때문에, 해당 값에서 순서만을 계산하면 쉽게 값을 구할 수 있고, 해당 값을 출력할 때만 순서에 맞게 출력해준다면 큰 문제없이 해결할 수 있습니다.


## 4. [2007년](https://www.acmicpc.net/problem/1924)
#### 문제
오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.

#### 입력
첫째 줄에 빈 칸을 사이에 두고 x(1≤x≤12)와 y(1≤y≤31)이 주어진다. 참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.

#### 출력
첫째 줄에 x월 y일이 무슨 요일인지에 따라 SUN, MON, TUE, WED, THU, FRI, SAT중 하나를 출력한다.

#### 예제 입력 1
1 1

#### 예제 출력 1
MON

```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/1924
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 메모리 : 10992 KB
// 속도 : 88 MS

public class Main {
    private static int[] monthes = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    private static String[] strDay = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};

    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String[] inputs = bf.readLine().split(" ");
        int month = Integer.parseInt(inputs[0]);
        int day = Integer.parseInt(inputs[1]);
        System.out.println(solve(month, day));
    }

    static String solve(int month, int day) {
        int days = 0;
        for (int i = 0; i < month - 1; i++) {
            days += monthes[i];
        }
        days = (days + day) % 7;
        return strDay[days];
    }
}
```

년도를 넘어가는 문제가 아니기 때문에, 주어진 해당 값을 기준으로 하여 계산하면 쉽게 계산할 수 있습니다. 만약 년을 넘어 윷년까지 계산해야하면 복잡해질텐데 그러한 문제는 아니므로 주어진 변수만 처리하면 쉽게 해결할 수 있습니다.

## 5. [부녀회장이 될테야](https://www.acmicpc.net/problem/2775)
#### 문제
평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

이 아파트에 거주를 하려면 조건이 있는데, “a 층의 b 호에 살려면 자신의 아래(a-1)층에 1호부터 b 호까지 사람들의 수의 합만큼 사람들을 데려와 살아야한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정 했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있나를 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층에 i호에는 i명이 산다.

#### 입력
첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다. (1 <= k <= 14, 1 <= n <= 14)

#### 출력
각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

#### 예제 입력 1
2
1
3
2
3

#### 예제 출력 1
6
10

```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/2775
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 메모리 : 10816 KB
// 속도 : 92 MS
public class Main {
    private static int[] houses;

    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(bf.readLine());
        for (int i = 0; i < t; i++) {
            // 층
            int k = Integer.parseInt(bf.readLine());
            // 호
            int n = Integer.parseInt(bf.readLine());
            houses = new int[n];
            for (int j = 0; j < n; j++) {
                houses[j] = j + 1;
            }
            System.out.println(solve(k, n, 0));
        }
    }

    static int solve(int k, int n, int index) {
        if (index == k) {
            return houses[n - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            int sum = 0;
            for (int j = i; j >= 0; j--) {
                sum += houses[j];
            }
            houses[i] = sum;
        }
        return solve(k, n, index + 1);
    }
}
```

해당 문제를 더 간단하게 만들고 싶어서 이것저것 해보았지만 실패했고, 2차 포문을 통해 누적된 값을 계산하는 방식을 선택하였습니다. 포문을 줄어들게 만든 이유는, 앞에서 부터 바꾸면 뒤에 누적되는 수에 영향을 주기 때문입니다. 변수를 하나만 이용했기 때문에 해당 방법으로 해결하였습니다.

## 6. [방 번호](https://www.acmicpc.net/problem/1475)
#### 문제
다솜이는 은진이의 옆집에 새로 이사왔다. 다솜이는 자기 방 번호를 예쁜 플라스틱 숫자로 문에 붙이려고 한다.

다솜이의 옆집에서는 플라스틱 숫자를 한 세트로 판다. 한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최소값을 출력하시오. (6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)

#### 입력
첫째 줄에 다솜이의 방 번호 N이 주어진다. N은 1,000,000보다 작거나 같은 자연수 또는 0이다.

#### 출력
첫째 줄에 필요한 세트의 개수를 출력한다.

#### 예제 입력 1
9999

#### 예제 출력 1
2

```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/1157
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 메모리 : 10912 KB
// 시간 : 88 MS
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String N = br.readLine().replace('9', '6');

        int[] numbers = new int[10];
        for (int i = 0; i < N.length(); i++) {
            numbers[N.charAt(i) - 48]++;
        }

        // 4, 3개 일때 2세트 필요, 2, 1개일때 1세트 필요
        numbers[6] = numbers[6] / 2 + numbers[6] % 2;
        int max = 0;
        for (int number : numbers) {
            if (number > max) {
                max = number;
            }
        }
        System.out.println(max);
    }
}
```

0~9까지 1개씩 있는 번호 세트가 있는 장남감에서, 6과 9는 서로 대체할 수 있기 때문에, 1세트에서 2개를 감당할 수 있습니다. 이 부분을 주의해서 처리하면 문제는 쉽게 해결할 수 있습니다.

## Outro
개인적으로 패턴을 찾았다고 문제를 쉽게 해결할 수 있는 것은 아니라고 생각합니다. 하지만, 패턴을 찾기 위한 가장 쉬운 방법은 종이에 직접 작은 단위로 적어나가보는 것입니다. 문제와 암산으로는 이를 쉽게 연상하기가 개인적으로는 어려웠습니다. 이러한 부분을 쉽게 해결하였다면, 완전 탐색으로 접근하고 이후에 해당 로직을 개선하는 것이 문제를 빠르고 효과적으로 해결해나갈 수 있을 것으로 판단합니다.

이 전주의 궁금했던 2가지의 테스트케이스도 작성완료했고, 패턴 찾기에 대부분도 문제를 해결할 수 있었습니다. 아직 3개 정도의 못 푼 문제는 차차 풀어나가서 내용에 수정해서 넣도록 하겠습니다. 감사합니다.
