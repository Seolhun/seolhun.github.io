---
title: [Algorithm/Java] 자주 언급되는 Sort Algorithm 자바로 구현해보기 - Part 2
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2018-04-22
weight: 1
categories: ['Algorithm', 'Java', 'Sort']
categories_weight: 10
tags: ['Algorithm', 'Java', 'Sort', 'Quick', 'Merge', 'Insertion', 'Selection', 'Bubble', 'Counting']
tags_weight: 10
---
저번에 개인적으로 구현한 QuickSort가 있지만, 이번에는 `Bubble, Insertion, Selection, Merge, Counting, Quick 총 6가지`에 대한 정렬에 대해서 구현해볼까 합니다. 각 정렬에 대한 정의와 시간복잡도를 생각하면서 고려해보겠습니다.

## Intro
저번 시간에는 O(n^2)에 해당되는 정렬 알고리즘 3가지를 알아보았습니다. 이번에는 O(n Log n)에 해당되는 알고리즘을 알아보겠습니다.

Sort에서 대중적으로 가장 빠르다는 정렬은 QuickSort로 O(n Log n)으로 알려져 있습니다만, 상황에 따라 QuickSort는 O(n^2)의 속도를 나타낸다고 합니다. 이러한 상황들을 견주어본다면 각각의 상활을 이해하고 적절한 Sort 알고리즘을 판단할 수 있는것이 중요할 것으로 생각합니다. 하지만, 그 보다 먼저 선행되어야 하는 것은 각각의 정렬에 대한 정의와 어떻게 구현하면 되는지를 직접 이해하고 숙지한다면 큰 도움이 될 것이라고 생각했습니다. 그래서 코드로 직접 작성해보며 각각의 특징에 대해서 정리해보겠습니다.

#### - [Part 1](/algorithms/posts/20180422-java-allaboutsort1/)
- Bubble Sort
- Selection Sort
- Insertion Sort

#### - [Part 2](/algorithms/posts/20180422-java-allaboutsort2/)
- Quick Sort
- Merge Sort
- Counting Sort

## 4. Quick Sort
찰스 앤터니 리처드 호어가 1959년에 개발한 알고리즘이며, 퀵이라는 이름에서 알 수 있듯이 평균적인 상황에서 최고의 성능을 나타냅니다.

컴퓨터로 가장 많이 구현된 정렬 알고리즘 중 하나이며, C, C++, PHP, 자바 등 거의 모든 언어에서 제공하는 정렬 함수에서 퀵 정렬 혹은 퀵 정렬의 변형 알고리즘을 사용합니다.
단, 파이썬은 퀵정렬을 하지 않는데, 이유는 파이썬은 stable한 정렬을 하는데, 퀵정렬은 stable하지 않기 때문이다. 파이썬에서 사용하는것은 팀 정렬로 삽입정렬과 병합정렬을 조합한 것입니다.

`방식은 적절한 원소 하나를 기준(피벗, pivot)으로 삼아 그보다 작은 것을 앞으로 빼내고 그 뒤에 피벗을 옮겨 피벗보다 작은 것, 큰 것으로 나눈뒤 나누어진 각각에서 다시 피벗을 잡고 정렬해서 각각의 크기가 0이나 1이 될 때까지 정렬하는 것입니다. 위에서도 말했듯이 최악의 경우에는 시간복잡도가 O(n2)가 되는데, 피벗을 최솟값이나 최댓값으로 계속해서 잡게 되는 경우에 그런 문제가 발생합니다. `

이를 방지하기 위하여 여러 기법들이 개발 되었는데, 대표적인 것이 피벗을 랜덤으로 잡는 것(Random Quick sort). 또는, 배열 중에 3개나 9개의 원소를 골라서 이들의 중앙값을 피벗으로 고르는 것입니다. 이러한 방법을 사용하더라도 최악의 경우가 나올 수는 있지만, 그 경우가 극히 드물게 됩니다. 재귀 깊이가 어느 제한 이상으로 깊어질 경우 힙 정렬 알고리즘을 사용하여 항상 O(n log n)을 보장해주는 방법도 많이 쓰입니다.

**요즘에는 디스크에서 데이터를 블럭 단위로 읽어서 각각을 퀵정렬한 뒤 정렬된 두 블럭을 병합정렬하는 식으로 알고리즘을 설계한다.**

#### - QuickSort Code
```java
import java.util.Arrays;
public class QuickSort {
    private static int[] unsorted_array = {2, 1390, 425, 1122, 1208, 1443, 462, 1155, 849, 455, 1053, 1155, 318, 79, 788};

    public static void main(String args[]) {
        QuickSort quickSort = new QuickSort();
        quickSort.sort(unsorted_array, 0, unsorted_array.length - 1);
    }

    void sort(int[] list, int lowest, int highest) {
        if (lowest >= highest) {
            return;
        }

        int mid = lowest + ((highest - lowest) / 2);
        int pivot = list[mid];

        int low = lowest;
        int high = highest;
        while (low <= high) {
            while (list[low] < pivot) {
                low++;
            }
            while (list[high] > pivot) {
                high--;
            }
            if (low <= high) {
                int temp = list[low];
                list[low] = list[high];
                list[high] = temp;
                low++;
                high--;
            }
        }
        if (lowest < high) {
            sort(list, lowest, high);
        }

        if (highest > low) {
            sort(list, low, highest);
        }
    }
}
```

#### - 주의사항
제 코드는 현재 Pivot 값을 항상 배열의 가운데 값을 기준으로 정렬할 수 있도록 만들었습니다. Pivot에 따라 복잡도도 달라지지만, 여러가지 Pivot 선정하는 방법이 존재합니다. 하지만, Pivot을 잘못 선정하는 알고리즘을 짜게되면 QuickSort는 Quick이라는 이름처럼 빠른 알고리즘으로 작동되지 않습니다. 이를 잘 고려하여 알고리즘을 짜야할 필요가 있습니다.

#### - 그림으로 보는 QuickSort
<div class='text-center'>
  <img src="/images/contents/20180422/sort/Quicksort.gif" width="50%">
</div>

## 5. Merge Sort
> 합병 정렬 또는 병합 정렬(merge sort)은 O(n log n) 비교 기반 정렬 알고리즘이다. 일반적인 방법으로 구현했을 때 이 정렬은 안정 정렬에 속하며, 분할 정복 알고리즘의 하나이다. 존 폰 노이만이 1945년에 개발했다.

원소 개수가 1 또는 0이 될 때까지 두 부분으로 짜개고 짜개서 (두 개씩이 될때까지) 자른 순서의 역순으로 크기를 비교해 병합해 나갑니다. 병합된 부분 안은 이미 정렬되어 있으므로 전부 비교하지 않아도 제자리를 찾을 수 있습니다. 대표적인 분할 정복 알고리즘으로 존 폰 노이만의 천재성을 엿볼 수 있는 알고리즘입니다.

성능은 퀵정렬보다 전반적으로 뒤떨어지고, 데이터 크기만한 메모리가 더 필요하지만 `최대의 장점은 데이터의 상태에 별 영향을 받지 않는다는 점과 stable sort라는 점입니다.` 힙이나 퀵의 경우에는 배열 A[25] = 100, A[33] = 100인 정수형 배열을 정렬한다고 할 때, 33번째에 있던 100이 25번째에 있던 100보다 앞으로 오는 경우가 생길 수 있습니다. 그에 반해서 병합정렬은 그런 문제를 일으키지 않습니다.

#### - MergeSort Code
```java
import java.util.Arrays;
public class MergeSort {
    private static int[] unsorted_array = {2, 1390, 425, 1122, 1208, 1443, 462, 1155, 849, 455, 1053, 1155, 318, 79, 788};
    private int[] numbers;
    private int[] helper;

    public static void main(String args[]) {
        MergeSort mergeSort = new MergeSort();
        mergeSort.sort(unsorted_array);
    }

    public void sort(int[] values) {
        this.numbers = values;
        int size = values.length;
        this.helper = new int[size];
        mergesort(0, size - 1);
    }

    private void mergesort(int low, int high) {
        if (low < high) {
            int middle = low + (high - low) / 2;
            mergesort(low, middle);
            mergesort(middle + 1, high);
            merge(low, middle, high);
        }
    }

    private void merge(int low, int middle, int high) {
        for (int i = low; i <= high; i++) {
            helper[i] = numbers[i];
        }

        int l1 = low;
        int mid = middle + 1;
        int l2 = low;
        while (l1 <= middle && mid <= high) {
            if (helper[l1] <= helper[mid]) {
                numbers[l2] = helper[l1];
                l1++;
            } else {
                numbers[l2] = helper[mid];
                mid++;
            }
            l2++;
        }
        while (l1 <= middle) {
            numbers[l2] = helper[l1];
            l2++;
            l1++;
        }

    }
}
```

#### - 그림으로 보는 MergeSort
<div class='text-center'>
  <img src="/images/contents/20180422/sort/Mergesort.gif" width="50%">
</div>

## 6. Counting Sort
카운팅 정렬은 가장 큰 데이터에 따라 효율이 좌지우지됩니다. 쉽게 설명하자면 특정 데이터의 개수(1이 두 개 있다면 2)를 데이터의 값에 대응하는 위치에 저장한 뒤, 자신의 위치에서 앞에 있던 값을 모두 더한 배열을 만든 뒤, 거기서 데이터가 들어가야 할 위치를 찾아내는 정렬 알고리즘입니다. 이 경우에 데이터의 최댓값을 k라 두면, 시간 복잡도는 O(n+k)입니다. 예를 들어 10개의 숫자를 정렬하는 데, 가장 큰 숫자가 100일 경우, O(n^2)이 됩니다. 100(k)은 10(n)의 제곱이니까요. 1000이면 O(n^3)이 되죠. 즉 정렬할 수들의 최대값에 영향을 받는 알고리즘이라고 볼 수 있습니다.

하지만, 만약 k가 억 단위를 넘어간다면? n이 아무리 작아도 동작시간이 커집니다. 이럴 때는 Counting Sort를 사용하는 것은 바람직하지 않습니다. 반대로 k가 매우 작다면, 오히려 선형시간의 효과를 볼 수 있습니다. 즉, k가 작다는 조건이라면 매우 효율적인 정렬입니다. 또한, 카운팅 정렬은 배열을 사용하는 특성상, 정수라는 전제를 깔고 있습니다.

#### - CountingSort Code
```java
import java.util.Arrays;

public class CountingSort {
    private static int[] unsorted_array = {2, 139, 42, 112, 120, 144, 46, 115, 84, 45, 105, 115, 31, 79, 78};

    private int[] counts;
    private int[] results;

    public static void main(String args[]) {
        CountingSort countingSort = new CountingSort();
        System.out.println(Arrays.toString(countingSort.sort(unsorted_array)));
    }

    int[] sort(int[] values) {
        int max = findMaxValue(values);
        counts = new int[max + 1];
        results = new int[values.length + 1];
        for (int i = 0; i < counts.length; i++) {
            counts[i] = 0;
        }

        for (int value : values) {
            counts[value] = counts[value] + 1;
        }

        for (int i = 1; i < counts.length; i++) {
            counts[i] = counts[i] + counts[i - 1];
        }

        for (int i = values.length - 1; i >= 0; i--) {
            results[counts[values[i]]] = values[i];
            counts[values[i]] = counts[values[i]] - 1;
        }
        return results;
    }

    int findMaxValue(int[] values) {
        int max = 0;
        for (int value : values) {
            if (max < value) {
                max = value;
            }
        }
        return max;
    }
}

```

#### - CountingSort 체험해보기
아래 사이트에 가면 CountingSort를 직접 단계별 과정을 확인하실 수 있습니다.
[View - CountingSort Test](http://www.cs.miami.edu/home/burt/learning/Csc517.091/workbook/countingsort.html)


## 대부분의 Sort 시간/공간복잡도
<div class='text-center'>
  <img src="/images/contents/20180422/sort/Sorts.png" width="50%">
</div>

## Outro
이번 Part 2에서는 Quick, Merge, Counting Sort에 대해서 간단히 구현해보고 알아보았습니다. Quick, MergeSort 같은 경우는 분할정복의 패턴으로 각각의 배열들을 분할/합치는 작업을 통해서 해당 배열들을 정렬하는 방법을 선택하고 있습니다. 그 중, QuickSort 같은 경우는 Pivot을 기준으로 분할되는데, Pivot의 기준이 잘못선택되는 경우 혹은 각각의 값들의 차가 불규칙하고 커서 이를 잘 나누기가 힘든 경우 O(n^2)의 복잡도를 가질 확률이 높아집니다.

이에 반해 MergeSort는 배열의 갯수를 기준으로 정확히 나누어서 정렬하기 때문에 O(n Lon n)의 시간복잡도를 일정하게 가져갈 수 있습니다. 거기에 Stable하게 배열을 나눌 수 있어서 QuickSort보다 안정적인 정렬을 할 수 있습니다. 그러한 이유가, Python에서 QuickSort로 구현되지 않은 이유라고 할 수 있을 것입니다.

CountingSort는 최대 값을 기준으로 시간복잡도가 달라지는 경우인데, 각각의 값이 일정한 순서로 증가한 값들일수록 CountingSort가 더 적합할 것으로 보입니다. 특히, n Log n보다 K의 값이 작아지는 경계선을 잘 고려한다면 이를 잘 사용할 수 있을 것으로 판단합니다.

기본적인 코드와 함께 간단히 Sort에 대해서 알아보았는데, 내용적으로 많이 부족해보인다고 생각합니다. 책과 여러가지를 더 검색하여 해당 내용을 보충해야 될것으로 보이며, 이와 같은 내용은 계속 수정해나가도록 하겠습니다. 감사합니다.

## References
- [Namu Wiki - 정렬 알고리즘](https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#s-2.1.2)
- [xybernetics - SortingAlgorithmsExplained](http://www.xybernetics.com/techtalk/SortingAlgorithmsExplained/SortingAlgorithmsExplained.html)
- [Vogella - Sort](http://www.vogella.com/tutorials/JavaAlgorithmsMergesort/article.html)
