---
title: [Algorithm/Java] SWexpertAcademy BeginnersCrossSameVoca
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2018-04-10
weight: 1
categories: ['Algorithm', 'Java']
categories_weight: 10
tags: ['Algorithm', 'Java']
tags_weight: 10
---
- [SWexpertAcademy 초심자의 회문검사](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PyTLqAf4DFAUq&categoryId=AV5PyTLqAf4DFAUq&categoryType=CODE)
- 난이도 : 2
- 정답률 : 81%


## 1. Question
level" 과 같이 거꾸로 읽어도 제대로 읽은 것과 같은 문장이나 낱말을 회문(回文, palindrome)이라 한다. 단어를 입력 받아 회문이면 1을 출력하고, 아니라면 0을 출력하는 프로그램을 작성하라.

- [제약 사항]
  - 각 단어의 길이는 3 이상 10 이하이다.

- [입력]
  - 가장 첫 줄에는 테스트 케이스의 개수 T가 주어지고, 그 아래로 각 테스트 케이스가 주어진다. 각 테스트 케이스의 첫 번째 줄에 하나의 단어가 주어진다.

- [출력]
  - 출력의 각 줄은 '#t'로 시작하고, 공백을 한 칸 둔 다음 정답을 출력한다. (t는 테스트 케이스의 번호를 의미하며 1부터 시작한다.)

## 2. Process
1. T라는 테스트케이스 만큼 루프문을 만듭니다.
2. 문제를 미리 배열에 담아둡니다.
3. 뒤집어도 같음을 의미하기때문에 StringBuilder를 이용해서 reverse() 해줍니다.
4. 같으면 1, 다르면 0으로 출력합니다.

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
            String voca = sc.next();
            printResult(sb, i + 1, getResult(voca));
        }
    }

    static int getResult(String voca) {
        if (voca.equals(new StringBuilder(voca).reverse().toString())) {
            return 1;
        }
        return 0;
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
printResult나 getResult로 만들어서 푸는 이유는 Samsung SWexpersAcademy 결과 값 포맷이 고정적으로 정해져있어서 이를 효율적으로 분리하여 만들기 위함입니다. getResult로 받는 것은 문제 값을 받는 부분과 풀이가 분리되어야 한다고 생각하기 때문입니다. 특히, 재귀가 필요할 시 해당 메소드만 재귀해야 되기때문에 확장성을 고려하여 이렇게 정의하였습니다.

다음에는 난이도를 3으로 올려보겠습니다.
