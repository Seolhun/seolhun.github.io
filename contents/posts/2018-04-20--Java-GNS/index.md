---
author: Seolhun
banner: "/assets/covers/java.png"
category: "Algorithm"
date: 2018-04-20
subTitle:  ""
tags: ['Algorithm', 'Java', 'Enum']
title: "[Algorithm/Java] SWexpertAcademy GNS"
---
- [SWexpertAcademy GNS](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV14jJh6ACYCFAYD)
- 난이도 3
- 정답률 53%
- String으로 된 값을 정렬하여 해당 조건에 맞는 결과룰 출력하는 문제입니다.


## 1. Question
- 숫자 체계가 우리와 다른 어느 행성이 있다. 아래는 이 행성에서 사용하는 0 ~ 9의 값을 순서대로 나타낸 것이다.
- "ZRO", "ONE", "TWO", "THR", "FOR", "FIV", "SIX", "SVN", "EGT", "NIN"
- 0 ~ 9 의 값을 나타내는 단어가 섞여 있는 문자열을 받아 작은 수부터 차례로 정렬하여 출력하는 프로그램을 작성하라.
- 예를 들어, 입력 문자열이 "TWO NIN TWO TWO FIV FOR" 일 경우 정렬한 문자열은 "TWO TWO TWO FOR FIV NIN" 이 된다.

- [입력]
  - 입력 파일의 첫 번째 줄에는 테스트 케이스의 개수가 주어진다.
  - 그 다음 줄에 #기호와 함께 테스트 케이스의 번호가 주어지고 공백문자 후 테스트 케이스의 길이가 주어진다.
  - 그 다음 줄부터 바로 테스트 케이스가 주어진다. 단어와 단어 사이는 하나의 공백으로 구분하며, 문자열의 길이 N은 100≤N≤10000이다.

- [출력]
- \#부호와 함께 테스트 케이스의 번호를 출력하고, 공백 문자 후 정렬된 문자열을 출력한다.

## 2. Code
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Solution {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int T = Integer.parseInt(br.readLine());
        for (int i = 0; i < T; i++) {
            Integer.parseInt(br.readLine().split(" ")[1]);
            String[] questions = br.readLine().split(" ");
            printResult(sb, i + 1, getResult(questions));
        }
    }

    private static String[] getResult(String[] arr) {
        int[] results = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            results[i] = Number.valueOf(arr[i]).number;
        }

        Arrays.sort(results);
        for (int i = 0; i < arr.length; i++) {
            arr[i] = Number.printValue(results[i]);
        }
        return arr;
    }

    public enum Number {
        ZRO(0),
        ONE(1),
        TWO(2),
        THR(3),
        FOR(4),
        FIV(5),
        SIX(6),
        SVN(7),
        EGT(8),
        NIN(9);

        private int number;

        Number(int n) {
            this.number = n;
        }

        public static String printValue(int number) {
            for (Number n : Number.values()) {
                if (number == n.number) {
                    return n.name();
                }
            }
            return null;
        }
    }

    static void printResult(StringBuilder sb, int index, String[] result) {
        sb.setLength(0);
        sb.append("#");
        sb.append(index);
        sb.append(" ");
        for (int i = 0; i < result.length; i++) {
            sb.append(result[i]);
            if (i != result.length - 1) {
                sb.append(" ");
            }
        }
        System.out.println(sb.toString());
    }
}

```

## 3. Outro
Map과 지역변수 등을 사용하여 여러방법으로 해결한 사람들의 코드를 보았습니다, 개인적으로도 Map을 사요하면 편리할 것으로 보이나, 그럼에도 불구하고 `Enum` class를 사용하여 문제를 해결하였습니다. Enum을 사용한 이유는 처음에 Enum으로 풀 수 있겠다는 생각도 있었으며, 해당 값은 외계에서 고정적으로 사용되어야 하기 때문에 이를 Enum 타입으로 생성하여 사용하면 더 사용성이 좋을 것으로 판단하였습니다.

하지만, Enum을 사용하면서 가장 마음에 들지 않는 코드를 작성하게 되었습니다. printValue에 해당하는 코드입니다.

```java
  public enum Number {
      ZRO(0),
      ONE(1),
      TWO(2),
      THR(3),
      FOR(4),
      FIV(5),
      SIX(6),
      SVN(7),
      EGT(8),
      NIN(9);

      private int number;

      Number(int n) {
          this.number = n;
      }

      public static String printValue(int number) {
          for (Number n : Number.values()) {
              if (number == n.number) {
                  return n.name();
              }
          }
          return null;
      }
  }
```

Enum에서 `Number.valueOf()`을 사용하면 String 값을 통해 해당 enum 값을 찾을 수 있습니다. 하지만, Property(0, 1, 2...) 값을 이용하여 해당 Enum을 Field(ZRO, ONE, TWO...) 값을 찾을 수 있는 방법을 알아내지는 못하였습니다. 그래서 해당 값을 찾을 때마다 10개나 되는 값을 비교해야되는 비효율적인 문제가 발생하였습니다. Enum에 대해 다음에 더 학습하여 정리해볼 필요가 있다고 생각하며 위와 같은 문제 해결책을 찾아서 해당 코드를 수정하여 다시 한번 제출해봐야겠습니다.

일단 이번 알고리즘은 여기서 마무리하겠습니다. 감사합니다.
