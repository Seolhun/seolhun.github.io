---
title: "[Algorithm/Java] SWexpertAcademy Dallant2"
author: Seolhun
date: 2018-04-17
category: "Algorithm"
tags: ['Algorithm', 'Java']
banner: "./assets/covers/java.png"
---
- [SWexpertAcademy Dallant2](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV18R8FKIvoCFAZN&categoryId=AV18R8FKIvoCFAZN&categoryType=CODE)
- 난이도 : 5
- 정답률 : 75%


## 1. Question
초등학교 어린이를 대상으로 피아노 학원을 운영하는 김원장님은 5월 5일 어린이날을 맞이하여 학원에서 달란트 시장을 열기로 했다. 원장님은 매일 칭찬할 일이 있을 때마다 원생에게 1달란트 스티커를 나눠 주는데, 달란트 시장에서 1년 동안 모은 달란트만큼 사탕으로 교환해 주기로 했다.
여기에, 좀더 교육적 효과를 위하여 아이디어를 냈다.

10개의 달란트를 모은 원생에게 10개의 사탕을 나누어 주는 것이 아니라 10개를 3 묶음으로 나누어서 각 묶음의 곱의 개수로 사탕을 교환해 주기로 했다.
10 달란트를 3묶음으로 나눌 경우 어떻게 나누어야 가장 많은 사탕을 교환할 수 있을까?

예를 들어 1개, 1개, 8개 묶음으로 나누면 1x1x8=8 로 8개의 사탕과 교환할 수 있다. 최대는 3x3x4=36으로 36개의 사탕과 교환할 수 있다.

원생마다 달란트의 개수가 다르며 원장님은 서로 다른 묶음 개수를 제시하기로 했다. 달란트 수와 묶음의 수가 주어질 때 받을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.

- [제약 사항]
  - 원생이 모은 달란트의 수 N의 범위는 10 달란트 <= N <= 100 달란트이다.
  - 묶음의 수 P는 P <= N로 주어진다.

- [입력]
  - 맨 위의 줄에는 전체 테스트 케이스의 수 T가 주어진다.
  - 그 다음 줄부터 T개의 테스트 케이스가 주어진다.
  - 각 테스트 케이스는 한 줄에 주어지며, 달란트 수인 양의 정수 N이 주어진 다음, 공백을 하나 둔 다음 묶음의 수인 양의 정수 P가 주어진다.

- [출력]
  - 총 T줄에 T개의 테스트 케이스 각각에 대한 답을 한 줄에 출력한다.
  - 각 줄은 ‘#x’로 시작하고 공백을 하나 둔 다음, 각 테스트 케이스에 주어진 달란트 수와 묶음 수를 이용하여 받을 수 있는 최대 사탕 수를 출력한다.

## 2. Code
```java
import java.util.Scanner;

public class Solution {
    public static void main(String arg[]) {
        solution();
    }

    static void solution() {
        StringBuilder sb = new StringBuilder();
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int i = 1; i <= T; i++) {
            int dallant = sc.nextInt();
            int bundle = sc.nextInt();
            printResult(sb, i, getResult(dallant, bundle));
        }
        sc.close();
    }

    static long getResult(int dallant, int bundle) {
        int division = dallant / bundle;
        int rest = dallant % bundle;
        return (long) Math.pow(division, bundle - rest) * (long) Math.pow(division + 1, rest);
    }

    static void printResult(StringBuilder sb, int index, long result) {
        sb.setLength(0);
        sb.append("#");
        sb.append(index);
        sb.append(" ");
        sb.append(result);
        System.out.println(sb.toString());
    }
}
```

## 3. Outro
나머지가 있을때 마다 나머지 값을 원래 값에 1씩 더해서 나눠주는 것이 가장 높은 값을 얻을 수 있는 방법입니다. 즉, 나머지 값이 있을때마다 묶음의 개수로 주어지는 값을 빼는 것`bundle - rest`를 처리하여 해당 값을 나눈 결과값 `divison + 1`처리 후 rest 값을 제곱하면 우리가 원하는 정답을 얻을 수 있습니다.
