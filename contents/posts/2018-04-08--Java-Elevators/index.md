---
title: "[Algorithm/Java] Codility - Counting Elevator Movements"
author: Seolhun
date: 2018-04-08
category: "Algorithm"
tags: ['Algorithm', 'Java']
banner: "java.jpg"
---
이번에 Codility에서 Elevator로 사람을 운반하는 알고리즘을 만드는 문제입니다. Queue를 사용해야 할 것으로 보이며 Queue를 이용하여 풀어보겠습니다.


## 1. Question
<div id="brinza-task-description">
<p>People are waiting for an elevator in a hotel. The elevator has limited capacity and you would like to analyse its movement.</p>
<p>The hotel has floors numbered from 0 (ground floor) to M. The elevator has a maximum capacity of X people and a weight limit of Y. There are N people gathered at the ground floor, standing in a queue for the elevator. You are given every person's weight A[K] and target floor B[K]. (That is, A[0] and B[0] represent the first person in the queue.)</p>
<p>People continue to enter the elevator, in the order of their position in the queue (and push the buttons for their target floors), for as long as there is room for them. (The queue order cannot be changed even if there is room in the elevator for a particular person from the middle of the queue.) Then elevator goes up and stops at every selected floor, and finally returns to the ground floor. This process is repeated until there are no more people in the queue. The goal is to count the total number of times that the elevator stops.</p>
<p>For example, consider a hotel with floors numbered from 0 to M = 5, with an elevator with a maximum capacity of X = 2 people and a weight limit of Y = 200. The weights A and target floors B are:</p>
<tt style="white-space:pre-wrap">    A[0] = 60    B[0] = 2
    A[1] = 80    B[1] = 3
    A[2] = 40    B[2] = 5</tt>
<p>The elevator will take the first two passengers together, stop at the 2nd and 3rd floors, then return to the ground floor. Then, it will take the last passenger, stop at the 5th floor and return to the ground floor. In total, the elevator will stop five times. Note that this number includes the last stop at the ground floor.</p>
<p>Write a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>class Solution { public int solution(int[] A, int[] B, int M, int X, int Y); }</tt></p></blockquote>
<p>that, given zero-indexed arrays A and B consisting of N integers, and numbers X, Y and M as described above, returns the total number of times the elevator stops.</p>
<p>For example, given the above data, the function should return 5, as explained above.</p>
<p>For example, given M = 3, X = 5, Y = 200 and the following arrays:</p>
<tt style="white-space:pre-wrap">    A[0] =  40    B[0] = 3
    A[1] =  40    B[1] = 3
    A[2] = 100    B[2] = 2
    A[3] =  80    B[3] = 2
    A[4] =  20    B[4] = 3</tt>
<p>the function should return 6, as the elevator will move in two stages: with the first three people and then with the two remaining people.</p>
<p>Assume that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>N, M and X are integers within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>Y is an integer within the range [<span class="number">1</span>..<span class="number">1,000,000,000</span>];</li>
<li>each element of array A is an integer within the range [<span class="number">1</span>..<span class="number">Y</span>];</li>
<li>each element of array B is an integer within the range [<span class="number">1</span>..<span class="number">M</span>].</li>
</ul>
</blockquote><p>Complexity:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>expected worst-case time complexity is O(N*log(N)+M);</li>
<li>expected worst-case space complexity is O(N+M), beyond input storage (not counting the storage required for input arguments).</li>
</ul>
</blockquote></div>

## 2. Process
1. Waiting People Queue 만들기
2. Elevator 한계선 조건 만들기
3. Waiting People Queue에서 Elevator Queue로 이동
4. Elevator Queue에 각 층마다 돌아가고 Elevator queue가 비우면 1층으로 복귀
5. 반복하여 Waiting Queue가 없어지면 완료

## 3. Code
```java
import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;

public class TestMain {
    public static void main(String args[]) {
        TestMain t = new TestMain();
        int[] A = {60, 80, 40};
        int[] B = {2, 3, 5};
        int M = 5;
        int X = 2;
        int Y = 200;
        System.out.println(t.solution(A, B, M, X, Y));
    }

    // 모든 사람의 체중 = A [K]
    // 대상 층 = B [K]
    // 존재하는 층수 = M
    // 엘리베이터의 최대 수용 인원 : X명
    // 무게 제한 : Y
    // (즉, A [0]과 B [0]은 대기열에있는 첫 번째 사람을 나타냅니다.)
    public int solution(int[] A, int[] B, int M, int X, int Y) {
        Queue<People> waitingQueue = new LinkedList<>();
        for (int i = 0; i < A.length; i++) {
            waitingQueue.offer(new People(A[i], B[i]));
        }
        return getInElv(waitingQueue, X, Y, 0);
    }

    private int getInElv(Queue<People> queue, int X, int Y, int count) {
        int xSum = 0;
        int ySum = 0;
        int floor = 1;

        while (!queue.isEmpty()) {
            Queue<People> elevatorQueue = new LinkedList<>();
            // 엘레베이터 용량 확인
            People waitPeople = queue.poll();
            elevatorQueue.add(waitPeople);
            if (xSum + 1 <= X || ySum + waitPeople.getWeight() <= Y) {
                xSum += 1;
                ySum += waitPeople.getWeight();
            }

            while (!elevatorQueue.isEmpty()) {
                People p = elevatorQueue.poll();
                if (floor != p.getGoal()) {
                    floor = p.getGoal();
                    count++;
                }
            }
            // 1층으로 돌아가기
            if (elevatorQueue.isEmpty()) {
                count++;
                return getInElv(queue, X, Y, count);
            }
        }
        return count;
    }

    public class People {
        private int weight;
        private int goal;

        public People(int weight, int goal) {
            this.weight = weight;
            this.goal = goal;
        }

        public int getWeight() {
            return weight;
        }

        public int getGoal() {
            return goal;
        }

        @Override
        public String toString() {
            return "People{" +
                    "weight=" + weight +
                    ", goal=" + goal +
                    '}';
        }
    }
}
```

## 4. Outro
4개의 문제가 넉넉한 시간이었음에도 불구하고 풀지를 못했네요. 알고리즘 공부를 계속해서 해야겠습니다. ㅠㅠ

사진관련 데이터를 컨버팅 하는 2번 문제는 개인적으로 보관하고 있지만, Sort 부분이 더 설명이 필요할 것으로 보여집니다. 문제가 깔끔해 보이지 않았다고 개인적으로 말씀드리고 싶네요. 나중에 더 봐서 해결이 가능하면 올려보도록 하겠습니다. 그리고, String으로 나열된 데이터를 바꾸는 것이 참 번거로워서 이 부분을 좀 더 연습해야 될 것 같습니다.

이번 과정은 Queue를 통해 생산자와 소비자 패턴을 쓰듯이 풀어보았습니다. 나중에 더 개선해보겠습니다.
