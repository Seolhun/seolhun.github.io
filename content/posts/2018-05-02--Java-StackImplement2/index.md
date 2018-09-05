---
title : "[Algorithm/Java] BAEKJOON - 스택으로 CheckBracketValidation"
author: Seolhun
date : 2018-05-02
categories: "Algorithm"
tags : ['Algorithm', 'Java']
cover: "java.jpg"
---
이번에는 중첩된 괄호가 유효한지 안한지를 체크하는 알고리즘을 풀어보겠습니다.
- [BAEKJOON Algorithm - 괄호 유효성 검사하기](https://www.acmicpc.net/problem/9012)

## Question
#### 문제
괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다.

여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다.

#### 입력
입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다.

#### 출력
출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다.

#### 예제입력
```
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
```

#### 예제출력
```
NO
NO
YES
NO
YES
NO
```

## Code
#### 1. Stack 이용해서 풀기
```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/9012
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

/*
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
 */
public class Main {
    // Testcase
    static int T;
    static Stack<Character> stack;

    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        T = Integer.parseInt(bf.readLine());
        for (int i = 0; i < T; i++) {
            String Q = bf.readLine();
            stack = new Stack<>();
            System.out.println(solve(Q, stack));
        }
    }

    static String solve(String Q, Stack<Character> stack) {
        for (int i = 0; i < Q.length(); i++) {
            char q = Q.charAt(i);
            if (q == '(') {
                stack.add(q);
            } else {
                if (stack.isEmpty()) {
                    return "NO";
                } else {
                    stack.pop();
                }
            }
        }
        return stack.isEmpty() ? "YES" : "NO";
    }
}
```

#### 2. String 이용해서 풀기
```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/9012
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
 */
public class Main {
    // Testcase
    static int T;

    public static void main(String args[]) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        T = Integer.parseInt(bf.readLine());
        for (int i = 0; i < T; i++) {
            String Q = bf.readLine();
            System.out.println(solve(Q));
        }
    }

    static String solve(String q) {
        if (q.contains("()")) {
            q = q.replace("()", "");
            return solve(q);
        }
        return q.length() > 0 ? "NO" : "YES";
    }
}
```

## Outro
Stack에 해당되는 문제로서 간단하게 스택을 이용해서 풀어보았습니다. String을 이용해서도 풀수 있을 것으로 판단되어 2개의 코드를 같이 넣어봤습니다.

먼저, 스택을 이용하는 방법은, 먼저, `괄호가 열리면 무조건 닫혀야하기 때문에 해당 조건을 이용하여 문제를 해결`했습니다. 열린 것이 없거나(isEmptry()), 열린 것만 존재했을 경우 NO를 출력하게 만들었습니다.

String방법은 재귀호출을 이용하여 ()를 계속 제거하는 방법을 선택하였습니다. 아마 시간복잡도로는 Stack을 이용하는 것이 더 빠를 것입니다. 정답인 경우 모든 괄호를 확인해야 되기때문에 O(N)의 복잡도로 예상됩니다. 각각의 루프문을 확인하면서 유효성을 검사할 수 있기 때문입니다.

String은 contain() 메소드를 이용하면 Search(Log N) 검색이 들어가며 replace()의 경우에도 문자 길이만큼 반복(N)하며, 재귀호출의 복잡도도 추가해줘야합니다. 이미 replace에서 O(N)의 복잡도가 사용되므로 Stack보다 더 복잡할 것으로 예상합니다.
