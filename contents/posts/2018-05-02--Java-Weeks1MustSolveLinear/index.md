---
title: "[Algorithm] 알고리즘 문제 해결전략 - 무식하게 풀기 - Weeks 1"
author: Seolhun
date: 2018-05-02
category: "Algorithm"
tags: ['Algorithm', 'Reculsive', 'Exhaustive', 'Linear']
banner: "java.jpg"
---
알고리즘 문제해결 전략을 정리하면서 간단한 문제도 함께 풀어보고자 합니다. 이번에는 알고리즘 문제해결 전략의 142 ~ 172 Page 에 해당되며, 필요한 부분을 정리하고 관련된 문제를 코드와 함께 공유해보고자 합니다.

## Into

알고리즘 문제 해결 전략의 첫 도입이며, 시간복잡도 계산과 관련된 내용은 좋은 글들이 많고, 책에서 더 자세히 설명해있어서 넘어가고, 3 번 알고리즘 설계 패러다임부터 정리하는 것이 더 좋을것으로 판단하였습니다. 그리고, 알고리즘이라는 것이 꾸준히 하지 않으면 어렵고, 처음이 특히, 더 어렵기 때문에 가장 손쉽게 들어갈 수 있는 부분을 선택했습니다. 간단하게 정리하겠습니다.

#### 03. 알고리즘 설계 패러다임

- 무식하게 풀기
  - 도입
  - 재귀호출과 완전탐색
  - 문제: 소풍(Picnic, 난이도 : 하) 맟 풀이
  - 문제: 게임판 덮기(BoardCover, 난이도 : 하) 맟 풀이
  - 최적화 문제
  - 문제: 시계 맞추기(ClockSync, 난이도 : 중) 맟 풀이
  - 많이 등장하는 완전 탐색 유형

## 1. 도입

완전 탐색(Exhaustive Search)이란? 모든 경우의 수를 만들어보는 알고리즘입니다. 컴퓨터의 자원을 잘 활용한 가장 손 쉬운 방법이라고 말할 수 있습니다.

## 2. 재귀호출과 완전탐색

재귀함수(Recursive Function) 혹은 재귀호출(Recursion)은 반복되야 하는 작업을 나눌 수 있는 조각으로 쪼갠뒤에 한 조각을 수행하고, 나머지를 자기 자신을 호출해 점진적으로 실행하는 함수를 가리킵니다.

반복문을 재귀호출로 바꿔보는 것이 가장 좋은 예입니다. 간단하게 만들어보겠습니다.

```java
class Solution {
  static int sum(int n) {
    int result = 0;
    for (int i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }

  public static int recursiveSum(int n) {
    if(n == 1) {
      return 1;
    }
    return n + recursiveSum(n -1);
  }
}
```

위처럼 재귀호출은 포문을 대체할 수 있습니다. 또한, 추가적인 로직을 통해서 훨씬 더 간단하고 효율적으로 로직을 구성할 수 있습니다.

## 3. 문제: 소풍(Picnic, 난이도 : 하) 맟 풀이

서로 친구인 학생들끼리만 짝을 지어주는 방법을 모두 구하시오. 예를 들어, (1, 3), (3, 1)은 같은 짝으로 판단합니다.

- 첫 줄에 테스트케이스 개수 T
- 다음 줄에는 인원 수 N 과 짝으로 맺을 수 있는 쌍 수 M
- 다음 줄에는 친구배열 0 1 1 2 2 3 3 0 0 2 1 3
  - [0, 1], [1, 2], [2, 3] ... 순으로 친구에 해당함.

##### 입력

```
3
2 1
0 1
4 6
0 1 1 2 2 3 3 0 0 2 1 3
6 10
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5
```

##### 출력

```
1
3
4
```

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
    static int n;
    static int m;
    static boolean[][] areFriends;
    static boolean[] taken;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int T = Integer.parseInt(bf.readLine());
        for (int i = 1; i <= T; i++) {
            String N = bf.readLine();
            // 인원 수
            n = Integer.parseInt(N.split(" ")[0]);
            // 친구 쌍 수
            m = Integer.parseInt(N.split(" ")[1]);
            areFriends = new boolean[n][n];

            String[] F = bf.readLine().split(" ");
            // 친구 인지, 아닌지 확인하는 로직
            for (int j = 0; j < m * 2; j = j + 2) {
                int a = Integer.parseInt(F[j]);
                int b = Integer.parseInt(F[j + 1]);
                areFriends[a][b] = true;
                areFriends[b][a] = true;
            }
            // 짝으로 설정되었는지 안되었는지 확인하는 곳
            taken = new boolean[n];
            printResult(sb, i, countPairngs(taken));
        }
        bf.close();
    }

    static int countPairngs(boolean[] taken) {
        int firstFree = -1;
        for (int i = 0; i < n; i++) {
            if (!taken[i]) {
                firstFree = i;
                break;
            }
        }

        // 기저 사례 : 모든 학생이 짝을 찾았으면 한 가지 방법을 찾았으니 종료한다.
        if (firstFree == -1) {
            return 1;
        }

        int result = 0;
        // firstFree의 해당하는 친구 짝 구하는 로직
        for (int pair = firstFree + 1; pair < n; pair++) {
            // 친구로 정해져있지 않고, 친구이면 해당 조건문을 통과한다.
            if (!taken[pair] && areFriends[firstFree][pair]) {
                taken[firstFree] = taken[pair] = true;
                result += countPairngs(taken);
                // 짝을 맺은 뒤 다음 친구에서 다시 짝을 맺을 경우의 수를 구하기 위해 false로 변경함.
                taken[firstFree] = taken[pair] = false;
            }
        }
        return result;
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

위의 알고리즘에서 가장 중요한 것은 중복을 제거하는 것입니다. (1, 3)이나 (3, 1)은 결국 같다고 봐야합니다. 즉, 앞의 작은 수를 기준으로 큰 수를 짝으로 지어나가면 중복 없이 이를 해결해나갈 수 있다고 얘기합니다. 그러므로, 가장 큰 시간복잡도를 구하는 방법은 10(10 개로 한정)개의 친구가 모두 짝으로 선정할 수 있는 경우이며 이를 9 _ 7 _ 5 _ 3 _ 1 = 945 라고 얘기하는 것입니다. 9 부터 곱하는 이유는 자기 자신에서 9 개의 경우의 수가 나오기 때문입니다.

책에 알고리즘 내용은 설명만을 위한 것이지 구현하여 테스트해보면 결과가 나오지 않습니다. C 언어를 잘 몰라 C 언어와 자바의 차이점인가도 싶었지만, 중요한 부분은 초기 값을 설정해주는 부분이 생략되어있는 것으로 판단됩니다.
책에서는 areFriends 라는 변수를 선언하고 해당 값의 어떠한 값도 설정도 사용되지 않았으며, 문제의 최대 변수인 10 이라는 변수를 사용함으로써 독자들을 오해시키는 부분이 있습니다. 정독과 테스트를하면 이정도는 쉽게 찾을 수 있었지만, 이러한 부분을 놓친다면 예제를 이해하는데 큰 어려움이 있을 것이라고 생각합니다.

## 문제: 게임판 덮기(BoardCover, 난이도 : 하) 맟 풀이

3 개의 칸을 차지하는 블록을 이용하여 주어진 게임판을 전부 덮는 경우의 수를 모두 구하시오.

- 첫 줄에 테스트케이스 개수 T
- 다음 줄에는 H(높이), W(넓이)가 주어집니다.
- 다음 줄에는 W 만큼의 게임 판 값이 H 개 주어집니다.
  - \#검은 칸, \.는 흰 칸을 나타냅니다.

##### 입력

```
3
3 7
#.....#
#.....#
##...##
3 7
#.....#
#.....#
##..###
8 10
##########
#........#
#........#
#........#
#........#
#........#
#........#
##########
```

##### 출력

```
0
2
1514
```

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
    static int T;
    static int H;
    static int W;
    static int[][] boardMap;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        T = Integer.parseInt(bf.readLine());
        for (int i = 1; i <= T; i++) {
            String N = bf.readLine();
            // 게임 판 높이
            H = Integer.parseInt(N.split(" ")[0]);
            // 게임 판 넓이
            W = Integer.parseInt(N.split(" ")[1]);

            // boardMap[y][x] = # = 1 이미 덮인 칸 혹은 검은 칸
            // boardMap[y][x] = . = 0 아직 덮이지 않은 칸
            boardMap = new int[H][W];
            for (int j = 0; j < boardMap.length; j++) {
                String width = bf.readLine();
                for (int k = 0; k < boardMap[j].length; k++) {
                    int v = 1;
                    if (width.charAt(k) == '.') {
                        v = 0;
                    }
                    boardMap[j][k] = v;
                }
            }
            printResult(sb, i, cover(boardMap));
        }
        bf.close();
    }

    // delta 값을 통해 채우기/치우기 둘 다 가능하게 만든다.
    static boolean set(int[][] boardMap, int y, int x, int type, int delta) {
        boolean result = true;
        for (int i = 0; i < coverType[0].length; i++) {
            int ny = y + coverType[type][i][0];
            int nx = x + coverType[type][i][1];
            if (ny < 0 || ny >= boardMap.length || nx < 0 || nx >= boardMap[0].length) {
                result = false;
            } else if ((boardMap[ny][nx] += delta) > 1) {
                result = false;
            }
        }
        return result;
    }

    static int cover(int[][] boardMap) {
        // 아직 채우지 못한 칸 중 가장 윗줄 왼쪽에 있는 칸을 찾는다.
        int y = -1, x = -1;
        for (int i = 0; i < boardMap.length; i++) {
            for (int j = 0; j < boardMap[i].length; j++) {
                if (boardMap[i][j] == 0) {
                    y = i;
                    x = j;
                    break;
                }
            }
            if (y != -1) {
                break;
            }
        }

        // 기저 사례 : 모든 칸을 채웠으면 1을 반환한다.
        if (y == -1) {
            return 1;
        }

        int result = 0;
        for (int type = 0; type < coverType.length; type++) {
            // 만약 board[y][x]를 type 형태로 덮을 수 있으면 재귀 호출한다.
            if (set(boardMap, y, x, type, 1)) {
                result += cover(boardMap);
            }
            // 덮었던 블록을 치운다.
            set(boardMap, y, x, type, -1);
        }

        return result;
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

이번 문제도 중요한 것은, 순서를 강제하는 것입니다. 위에 소풍 문제에서는 짝을 지어줄 때 앞의 작은 수를 강제하여 중복이 나타나지 않게 하였습니다. 이번에도 게임 판을 덮을 때 3 개의 칸의 퍼즐에 기준점을 두고 중복을 제거하였습니다. 첫 번재의 출력 값이 0 인 이유는, 3 게의 칸으로 된 퍼즐로 13 개의 칸을 모두 채울 수 없기 때문입니다.

이번 로직에서 이해해야 될 부분은 cover()의 중간 부분입니다. 덮었던 것을 다시 치우는데, 덮을 수 있는지 없는지를 확인 한 후 덮을 수 있다면, 하나씩 덮으면서 개수만 파악하면 되기 때문입니다. 덮었던 것을 치우기 때문에, 해당 조건하에서 1 개의 변수로 모든 경우의 수를 확인할 수 있는 것입니다.

## 최적화 문제

알고리즘에서 최적화(Optimization) 문제란, 가장 좋은 답을 찾는 것이지만 복잡한 문제일수록 한번의 최적화하는 답을 찾기란 쉽지 않습니다. 그래서, 가장 손쉽게 접근할 수 있는 방법은 완전 탐색을 통해서 가능한 답을 모두 생성하고 가장 좋은 것만 찾아내는 로직으로 변경하는 것입니다.

간단한 예제로는, 여행하는 외판원 문제가 있습니다. 시간안에 돌아와야하기 때문에, 완전탐색으로 가능한 수를 찾은 뒤 해당 도시의 순서만 정해주는 로직을 추가하면 해당 문제를 쉽게 풀 수 있습니다. 해당 문제는 나중에 한번 풀어보겠습니다.

## 문제: 시계 맞추기(ClockSync, 난이도 : 중) 맟 풀이

4 \* 4 개의 격자 형태로 배치된 열여섯 개의 시계가 있습니다. 각 시계들은 12 시 3 시 6 시 9 시를 가리키고 있는데, 모든 시계를 12 시를 가리키도록 바꾸고 싶습니다.

스위치를 누르면 연결된 시계들은 3 시간씩 앞으로 움직입니다. 스위치와 연결된 시계는 아래와 같습니다. 스위치와 시계는 최소 3 개, 최대 5 개 연결됩니다.

<table class="table table-dark text-center">
  <tr>
    <th>
      스위치 번호
    </th>
    <th>
      연결된 시계들
    </th>
    <th>
      스위치 번호
    </th>
    <th>
      연결된 시계들
    </th>
  </tr>
  <tr>
    <td>
      0
    </td>
    <td>
      0, 1, 2
    </td>
    <td>
      5
    </td>
    <td>
      0, 2, 14, 15
    </td>
  </tr>
  <tr>
    <td>
      1
    </td>
    <td>
      3, 7, 9, 11
    </td>
    <td>
      6
    </td>
    <td>
      3, 14, 15
    </td>
  </tr>
  <tr>
    <td>
      2
    </td>
    <td>
      4, 10, 14, 15
    </td>
    <td>
      7
    </td>
    <td>
      4, 5, 7, 14, 15
    </td>
  </tr>
  <tr>
    <td>
      3
    </td>
    <td>
      0, 4, 5, 6, 7
    </td>
    <td>
      8
    </td>
    <td>
      1, 2, 3, 4, 5
    </td>
  </tr>
  <tr>
    <td>
      4
    </td>
    <td>
      6, 7, 8, 10, 12
    </td>
    <td>
      9
    </td>
    <td>
      3, 4, 5, 9, 13
    </td>
  </tr>
</table>

- 첫 줄에는 테스트케이스 갯수가 주어집니다.
- 다음 줄에는 16 개의 숫자가 가르치는 시계방향이 주어집니다.

##### 입력

```
2
12 6 6 6 6 6 12 12 12 12 12 12 12 12 12 12
12 9 3 12 6 6 9 3 12 9 12 9 12 12 6 6
```

##### 출력

- 2
- 9

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Solution {
    static int T;
    static final int INF = 9999;
    static final int SWITCHES = 10;
    static final int CLOCK = 16;

    // 현재 시계들의 상태
    static int[] clocks = new int[CLOCK];
    // 스위치와 연결된 시계상태
    static boolean[][] linked = {
            {true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false},
            {false, false, false, true, false, false, false, true, false, true, false, true, false, false, false, false},
            {false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, true},
            {true, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false},
            {false, false, false, false, false, false, true, true, true, false, true, true, false, false, false, false},
            {true, false, true, false, false, false, false, false, false, false, false, false, false, false, true, true},
            {false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, true},
            {false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, true},
            {false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false},
            {false, false, false, true, true, true, false, false, false, true, false, false, false, true, false, false},
    };

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        T = Integer.parseInt(bf.readLine());
        for (int i = 1; i <= T; i++) {
            String[] N = bf.readLine().split(" ");
            for (int j = 0; j < N.length; j++) {
                clocks[j] = Integer.parseInt(N[j]);
            }
            // 게임 판 높이
            printResult(sb, i, getResult(clocks, 0));
        }
        bf.close();
    }

    static boolean areSynced() {
        for (int clock : clocks) {
            if (clock != 12) {
                return false;
            }
        }
        return true;
    }

    static void passTime(int[] clocks, int swtch) {
        for (int clock = 0; clock < CLOCK; clock++) {
            if (linked[swtch][clock]) {
                clocks[clock] += 3;
                if (clocks[clock] == 15) {
                    clocks[clock] = 3;
                }
            }
        }
    }

    static int getResult(int[] clocks, int swtch) {
        if (swtch == SWITCHES) {
            return areSynced() ? 0 : INF;
        }
        int result = INF;
        for (int cnt = 0; cnt < 4; cnt++) {
            result = Math.min(result, cnt + getResult(clocks, swtch + 1));
            passTime(clocks, swtch);
        }
        return result;
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

위 문제에서 중요한 것은 getResult() 메소드를 재귀호출하는 것입니다. +1 씩 재귀호출 함으로써 최대 SWITCHES(10)에 도달할때까지 위 함수는 모든 시계가 12 시를 가르칠때까지 모든 버튼을 최대 4 번씩 누르게 됩니다.

위의 방법은 책 내용에서도 얘기하듯이 스위치를 누르는 순서를 바꾼다고 해서 그 결과가 바뀌지 않으며, 4 번을 누르면 모든 시계가 다시 원래 가르치는 방향으로 돌아옵니다. 즉, 10 개의 시계를 4 번씩 누루는 최대 경우의 수는 4^10 = 1,048,576 개가 됩니다. 열개의 스위치를 최대 4 번씩 모두 누르는 경우의 수를 구하는 방법(완전탐색)으로 문제를 해결할 수 있습니다.

## 많이 등장하는 완전 탐색 유형

- 모든 순열 만들기
- 모든 조합 만들기
- 2^n 가지 경우의 수 만들기
- ...

## References

- 알고리즘 문제 해결전략
