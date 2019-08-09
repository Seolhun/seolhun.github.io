---
title: "[Algorithm/Java] SWexpertAcademy ManagementExercise"
author: Seolhun
date: 2018-04-11
category: "Algorithm"
tags: ['Algorithm', 'Java']
banner: "./assets/covers/java.png"
---
- [SWexpertAcademy ManagementExercise Algorithm](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AWE_ZXcqAAMDFAV2&categoryId=AWE_ZXcqAAMDFAV2&categoryType=CODE)
- 난이도 : 3
- 정답률 : 86%


## 1. Question
최근 경도비만 판정을 받은 준환이는 적절한 몸을 유지하기 위하여 1주일에 L분 이상 U분 이하의 운동을 하여야 한다.


준환이는 이번 주에 X분만큼 운동을 하였다.

당신은 준환이가 제한되어 있는 시간을 넘은 운동을 한 것인지, 그것이 아니라면 몇 분 더 운동을 해야 제한을 맞출 수 있는지 출력하는 프로그램을 작성해야 한다.

- [입력]
    - 첫 번째 줄에 테스트 케이스의 수 T가 주어진다.
    - 각 테스트 케이스의 첫 번째 줄에는 세 정수 L, U, X(0≤ L ≤ U ≤ 107, 0 ≤ X ≤ 107)가 공백으로 구분되어 주어진다.

- [출력]
  - 각 테스트 케이스마다 I가 필요한 양보다 더 많은 운동을 하고 있다면 -1을 출력하고, 아니라면 추가로 몇 분을 더 운동해야 하는지 출력한다.

- 입력
```
3
300 400 240
300 400 350
300 400 480
```

- 출력
```
#1 60
#2 0
#3 -1
```

## 2. Process
1. 최대 운동량보다 많으면 -1
2. 최소보다 많고 최대보다 적으면 0
3. 최소 운동량보다 적으면 해야하는 운동량

## 3. Code
```java
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
            int[] questions = new int[3];
            for (int j = 0; j < 3; j++) {
                 questions[j] = sc.nextInt();
            }
            printResult(sb, i + 1, getResult(questions));
        }

    }

    static int getResult(int[] questions){
        if(questions[1] < questions[2]) {
            return -1;
        }

        if(questions[0] < questions[2]) {
            return 0;
        }

        return questions[0] - questions[2];
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
이번에는 perfectShuffle 문제를 풀기전 몸풀기로 풀어보았습니다. 다음 레벨 3의 50% 난이도로 들어가겠습니다.
