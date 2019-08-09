---
title: "[Algorithm/Java] SWexpertAcademy GetMidNumAvg"
author: Seolhun
date: 2018-04-10
category: "Algorithm"
tags: ['Algorithm', 'Java']
banner: "java.jpg"
---
- [SWexpertAcademy GetMidNumAvg Algorithm](https://www.swexpertacademy.com/main/code/problem/problemDetail.do)
- 난이도 : 2
- 정답률 : 47%


## 1. Question
10개의 수를 입력 받아, 최대 수와 최소 수를 제외한 나머지의 평균값을 출력하는 프로그램을 작성하라. (소수점 첫째 자리에서 반올림한 정수를 출력한다.)

- [제약 사항]
  - 각 수는 0 이상 10000 이하의 정수이다.

- [입력]
  - 가장 첫 줄에는 테스트 케이스의 개수 T가 주어지고, 그 아래로 각 테스트 케이스가 주어진다. 각 테스트 케이스의 첫 번째 줄에는 10개의 수가 주어진다.

- [출력]
  - 출력의 각 줄은 '#t'로 시작하고, 공백을 한 칸 둔 다음 정답을 출력한다. (t는 테스트 케이스의 번호를 의미하며 1부터 시작한다.)

- 입력
```
3
3 17 1 39 8 41 2 32 99 2
22 8 5 123 7 2 63 7 3 46
6 63 2 3 58 76 21 33 8 1
```

- 출력
```
#1 18
#2 20
#3 24
```

## 2. Process
1. 정렬한다.
2. 2번째부터 9번째까지 더한 후 평균 값을 구한다.
3. 첫번째 자리에서 반올림 한 후 결과를 출력한다.

## 3. Code
```java
iimport java.util.Arrays;
import java.util.Scanner;

public class Solution {
    public static void main(String arg[]) {
        solution();
    }

    static void solution() {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < T; i++) {
            int num[] = new int[10];
            for (int j = 0; j < num.length; j++) {
                num[j] = sc.nextInt();
            }
            printResult(sb, i + 1, getResult(num));
        }
    }

    static int getResult(int[] question) {
        int avg = 0;
        Arrays.sort(question);
        for (int i = 1; i < question.length - 1; i++) {
            avg += question[i];
        }
        return (int) Math.round((double)avg / 8);
    }

    static void printResult(StringBuilder sb, int index, int result) {
        sb.setLength(0);
        sb.append("#");
        sb.append(index);
        sb.append(" ");
        sb.append(result);
        System.out.println(sb.toString());
    }
}
```

## 4. Outro
결과 값 출력에서 (double) 캐스팅을 해주지 않으면 자동으로 int로 캐스팅되어 round 파라미터의 double로 들어가지 않아 저희가 원하는 결과로 출력되지 않습니다. 이를 위해 double로 캐스팅하여 평균 값을 구하기 위한 소수점 값 형태로 받은 후 반올림 처리를 해주어야 합니다. 마지막에 (int)로 캐스팅하는 이유는 round 리턴 타입이 long이기 때문입니다.

printResult나 getResult로 만들어서 푸는 이유는 Samsung SWexpersAcademy 결과 값 포맷이 고정적으로 정해져있어서 이를 효율적으로 분리하여 만들기 위함입니다. getResult로 받는 것은 문제 값을 받는 부분과 풀이가 분리되어야 한다고 생각하기 때문입니다. 특히, 재귀가 필요할 시 해당 메소드만 재귀해야 되기때문에 확장성을 고려하여 이렇게 정의하였습니다.

다음에는 여러가지 문제를 풀어보겠습니다.
