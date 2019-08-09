---
title: "[Algorithm/Java] Codility - FindSteps Algorithm"
author: Seolhun
date: 2018-04-08
category: "Algorithm"
tags: ['Algorithm', 'Java']
banner: "java.jpg"
---
이번에 Codility에서 알고리즘을 풀게 될 기회를 얻었지만 너무나 많이 못풀었습니다. 아쉽고 슬프지만 앞으로도 계속 풀어나가고 연습하면 더 나아질거라고 생각합니다.
또한, Javascript로만 풀었는데, Java로 풀어야하는 상황이라서 익숙치가 않은 것도 있었네요. Java로도 가끔씩 풀어보면서 연습해야 할 것 같습니다.
이 문제를 포함하여 앞으로 2개 더 풀어나가겠습니다.


## 1. Question
<div class="task-description-content">
<div id="brinza-task-description">
<p>A non-negative integer variable V is given. There are two actions available that modify its value:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>if V is odd, subtract 1 from it;</li>
<li>if V is even, divide it by 2.</li>
</ul>
</blockquote><p>These actions are performed until the value of V becomes 0.</p>
<p>For example, if V initially contains value 28, it will become 0 after seven steps:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>V contains value 28, which is even: divide by 2 and obtain 14;</li>
<li>V contains value 14, which is even: divide by 2 and obtain 7;</li>
<li>V contains value 7, which is odd: subtract 1 and obtain 6;</li>
<li>V contains value 6, which is even: divide by 2 and obtain 3;</li>
<li>V contains value 3, which is odd: subtract 1 and obtain 2;</li>
<li>V contains value 2, which is even: divide by 2 and obtain 1;</li>
<li>V contains value 1, which is odd: subtract 1 and obtain 0.</li>
</ul>
</blockquote><p>Write a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>class Solution { public int solution(String S); }</tt></p></blockquote>
<p>that, given a zero-indexed string S consisting of N characters containing a binary representation of the initial value of variable V, returns the number of steps after which the value of V will become 0, as described above.</p>
<p>Assume that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>N is an integer within the range [<span class="number">1</span>..<span class="number">1,000,000</span>];</li>
<li>string S consists only of the characters "<tt style="white-space:pre-wrap">0</tt>" and/or "<tt style="white-space:pre-wrap">1</tt>";</li>
<li>the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit;</li>
<li>the binary representation may contain leading zeros.</li>
</ul>
</blockquote><p>For example, given string S = "<tt style="white-space:pre-wrap">011100</tt>" the function should return 7, because string S represents the number 28 and 28 becomes 0 after seven steps, as explained above.</p>
<p>Complexity:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>expected worst-case time complexity is O(N);</li>
<li>expected worst-case space complexity is O(1) (not counting the storage required for input arguments).</li>
</ul>
</blockquote></div>
<div style="margin-top:5px">
<small>Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.</small>
</div>
</div>

## 2. Process
1. String S의 2진수를 10진수 int로 변환한다.
2. 0이 될때까지 아래 작업을 수행한다.
  - 짝수일 경우 /2 해준다.
  - 홀수일 경우 -1 해준다.
3. 0이 될 때까지 반복한다.

## 3. Code
```java
public class TestMain {
    public static void main(String args[]) {
        TestMain t = new TestMain();
        System.out.println(t.solution("011100"));
    }

    int solution(String S) {
        int question = Integer.parseInt(S, 2);
        return getStep(question, 0);
    }

    private int getStep(int question, int count) {
        if (question == 0) {
            return count;
        }
        count++;

        if (question % 2 == 0) {
            return getStep(question / 2, count);
        } else {
            return getStep(question - 1, count);
        }
    }
}
```
