---
author: Seolhun
banner: "/assets/covers/java.png"
category: "Algorithm"
date: 2018-04-10
subTitle:  ""
tags: ['Algorithm', 'Java']
title: "[Algorithm/Java] SWexpertAcademy ZigzagNumber"
---
이번에는 [삼성소프트웨어 아카데미 사이트](https://www.swexpertacademy.com/main/main.do)에 있는 알고리즘을 풀어볼까 합니다. 문제와 설명 등 모든 것이 잘 되어있고 한국어로 큰 어려움없이 읽을 수 있습니다.

- [SWexpertAcademy ZigzagNumber Algorithm](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PxmBqAe8DFAUq&categoryId=AV5PxmBqAe8DFAUq&categoryType=CODE)
- 난이도 : 2
- 정답률 : 86%


## 1. Question
- [예제 풀이]
  - N이 5일 경우,
  - 1 – 2 + 3 – 4 + 5 = 3
  - N이 6일 경우,
  - 1 – 2 + 3 – 4 + 5 – 6 = -3

- [제약사항]
  - N은 1 이상 10 이하의 정수이다. (1 ≤ N ≤ 10)

- [입력]
  - 가장 첫 줄에는 테스트 케이스의 개수 T가 주어지고, 그 아래로 각 테스트 케이스가 주어진다. 각 테스트 케이스에는 N이 주어진다.


- [출력]
  - 각 줄은 '#t'로 시작하고, 공백을 한 칸 둔 다음 누적된 값을 출력한다. (t는 테스트 케이스의 번호를 의미하며 1부터 시작한다.)

## 2. Process
1. T라는 테스트케이스 만큼 루프문을 만듭니다.
2. 메소드를 정의하여 1부터 해당숫자까지 포문을 만듭니다.
3. 홀수는 -, 짝수는+ 연산을 처리하여 결과값 메소드를 만듭니다.
4. 출력 포맷에 맞게 출력합니다.

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
            printResult(sb, i + 1, getResult(sc.nextInt()));
        }
    }

    static int getResult(int question){
        int sum = 0;
        for (int i = 1; i <= question; i++) {
            if(i%2 == 0) {
                sum -=i;
            } else {
                sum +=i;
            }
        }
        return sum;
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
간단히 삼성 SWexpertAcademy를 이용해보았는데 깔끔하고 좋았습니다. 특히, 메모리와 실행시간 등 세세한 정보들을 비교하여 볼 수 있고, 어렵지 않게 다른 사람의 코드를 확인할 수 있어 학습하는데 큰 도움이 됩니다.

이번 과정을 통해 알게된 것은 얼마안되는 로직이었지만, String 연산과 StringBuilder 연산의 차이가 최대 6ms로 차이가 낫다는 점입니다. 다른 문제도 풀어보겠습니다.
