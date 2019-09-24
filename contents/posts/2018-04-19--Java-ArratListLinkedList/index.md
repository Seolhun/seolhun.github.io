---
author: Seolhun
banner: "/assets/covers/java.png"
category: "DataStructure"
date: 2018-04-19
subTitle:  ""
tags: ['DataStructure', 'Java', 'ArrayList', 'LinkedList']
title: "[DataStructure/Java] ArrayList vs LinkedList에 대해서 간단히 정리하기"
---

이번에는 간단하게 코드를 보면서 `ArrayList`와 `LinkedList`에 차이점을 이해하고 간단히도 구해해보는 시간을 가져보겠습니다.

## Intro
이번에는 가장 많이 사용되는 Array와 ArrayList, LinkedList에 대해 알아보고자 합니다. 간단하게는 알고 있지만, 내부적으로 코드가 어떻게 구현되었는지 또한, 어떠한 복잡도를 가지고 있는지에 대한 명확한 인지가 부족하여 글로 작성하여 이를 확고히 하고자 합니다.

## Array
가장 기본적인 자료구조인 Array는 번호(인덱스)와 번호에 대응하는 데이터들로 이루어진 자료 구조를 나타냅니다. 즉, 논리적 저장 순서와 물리적 저장 순서가 일치한다고 볼 수 있습니다. 따라서 인덱스(index)로 해당 원소(element)에 접근할 수 있고, Array 값의 인덱스 값을 알고 있으면 O(1)에 해당 원소로 접근할 수 있습니다. 만약, 찾고자 하는 값의 인덱스를 알지 못하면 탐색 알고리즘을 통해 탐색해야되기 때문에 O(N) 혹은 O(Log N)의 복잡도를 추가적으로 갖게됩니다.

#### - Array의 단점
1. 메모리 공간의 정적인 구조 ( = 동적이지 않다.)
  - 생성시 크기를 정해주어야 하며, 해당 값을 동적으로 반영하지 않습니다.
2. 배열을 컨트롤할 수 있는 메소드가 존재하지 않는다. (Javascript의 경우는 Array([])를 구현하였기 때문에 가능합니다.)

아래의 예제처럼 배열은 메모리 공간의 정적인 구조를 알 수 있습니다.

```java
// array 정의
int[] numbers1 = new int[4];

// array에 값 저장
numbers1[0]=10;
numbers1[1]=20;
numbers1[2]=30;

// array의 길이 확인
System.out.println(numbers1.length); // 4
```

이러한 것을 개선하기 위해 나오는 구조가 Vector, ArrayList, LinkedList 등이 있습니다. 그 중 가장 많이 사용되는 ArrayList와 LinkedList를 알아보겠습니다.

## ArrayList
ArrayList는 Array와는 다르게 동적으로 메모리 공간을 처리하기 때문에 정적인 구조를 가지고 있지 않습니다. 즉, ArrayList는 삭제 또는 삽입의 과정에서는 해당 원소에 접근하여 작업을 완료한 뒤(O(1)) 전체 인덱스를 비교하여 해당 배열의 빈 자리를 shift하는 연산처리가 추가적으로 구현되어있습니다.

예를 들어, List 원소 중 어느 원소를 삭제하면 Array를 기반으로 구현한 List에 존재하는 Array의 연속적인 특징이 깨지게 됩니다. 이를 위해 List는 삭제한 원소보다 큰 인덱스를 갖는 원소들을 shift해주는 연산을 추가적으로 수행합니다. 이러한 연산처리 과정이 ArrayList에서 언급되는 가장 큰 단점으로서 삽입/삭제 시마다 O(n)의 시간 복잡도를 가지게 됩니다.

**해당 관련 사항을 자바 API 코드로 보겠습니다.**
```java
  public E remove(int index) {
    rangeCheck(index);

    modCount++;
    E oldValue = elementData(index);

    // 이 부분에서 동적인 처리를 진행합니다. 인덱스 값을 확인한 후 삭제된 인덱스부터 copy하여 해당 인덱스를 채워나갑니다.
    // 마지막 인덱스 배열은 null처리하여 GC가 메모리를 수거할 수 있도록 하였습니다.
    int numMoved = size - index - 1;
    if (numMoved > 0)
        System.arraycopy(elementData, index+1, elementData, index, numMoved);
    elementData[--size] = null; // clear to let GC do its work

    return oldValue;
  }
```

---
**위의 과정을 간단히 그림으로 보면 아래와 같습니다.**
<img src="/assets/images/contents/20180419/array/array.png" width="100%">

---
#### - ArrayList의 특징
1. index를 알고 있다면 인덱스를 통한 메모리 탐색을 통해 O(1)의 복잡도를 가지게 됩니다.
2. 수정/삭제 시 마다 해당 O(n)의 복잡도를 가진 인덱스의 수정작업이 필요하여 수정/삭제가 잦은 연산에는 적합하지 않습니다.

## LinkedList
ArrayList에 index가 shift되는 부분에 대한 문제점을 해결하기 위한 자료구조가 바로 LinkedList입니다. 각각의 원소들은 자기 자신 다음에 어떤 원소인지에 대한 주소 값만을 기억하고 있습니다. 즉, Linked된 부분의 주소 값만 다른 값으로 바꿔주면 삭제와 삽입을 O(1) 만에 해결할 수 있습니다.

하지만 LinkedList도 한 가지 문제가 있습니다. `원하는 위치에 삽입을 하고자 하면` 원하는 위치를 Search 과정에 있어서 해당 Node를 확인하면서 해당 위치를 찾아야 합니다. 이유는, LinkedList의 값은 각 이전, 이후의 값의 주소만을 참조하여 연결성을 유지하고 있기 때문입니다. 즉, 물리적인 저장소 위치와 논리적인 저장소가 일치하지 않습니다. 이 과정 때문에, 어떠한 원소를 삭제 또는 추가하고자 했을 때, 그 원소를 찾기 위해서 O(Log N)의 시간이 추가적으로 발생하게 됩니다.

**LinkedList에서 O(n)의 시간 복잡도를 갖는 검색 코드입니다.**
```java
  /*** Returns the (non-null) Node at the specified element index.*/
  Node<E> node(int index) {
    // assert isElementIndex(index);
    if (index < (size >> 1)) {
      Node<E> x = first;
      for (int i = 0; i < index; i++)
          x = x.next;
      return x;
    } else {
      Node<E> x = last;
      for (int i = size - 1; i > index; i--)
          x = x.prev;
      return x;
    }
  }
```

위의 코드를 보면 해당 index의 중간값을 기준으로 탐색하기 때문에 LinkedList 자료구조는 Search에 O(Log N)의 시간복잡도를 가지며, 삽입/삭제에 대해서도 O(Log N)의 시간복잡도를 갖습니다.

LinkedList가 중요한 이유는, Node를 기준으로 구현되어있기 때문에 Tree와 호환성이 좋습니다.

#### - LinkedList의 종류
자바의 기본적인 LinkedList 구조는 `이중 연결 리스트`입니다.

1. 단일 연결 리스트
단일 연결 리스트는 각 노드에 자료 공간과 한 개의 포인터 공간이 있고, 각 노드의 포인터는 다음 노드를 가리킨다.
<img src="/assets/images/contents/20180419/array/linked1.png" width="100%">

2. 이중 연결 리스트
이중 연결 리스트의 구조는 단일 연결 리스트와 비슷하지만, 포인터 공간이 두 개가 있고 각각의 포인터는 앞의 노드와 뒤의 노드를 가리킨다.
<img src="/assets/images/contents/20180419/array/linked2.png" width="100%">

3. 원형 연결 리스트
원형 연결 리스트는 일반적인 연결 리스트에 마지막 노드와 처음 노드를 연결시켜 원형으로 만든 구조이다.
<img src="/assets/images/contents/20180419/array/linked3.png" width="100%">

## Outro
Array에서 ArrayList, LinkedList 등을 간단히 알아보았습니다. 각각의 특징 및 시간복잡도 등을 알아볼 수 있었습니다. 각각의 상황에 맞게 사용하는 것이 중요하지만, 그러한 상황을 만드는 이유, 즉 시간복잡도를 가지는지에 대해서 간단히 코드도 보면서 알아갔습니다. 다음 시간에는 Tree에 대해 깊게 알아보고자 합니다. 개인적으로 부족한 부분이기도 하며, BFS, DFS 알고리즘과 연관이 깊기 때문에 이 부분을 통해 부족한 부분을 채워나가려고 합니다.

## References
- [Wike - Array](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%97%B4)
- [Wike - LinkedList](https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8)
- [생활코딩 - ArrayList - LinkedList](https://opentutorials.org/module/1335/8715)
