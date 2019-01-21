---
title: "[Algorithm/Sort] QuickSort 자바로 구현해보기"
author: Seolhun
category: "Algorithm"
tags: ['Algorithm', 'Java', 'Sort', 'Quick']
cover: "java.jpg"
---

이번에는 Java로 QuickSort를 구현해보도록 하겠습니다.

## 1. Quick Sort란?
찰스 앤터니 리처드 호어가 1959년에 개발한 알고리즘이다. 퀵이라는 이름에서 알 수 있듯이 평균적인 상황에서 최고의 성능을 나타낸다. 컴퓨터로 가장 많이 구현된 정렬 알고리즘 중 하나이다. C, C++, PHP, 자바 등 거의 모든 언어에서 제공하는 정렬 함수에서 퀵 정렬 혹은 퀵 정렬의 변형 알고리즘을 사용한다.

방식은 적절한 원소 하나를 기준(피벗, pivot)으로 삼아 그보다 작은 것을 앞으로 빼내고 그 뒤에 피벗을 옮겨 피벗보다 작은 것, 큰 것으로 나눈뒤 나누어진 각각에서 다시 피벗을 잡고 정렬해서 각각의 크기가 0이나 1이 될 때까지 정렬한다.

위에서도 말했듯이 최악의 경우에는 시간복잡도가 O(n2)가 되는데, 피벗을 최솟값이나 최댓값으로 계속해서 잡게 되는 경우에 그렇다. 대표적인 예로는 피벗을 항상 배열의 첫 원소로 잡도록 구현한 알고리즘으로 이미 정렬된 배열을 정렬할 경우. 힙정렬이나 병합정렬은 이런 경우가 없지만, 데이터가 극단적이면 대충 구현된 퀵정렬은 안쓰느니만 못한 최악의 결과를 초래한다. 이를 방지하기 위하여 여러 기법들이 개발 되었는데, 대표적인 것이 피벗을 랜덤으로 잡는 것. 또는, 배열 중에 3개나 9개의 원소를 골라서 이들의 중앙값을 피벗으로 고르는 것이다. [21] 이 방법을 사용하더라도 최악의 경우가 나올 수는 있지만 그 경우가 극히 드물게 된다. 재귀 깊이가 어느 제한 이상으로 깊어질 경우 힙 정렬 알고리즘을 사용하여 항상 O(n log n)을 보장해주는 방법도 많이 쓰인다.

단, 파이썬은 퀵정렬을 하지 않는다. 그 이유는 파이썬은 stable[22]한 정렬을 하는데, 퀵정렬은 stable하지 않기 때문이다. 예를 들어 한글의 키값이 2, 숫자의 키값이 1이라 두면 1, ㄱ , ㄷ, ㄹ, 2를 퀵정렬해서 2, 1, ㄹ, ㄱ, ㄷ 같은 게 나올 수도 있다. O(n)의 추가 메모리를 이용하면 stable한 퀵정렬을 만들 수 있다.

현존하는 컴퓨터 아키텍처 상에서 비교 연산자를 이용하여 구현된 정렬 알고리즘 중 가장 고성능인 알고리즘이 바로 이 퀵정렬이다. 단 데이터에 접근하는 시간이 오래 걸리는 외부 기억장소(하드디스크 등)에서 직접 정렬을 수행할 경우에는 병합 정렬이 더 빠른 것으로 알려져 있다. 요즘에는 디스크에서 데이터를 블럭 단위로 읽어서 각각을 퀵 정렬한 뒤 정렬된 두 블럭을 병합정렬하는 식으로 알고리즘을 설계한다.

## 2. Quick Sort Code
```java
import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

public class QuickSort {
    public QuickSort() {}

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        QuickSort quickSort = new QuickSort();

        scan = new Scanner(System.in);
        System.out.println("Insert Array Size");
        int size = scan.nextInt();
        int[] list = new int[size];

        quickSort.setIntNotDuplication(list);

        Date start = new Date();
        System.out.println("Start Quick Sort");
        quickSort.quickSort(list, 0, list.length - 1);
        Date end = new Date();
        System.out.println("End Quick Sorted time : " + (start.getTime() - end.getTime()));
    }

    private void quickSort(int[] list, int lowest, int highest) {
        if (lowest >= highest) {
            return;
        }

        int mid = lowest + ((highest - lowest) / 2);
        int pivot = list[mid];

        int i = lowest;
        int j = highest;

        while (i <= j) {
            while (list[i] < pivot) {
                i++;
            }

            while (list[j] > pivot) {
                j--;
            }

            if (i <= j) {
                int temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                i++;
                j--;
            }
        }
        System.out.println(Arrays.toString(list));

        if (lowest < j) {
            quickSort(list, lowest, j);
        }

        if (highest > i) {
            quickSort(list, i, highest);
        }
    }

    private void setIntNotDuplication(int[] list) {
        for(int i = 0; i < list.length; ++i) {
            list[i] = this.setRnadomSize(list.length);
            for(int j = 0; j < list.length; ++j) {
                if (list[j] == list[i]) {
                    list[i] = this.setRnadomSize(list.length);
                }
            }
        }
        System.out.println("Ramdom Array is Created : " + Arrays.toString(list));
    }

    private int setRnadomSize(int size) {
        return (int)(Math.random() * (double)(size * 100) + 1.0D);
    }
}
```

다음에는 Quick Sort 설명과 Heap Sort와 Merge Sort를 구현해보겠습니다.

## References
- [Namu WiKI - All about Sort](https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#s-2.2.3)
