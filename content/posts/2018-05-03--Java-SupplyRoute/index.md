---
title: "[Algorithm/Java] SWexpertAcademy 보급로(SupplyRoute)"
author: Seolhun
date: 2018-05-03
category: "Algorithm"
tags: ['Algorithm', 'Java']
cover: "java.jpg"
---
- [SWexpertAcademy SupplyRoute](https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15QRX6APsCFAYD&categoryId=AV15QRX6APsCFAYD&categoryType=CODE)
- 난이도 4
- 정답률 70%


## 1. Question
문제에 그림이 많으므로 위에 해당 사이트를 참고하시는게 더 좋을 것으로 판단합니다. 간단한 입력값과 출력값만 정리하겠습니다.

- [입력]
  - 가장 첫 줄은 전체 테스트케이스의 수이다.
  - 각 테스트 케이스마다 지도의 크기(N x N)가 주어진다. 지도의 크기는 최대 100 x 100이다.
  - 그 다음줄 부터 지도의 크기만큼 2차원 배열 형태의 지도 정보가 주어진다.

- [출력]
  - 각 테스트 케이스의 답을 순서대로 출력하며, 각 케이스마다 줄의 시작에 “#C”를 출력하여야 한다.
  - 이때 C는 케이스의 번호이다.
  - 같은 줄에 빈 칸을 하나 두고, 주어진 입력에서 출발지에서 도착지까지 가는 경로 중에 복구 작업에 드는 시간이 가장 작은 경로의 복구 시간을 출력하시오.

## 2. Code
```java
/**
 * @author HunSeol
 * @see https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV15QRX6APsCFAYD
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    static int T;
    static int N;
    static String V;
    static int map[][];
    static int times[][];

    static Graph start;
    static Graph goal;

    //상 우 하 좌
    static final int[] DY = {-1, 0, 1, 0};
    static final int[] DX = {0, 1, 0, -1};

    static Queue<Graph> queue;

    static class Graph {
        int x;
        int y;

        Graph(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        T = Integer.parseInt(bf.readLine());
        for (int t = 1; t <= T; t++) {
            N = Integer.parseInt(bf.readLine());
            map = new int[N][N];
            times = new int[N][N];
            for (int j = 0; j < map.length; j++) {
                V = bf.readLine();
                for (int k = 0; k < map[j].length; k++) {
                    map[j][k] = V.charAt(k) - 48;
                    times[j][k] = 9999;
                }
            }

            // Basic Setting
            start = new Graph(0, 0);
            times[0][0] = 0;

            goal = new Graph(N - 1, N - 1);
            // Queue Setting
            queue = new LinkedList<>();
            queue.add(start);
            while (!queue.isEmpty()) {
                Graph graph = queue.remove();
                int x = graph.x;
                int y = graph.y;
                for (int i = 0; i < DX.length; i++) {
                    int moveX = x + DX[i];
                    int moveY = y + DY[i];
                    if (moveX < 0 || moveX >= N || moveY < 0 || moveY >= N) {
                        continue;
                    }
                    if (times[y][x] + map[moveY][moveX] < times[moveY][moveX]) {
                        times[moveY][moveX] = times[y][x] + map[moveY][moveX];
                        queue.add(new Graph(moveX, moveY));
                    }
                }
            }
            printResult(sb, t, times[N - 1][N - 1]);
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
}
```

## 3. Outro
좀 여러번의 착오끝에 문제를 해결할 수 있었습니다.

1. 착오는 이동에 대해서 강제성을 두었는데, 어차피 시간제한이 아니라 길을 만드는 시간만 중요하므로, 낮은 숫자를 돌아서 갈 수 있음을 놓쳤습니다.
2. 해당 거리간의 최소거리를 계산하면 쉽게 풀것을 완전탐색을 통해 하나하나 값을 가지고 전체 값을 비교하여 출력하였습니다.

위와 같은 해결방법을 찾지 않으면 정답을 쉽게 찾을 수 있습니다. 각각의 거리에서 최소거리의 합을 구하면서 나아가면 쉽게 문제를 해결해 나갈 수 있습니다. 중요한 포인트는 기존에 계산된 거리를 이동할 때, 기존 값보다 작을때만 이동하여 해당 경우의 수를 줄여나가는 것입니다. 코드로는 `if (times[y][x] + map[moveY][moveX] < times[moveY][moveX])` 여기에 해당합니다.
이상 문제를 마치겠습니다.
