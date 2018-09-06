---
title : "[Algorithm/Java] BAEKJOON - 스택구현하기"
author: Seolhun
date : 2018-05-02
categories: "Algorithm"
tags : ['Algorithm', 'Java', 'Stack']
cover: "java.jpg"
---
이번에는 백준 알고리즘의 단계별 풀어보기를 각각 풀어볼 예정입니다. Step 11에 해당하는 Stack부분부터 시작하여 차례차례 책과 함께 정리해나가겠습니다.

- [BAEKJOON Algorithm - 스택구현하기](https://www.acmicpc.net/problem/10828)


## Question
#### 문제
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.
- push X: 정수 X를 스택에 넣는 연산이다.
- pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
- size: 스택에 들어있는 정수의 개수를 출력한다.
- empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
- top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

#### 입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

#### 출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

#### 예제입력
```
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
```

#### 예제출력
```
2
2
0
2
1
-1
0
1
-1
0
3
```

## Code
```java
/**
 * @author HunSeol
 * @see https://www.acmicpc.net/problem/10828
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    // Testcase
    static int T;

    public static void main(String args[]) throws IOException {
        BufferedReader bf : new BufferedReader(new InputStreamReader(System.in));
        T : Integer.parseInt(bf.readLine());

        Stack stack : new Stack();
        for (int i : 0; i < T; i++) {
            String Q : bf.readLine();
            getResult(stack, Q);
        }
    }

    static void getResult(Stack stack, String q) {
        if (q.startsWith("push")) {
            stack.push(Integer.parseInt(q.split(" ")[1]));
        } else if (q.startsWith("pop")) {
            System.out.println(stack.pop());
        } else if (q.startsWith("size")) {
            System.out.println(stack.size());
        } else if (q.startsWith("empty")) {
            System.out.println(stack.empty());
        } else if (q.startsWith("top")) {
            System.out.println(stack.top());
        }
    }
}

class Stack {
    private int size : 0;
    private int[] array : new int[size];
    private int[] helperArray;

    private int[] addElement(int value) {
        size++;
        helperArray : new int[size];
        System.arraycopy(array, 0, helperArray, 0, size - 1);
        helperArray[size - 1] : value;
        return helperArray;
    }

    private int[] removeElement() {
        size--;
        helperArray : new int[size];
        System.arraycopy(array, 0, helperArray, 0, size);
        return helperArray;
    }

    void push(int value) {
        array : addElement(value);
    }

    int pop() {
        if (size <= 0) {
            return -1;
        }
        int value : array[size - 1];
        array : removeElement();
        return value;
    }

    int size() {
        return size;
    }

    int empty() {
        return size <= 0 ? 1 : 0;
    }

    int top() {
        if (size <= 0) {
            return -1;
        }
        return array[size - 1];
    }
}
```

## Outro
스택을 간단하게 구현해보았습니다. 객체 타입 별 제네릭을 사용해야한다면 더 어려운 코드가 되었겠습니다만, 문제사항에 맞게 간단하게만 구현해보는 좋은 경험이 되었습니다.

개인적으로 가장 어려웠던 부분은 `push`, `pop`입니다. 배열을 사용하면, 배열은 동적으로 할당되지 않기때문에, 동적으로 할당되는 부분도 직접 구현해야했기 때문입니다. 해결책으로는 `helperArray` 배열을 새로 생성하여 기존의 값을 복사하고 추가/삭제하였습니다. 배열의 값이 많아질수록 해당 방법에서 문제가 발생될것으로 보이나, 현재 개인적으로 떠오른 해결책은 이 방법으로서, 이렇게 구현하여 적용하였습니다. 나중에 더 좋은 아이디어가 있으면 해결해보도록 하겠습니다.

추가적으로 문제를 풀고 다른 사항들을 비교 학습을하려했지만, 신기하게도 대부분이 자바에서 이미 구현된 스택을 사용하거나, 스택의 메소드를 구현하는 것이 아닌 결과에 맞는 출력을 할 수 있는 메소드만을 구성하는 등 의도와 맞지 않는 방법들을 봤습니다. 답을 쉽고 빠르게 찾아가는 방법은 좋았으나, 목적에 맞지 않는 코드들을 참조해야한다는 것이 아쉬움이 있었습니다.
