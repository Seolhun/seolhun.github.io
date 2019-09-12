---
author: Seolhun
banner: "/assets/covers/java.png"
category: "Algorithm"
date: 2018-04-15
subTitle:  ""
tags: ['Algorithm', 'Java']
title: "[Algorithm/Java] SWexpertAcademy 비밀번호"
---
- [SWexpertAcademy 비밀번호](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV14_DEKAJcCFAYD)
- 난이도 3
- 정답률 71 %


## 1. Question
- 평소에 잔머리가 발달하고 게으른 철수는 비밀번호를 기억하는 것이 너무 귀찮았습니다.
- 적어서 가지고 다니고 싶지만 누가 볼까봐 걱정입니다. 한가지 생각을 해냅니다.
- 0~9로 이루어진 번호 문자열에서 같은 번호로 붙어있는 쌍들을 소거하고 남은 번호를 비밀번호로 만드는 것입니다.
- 번호 쌍이 소거되고 소거된 번호 쌍의 좌우 번호가 같은 번호이면 또 소거 할 수 있습니다.

- [입력]
  - 10개의 테스트 케이스가 10줄에 걸쳐, 한 줄에 테스트 케이스 하나씩 제공된다.
  - 각 테스트 케이스는 우선 문자열이 포함하는 문자의 총 수가 주어지고, 공백을 둔 다음 번호 문자열이 공백 없이 제공된다.
  - 문자열은 0~9로 구성되며 문자열의 길이 N은 10≤N≤100이다. 비밀번호의 길이는 문자열의 길이보다 작다.

- [출력]
  - \#부호와 함께 테스트 케이스의 번호를 출력하고, 공백 문자 후 테스트 케이스에 대한 답(비밀번호)을 출력한다.

## 2. Code
```java
import java.util.Scanner;

public class Solution {
    public static void main(String arg[]) {
        solution();
    }

    static void solution()  {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            int lenth = sc.nextInt();
            String question = sc.next();
            printResult(sb, i + 1, getResult(sb, question));
        }
        sc.close();
    }

    static String getResult(StringBuilder sb, String question){
        sb.setLength(0);
        sb.append(question);
        for(int i = 0; i < question.length() - 1; i++) {
            if(question.charAt(i) == question.charAt(i+1)) {
                sb.deleteCharAt(i+1);
                sb.deleteCharAt(i);
                return getResult(sb, sb.toString());
            }
        }
        return sb.toString();
    }

    static void printResult(StringBuilder sb, int index, String result) {
        sb.setLength(0);
        sb.append("#");
        sb.append(index);
        sb.append(" ");
        sb.append(result);
        System.out.println(sb.toString());
    }
}
{{</highlight>}}

## 3. Outro
연속된 쌍수가 있을때까지 재귀로 탐색하는 방식으로 풀었습니다. 배열을 이용하면 삭제된 곳에 최대 O(n)의 재배치 작업이 요구되기 때문에, 해당 스트링만 조작하여 문제를 해결하였습니다.
`StringBuilder.deleteCharAt`을 처음 사용하여봤습니다. 이미 문제 출력용으로 Instance를 생성했기때문에, 문제 초기만 초기화해주는 로직을 추가하고 재사용하였습니다.
