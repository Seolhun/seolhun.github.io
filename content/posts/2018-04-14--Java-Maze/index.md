---
title: "[Algorithm/Java] SWexpertAcademy 미로 Part 1"
author: Seolhun
date: 2018-04-14
category: "Algorithm"
tags: ['Algorithm', 'Java']
cover: "java.jpg"
---
- [SWexpertAcademy 미로 Part 1](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV14vXUqAGMCFAYD&categoryId=AV14vXUqAGMCFAYD&categoryType=CODE)
- 난이도 : 4
- 정답률 : 78%


## 1. Question
- [입력]
  - 각 테스트 케이스의 첫 번째 줄에는 테스트 케이스의 번호가 주어지며, 바로 다음 줄에 테스트 케이스가 주어진다.
  - 총 10개의 테스트케이스가 주어진다.
  - 테스트 케이스에서 1은 벽을 나타내며 0은 길, 2는 출발점, 3은 도착점을 나타낸다.

- [출력]
  - \#부호와 함께 테스트 케이스의 번호를 출력하고, 공백 문자 후 도달 가능 여부를 1 또는 0으로 표시한다 (1 - 가능함, 0 - 가능하지 않음).

## 2. Code
```java
package com.algorithm.samsung.Maze1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    // 최대 미로 사이즈
    static final int n = 16;
    // 위 우 아래 좌
    static final int dx[] = {0, 1, 0, -1};
    static final int dy[] = {1, 0, -1, 0};
    // Map 그리기
    static int map[][];
    // 방문한 주소 값
    static boolean visit[][];
    static boolean finish;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int testcase = 10;
        Queue<Graph> queue;
        for (int t = 1; t <= testcase; t++) {
            int k = Integer.parseInt(bf.readLine());
            map = new int[n][n];
            visit = new boolean[n][n];
            queue = new LinkedList<>();
            finish = false;

            for (int i = 0; i < n; i++) {
                // 지도 값 받기
                String str = bf.readLine();
                for (int j = 0; j < n; j++) {
                     map[i][j] = str.charAt(j) - 48;
                     // 시작점
                    if (map[i][j] == 2) {
                        visit[i][j] = true;
                        queue.offer(new Graph(i, j));
                        break;
                    }
                }
            }

            while (!queue.isEmpty()) {
                // Queue에 방문한 곳 담기.
                Graph graph = queue.poll();
                if (map[graph.x][graph.y] == 3) {
                    finish = true;
                    break;
                }
                // 방향 값 가능여부 파악 및 x,y값을 이용하여 1칸씩 이동하기.
                for (int i = 0; i < 4; i++) {
                    int x = graph.x + dx[i];
                    int y = graph.y + dy[i];
                    if (x >= 0 && y >= 0 && x < n && y < n && map[x][y] != 1) {
                        if (!visit[x][y]) {
                            visit[x][y] = true;
                            queue.offer(new Graph(x, y));
                        }
                    }
                }
            }
            if (finish) {
                printResult(sb, t, 1);
            } else {
                printResult(sb, t, 0);
            }
        }
        bf.close();
    }

    static void printResult(StringBuilder sb, int index, int result) {
        sb.setLength(0);
        sb.append("#");
        sb.append(index);
        sb.append(" ");
        sb.append(result);
        System.out.println(sb.toString());
    }

    static class Graph {
        int x, y;
        Graph(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
}
```

## 3. Outro
제가 생각하는 2차원 배열을 이용한 그래프 탐색에서 중요한 부분 코드는 이 부분입니다.

#### 1. 방향, 맵, 방문한 곳 변수가 반드시 필요합니다.
```java
    // 위 우 아래 좌
    static final int dx[] = {0, 1, 0, -1};
    static final int dy[] = {1, 0, -1, 0};
    // Map 그리기
    static int map[][];
    // 방문한 주소 값
    static boolean visit[][];
```

---
#### 2. dx[], dy[]를 이용하여 1칸씩 이동하여 가능한 곳 방문하기.
```java
    // 방향 값 가능여부 파악 및 x,y값을 이용하여 1칸씩 이동하기.
    for (int i = 0; i < 4; i++) {
        int x = graph.x + dx[i];
        int y = graph.y + dy[i];
        if (x >= 0 && y >= 0 && x < n && y < n && map[x][y] != 1) {
            if (!visit[x][y]) {
                visit[x][y] = true;
                queue.offer(new Graph(x, y));
            }
        }
    }
```

이 문제의 핵심은, 가장 빠르게 도달하는 최단거리를 구하는 문제가 아니라, 도착지점과 연결이 되어있는지 안되어있는지를 파악하는 문제입니다.
각 지점에서 차례대로 확인하면서 나아가면, 어렵지 않게 문제를 해결할 수 있습니다.

SWexpertAcademy에 미로2번 문제도 있지만, 맵의 크기를 제외하고는 문제 풀이가 같습니다. n 값을 16에서 100으로 바꿔주면 됩니다.
그래프 탐색관련하여 더 문제를 풀어보겠습니다.
