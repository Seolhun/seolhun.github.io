---
author: Seolhun
banner: "./assets/covers/java.png"
category: "Algorithm"
date: 2018-04-22
subTitle:  ""
tags: ['Algorithm', 'Java', 'Sort', 'Quick', 'Merge', 'Insertion', 'Selection', 'Bubble', 'Counting']
title: "[Algorithm/Java] 자주 언급되는 Sort Algorithm 자바로 구현해보기 - Part 1"
---

저번에 개인적으로 구현한 QuickSort가 있지만, 이번에는 `Bubble, Insertion, Selection, Merge, Counting, Quick 총 6가지`에 대한 정렬에 대해서 구현해볼까 합니다. 각 정렬에 대한 정의와 시간복잡도를 생각하면서 고려해보겠습니다.


## Intro
이번에는 기본적으로 언급되는 O(n^2)정렬과 O(n Log n)정렬에 대해서 알아보고자 글을 작성하게 되었습니다. Java, Python, JS 등 기본적으로 Sort의 기능을 제공해주지만, 내부적으로 어떠한 복잡도를 가지고있으며, 어떠한 특징을 가지고 있는지를 이해하는 것이 중요하다고 생각하여 Sort만을 분리하여 직접 작성하고 특징에 대해 알아보고자 합니다. 직접 구성하면서 부족한 부분도 있겠지만 몇몇 메소드를 이해하고 각각의 정렬에 대한 복잡도와 특징에 대해 이해하는데 초점을 두도록 해보겠습니다.

#### - [Part 1](/algorithms/posts/20180422-java-allaboutsort1/)
- Bubble Sort
- Selection Sort
- Insertion Sort

#### - [Part 2](/algorithms/posts/20180422-java-allaboutsort2/)
- Quick Sort
- Merge Sort
- Counting Sort

## 1. Bubble Sort
거품 정렬은 1번째와 2번째 원소를 비교하여 정렬하고, 2번째와 3번째, ..., n-1번째와 n번째를 정렬한 뒤 다시 처음으로 돌아가 이번에는 n-2번째와 n-1번째까지, ...해서 최대 n(n-1)/2번 정렬합니다.

간단하게 `한 번 돌 때마다 마지막 하나가 정렬되므로 원소들이 거품이 올라오는 것처럼 보여 거품정렬입니다.` 하지만, 거품정렬은 O(N^2)의 시간복잡도를 가지고 있어, 기본내장된 Sort를 사용하는 것이 더 효과적이라 버블정렬의 효용성은 거의 없습니다.

그래도 코드로 한번 구현해보겠습니다.

```java
import java.util.Arrays;

public class BubbleSort {
    private static int[] unsorted_array = {10, 6, 4, 5, 1};

    public static void main(String args[]) {
        for (int i = 1; i <= unsorted_array.length; i++) {
            for (int j = 0; j < unsorted_array.length - i; j++) {
                if (unsorted_array[j] > unsorted_array[j + 1]) {
                    int temp = unsorted_array[j + 1];
                    unsorted_array[j + 1] = unsorted_array[j];
                    unsorted_array[j] = temp;
                    System.out.println(i + " Step is : " + Arrays.toString(unsorted_array));
                }
            }
        }
    }
    // 1 Step is : [6, 10, 4, 5, 1]
    // 1 Step is : [6, 4, 10, 5, 1]
    // 1 Step is : [6, 4, 5, 10, 1]
    // 1 Step is : [6, 4, 5, 1, 10]
    // 2 Step is : [4, 6, 5, 1, 10]
    // 2 Step is : [4, 5, 6, 1, 10]
    // 2 Step is : [4, 5, 1, 6, 10]
    // 3 Step is : [4, 1, 5, 6, 10]
    // 4 Step is : [1, 4, 5, 6, 10]
}
```

결과로 출력되는 과정(Step)을 보면, 맨 앞의 수부터 차례차례 비교해가면서 끝에 거품처럼 쌓여가며 정렬하는 것을 볼 수 있습니다. 그리고, 1차 루프가 끝날때마다 마지막 값은 정렬이 된 것으로 판단하여 두번쨰 정렬에 `- i`를 처리하여 해당 값을 비교하지 않도록 처리하는 것입니다.

## 2. Selection Sort
선택 정렬은 처음부터 끝까지 훑어서 가장 작은 게 1번째, 2번째부터 끝까지 훑어서 가장 작은 게 2번째... 해서 (n-1)번 반복한다. 어찌 보면 인간이 사용하는 정렬 방식입니다. 어떻게 정렬이 되어 있든 일관성 있게 n(n-1)/2​에 비례하는 시간복잡도를 가진다는게 특징입니다. 비교하면서 자리를 바꿔가는 버블 정렬보다 두 배 정도 빠르다고 할 수 있습니다.

해당 값을 정렬 된 값에 비교하며 맞는 위치에 삽입하는 삽입정렬과는 달리, 선택정렬은 가장 작은 값을 찾아가며 순서대로 정렬하는 차이가 있습니다.

```java
import java.util.Arrays;

public class SelectionSort {
    private static int[] unsorted_array = {10, 6, 4, 5, 1};

    public static void main(String args[]) {
        for (int i = 0; i < unsorted_array.length; i++) {
            int min = unsorted_array[i];
            int min_index = i;
            for (int j = i; j < unsorted_array.length - 1; j++) {
                if (min > unsorted_array[j + 1]) {
                    min = unsorted_array[j + 1];
                    min_index = j + 1;
                }
            }

            // Re-arrange
            if (min < unsorted_array[i]) {
                System.arraycopy(unsorted_array, i, unsorted_array, i + 1, min_index - i);
                unsorted_array[i] = min;
                System.out.println(i + 1+ " Step is : " + Arrays.toString(unsorted_array));
            }
        }
    }

    // 0 Step is : [10, 6, 4, 5, 1]
    // 1 Step is : [1, 10, 6, 4, 5]
    // 2 Step is : [1, 4, 10, 6, 5]
    // 3 Step is : [1, 4, 5, 10, 6]
    // 4 Step is : [1, 4, 5, 6, 10]
}
```

## 3. Insertion Sort
삽입 정렬은 `j번째 원소를 기준으로 1부터 j-1까지와 비교해 적절한 위치에 삽입한 후, 그 뒤의 데이터를 한 칸씩 뒤로 밀어내는 방식으로 정렬하는 알고리즘입니다.`

평균적으론 O(N^2)중 빠른 편이나 배열에 크기가 증가할 수록 밀어내는데 걸리는 복잡도가 커지는 단점이 있습니다. 다만 이미 정렬되어 있는 자료구조에 자료를 하나씩 삽입/제거하는 경우에는 현실적으로 최고의 정렬 알고리즘이 됩니다. 버블정렬처럼 자리를 바꿔가며 재정렬하는 것이 아니라, 해당 자리를 탐색하는 것이기 때문에 탐색을 제외한 오버헤드가 매우 적기 때문에 다른 O(n^2) 정렬 알고리즘 보다 효과적이라고 할 수 있습니다.

```java
import java.util.Arrays;

public class InsertionSort {
    private static int[] unsorted_array = {10, 6, 4, 5, 1};

    public static void main(String args[]) {
        for (int i = 0; i < unsorted_array.length; i++) {
            for (int j = 0; j < i; j++) {
                if (unsorted_array[i] < unsorted_array[j]) {
                    int temp = unsorted_array[i];
                    System.arraycopy(unsorted_array, j, unsorted_array, j + 1, i - j);
                    unsorted_array[j] = temp;
                    System.out.println(i + " Step is : " + Arrays.toString(unsorted_array));
                    break;
                }
            }
        }
    }
    // 1 Step is : [6, 10, 4, 5, 1]
    // 2 Step is : [4, 6, 10, 5, 1]
    // 3 Step is : [4, 5, 6, 10, 1]
    // 4 Step is : [1, 4, 5, 6, 10]
}
```

결과로 출력되는 과정(Step)을 보면 첫 배열의 값을 기준으로 다음 값들이 삽입되어 정해진 위치로 정렬됨을 알 수 있습니다. 그리고 삽입된 값의 원래 인덱스와 삽입된 인덱스 사이는 한 칸씩 뒤로 밀려나며 다시 배열이 정렬됨을 알 수 있습니다.

## - Sort에서 사용하면 좋을 메소드 `System.arraycopy`
이번에 삽입정렬과 선택정렬을 구현하면서, 배열의 단점인, 동적인 반영이 안되는 것을 해결하기 위해 각각의 배열의 값이 바뀌면 재배열해줘야 하는 로직이 작성되어야 합니다.
이러한 경우 루프문을 통해 조건으로 확인할 수도 있지만, 편리하게 해당 배열의 길이를 복사하여 붙여넣기 할 수 있는 Java Method가 존재합니다. 이에 대해서 간단히 적어볼까 합니다.

```java
public static native void arraycopy(Object src,  int  srcPos, Object dest, int destPos, int length);
```
<table class="table table-dark text-center">
  <tr>
    <th>
      src
    </th>
    <th>
      srcPos
    </th>
    <th>
      dest
    </th>
    <th>
      destPos
    </th>
    <th>
      length
    </th>
  </tr>
  <tr>
    <td>
      (복사 할) 배열 instance
    </td>
    <td>
      복사 시작지점
    </td>
    <td>
      (붙여넣기 할) 배열 instance
    </td>
    <td>
      붙여넣기 시작지점
    </td>
    <td>
      붙여넣기 할 길이
    </td>
  </tr>
</table>

##### - 간단하게 코드로 알아가보기
```java
import java.util.Arrays;

public class ArrayCopy {
  public static void main(String args[]) {
    int[] unsorted_array = {1, 2, 3, 4, 5, 6};
    System.arraycopy(unsorted_array, 3, unsorted_array, 1, 3);
    System.out.println(Arrays.toString(unsorted_array));
    // 원본 : 1, 2, 3, 4, 5, 6
    // 결과 : 1, 4, 5, 6, 5, 6

    int[] unsorted_array2 = {1, 2, 3, 4, 5, 6};
    System.arraycopy(unsorted_array2, 0, unsorted_array2, 3, 3);
    System.out.println(Arrays.toString(unsorted_array2));
    // 원본 : 1, 2, 3, 4, 5, 6
    // 결과 : 1, 2, 3, 1, 2, 3

    int[] unsorted_array3 = {1, 2, 3, 4, 5, 6};
    System.arraycopy(unsorted_array3, 2, unsorted_array3, 4, 2);
    System.out.println(Arrays.toString(unsorted_array3));
    // 원본 : 1, 2, 3, 4, 5, 6
    // 결과 : 1, 2, 3, 4, 3, 4
  }
}
```

## Outro
이번 Part1에서는 Bubble, Selection, Insertion Sort를 정리해보았습니다. 배열을 사용하여 Sort를 구현하였습니다. 정렬에서 가장 중요한 것은 결국 확률에서 어떠한 것을 기준으로 선택하여 어떻게 해결할 것인가가 핵심입니다. 이는 선택정렬과 삽입정렬을 비교하면 쉽게 알 수 있습니다. 가장 작은 수를 찾아서 순서대로 정렬할 것인가(선택정렬), 아니면 해당 숫자를 맞는 위치에 삽입하며 정렬할 것인가(삽입정렬)처럼 말입니다.

추가적으로 arraycopy라는 Java Method를 숙지할 수 있는 시간이 되었으며, Array 단점으로 인한 재정렬 문제 등으로 복잡도 상승 등의 여러가지 특징들을 파악할 수 있었습니다. 현재 ArrayList와 LinkedList도 직접 작성하려고 하고 있는데, 이러한 부분도 정렬과 고려하여 직접 코드로 구현해보는 시간을 갖도록 하겠습니다.

마지막으로, 위의 알고리즘들은 O(n^2)의 복잡도를 가지고 있어 대부분의 언어에서 채택되어 사용되지 않았습니다. 하지만, Python에서는 Merge Sort와 함께 Insertion Sort를 병행하여 사용한다고 합니다. 이유는 Quick Sort가 Stable하지 않다는 이유때문입니다. 이러한 내용들은 Part2에서 알아보겠습니다.

## References
- [Namu Wiki - 정렬 알고리즘](https://namu.wiki/w/%EC%A0%95%EB%A0%AC%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#s-2.1.2)
- [xybernetics - SortingAlgorithmsExplained](http://www.xybernetics.com/techtalk/SortingAlgorithmsExplained/SortingAlgorithmsExplained.html)
