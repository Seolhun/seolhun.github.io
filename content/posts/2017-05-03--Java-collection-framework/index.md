---
title: "[Java/Collection] Java Collection Framework에 대한 이해를 통해 Data Structure 이해하기"
author: Seolhun
categories: "Datastructure"
tags:  ['Datastructure', 'Java', 'Collection']
cover: "java.jpg"
---

안녕하세요, 설훈입니다.
이번에는 Java의 Collection Framework에 대해서 알아보겠습니다.

## Intro
자바를 이용하여 프로그래밍을 하다보면 자료구조에 대한 필요성을 느끼게 된다. 특히, 이번 설문지 프로젝트를 통해 설문지를 구성하면서 자료를 담아내는 List와 Set, Map 등 기본지식의 부족을 느끼게 되었다. 이를 이해하기 위해서는, Java에 기본적으로 제공되는 Collection Framework를 이해할 필요가 있다고 생각했다.

Collection Framework는 어떻게보면 자료구조의 기본 중에 기본이다. 이를 알지 못하고 프로그래밍을 하다보면, 한계에 봉착할 수 있다. 비전공자로서 실무부터 배우는 프로그래밍은 향 후 한계에 봉착된다. 현 나의 시점이 그러하며, 무엇인가 해결하기 위해 고민하던 끝에, 정보처리기사의 기본적인 내용 또는 전공자들이 4년 동안 배우는 기본 지식이 내게는 부족하구나라는 결론에 이르렀다. 이는 자료구조, 알고리즘, 운영체제 등의 기본지식의 중요성이다. 기본지식 없이 쌓아올리는 탑은 무너지기 마련이다. 그래서, 이를 먼저 해결하기 위해, Java의 Collection Framework를 이해해보고자 한다.

## Goal
- Collection Framework는 List와 Set의 Interface로 구성되어있다. 추가적으로 Map의 Interface로 구성된 다양한 Map들이 존재하지만, 이는 Collection Framework에 포함되지 않는다. 먼저, Collection Framework(List, Set)을 이해하고, 추가적으로 Map을 이해하여 올바른 자료구조를 사용하고자 한다.
- 3개의 차이점과 장단점을 이해하고, 예제를 통해 여러가지 테스트를 하여 경험을 나누고자 한다.

## Contents
#### 1) Java Collection Framework 구조
<sub>
    <p>- Collection Framework1</p>
    <img src='/images/contents/20170503/1.jpg' width='100%' height='100%'>
</sub>

<sub>
    <p>- Collection Framework2</p>
    <img src='/images/contents/20170503/2.jpg' width='100%' height='100%'>
</sub>

## 3-1. List에 대해서
1. 객체를 인덱스로 관리하기 때문에 객체를 저장하면 자동 인덱스가 부여되고 인덱스로 객체를 검색, 삭제할 수 있는 기능을 제공합니다.
2. List는 객체 자체를 저장하는 것이 아니라, 해당하는 인덱스에 객체의 주소를 참조하여 저장합니다.
<sub>
    <p>- About List</p>
    <img src='/images/contents/20170503/3.jpg' width='100%' height='100%'>
</sub>

#### 3-1-1. ArrayList
1. ArratList는 저장 용량을 초과한 객체들이 들어오면 자동적으로 저장용량이 늘어난다. (index 자동 증가, 초기 10)
2. ArrayList 초기값은 인덱스 0에 삽입된다.
3. 특정 인덱스에 객체를 삽입하면 해당 인덱스 뒤에 인덱스가 차례대로 1씩 증가./감소한다. 즉, 객체의 삽입/삭제가 자주 있을 때에 ArrayList는 비효율적이다. => LinkedList가 효율적

#### 3-1-2. LinkedList
1. LinkedList는 인접 참조를 링크해서 체인처럼 관리한다.
2. LinkedList는 특정 인덱스의 객체를 제거하면, 앞뒤 링크만 변경되고 나머지 링크는 변경되지 않는다. 즉, 위에 ArrayList에서 얘기했던 것처럼 삽입/삭제가 빈번히 있을 때 LinkedList를 쓰는것이 효율적이다.

<sub>
    <p>- LinkedList</p>
    <img src='/images/contents/20170503/4.jpg' width='100%' height='100%'>
</sub>

<sub>
    <p>- LinkedList vs ArrayList</p>
    <img src='/images/contents/20170503/5.jpg' width='100%' height='100%'>
</sub>

#### 3-1-3. Vector
1. Vector는 ArrayList와 같은 구조를 갖고있다.
2. 차이점은 Vector는 동기화(Syncronized)된 메소드로 구성되어있기 때문에 Multi Thread가 동시에 이 메소드를 실행할 수 없다. 그러므로, 하나의 스레드가 실행을 완료해야만 다른 스레드가 실행할 수 있다. (Thread safe)

## 3-2. Set에 대해서
1. Set Collection은 List처럼 Index로 저장 순서를 유지하지 않습니다.
2. 객체를 중복 저장할 수 없으며, 하나의 Null만 존재합니다.

<sub>
    <p>- Set</p>
    <img src='/images/contents/20170503/6.jpg' width='100%' height='100%'>
</sub>

#### 3-2-1. HashSet
1. 순서 없이 저장하고, 동일한 객체는 중복 저장하지 않는다.
2. 동일한 객체란, 객체를 저장하기 전에 hashcode() 메소드를 호출해서 해시코드를 얻어내며, 이미 저장되어 있는 객체들의 해시코드와 비교한다. 만약, 동일한 hashcode가 있다면 다시 equals() 메소드로 객체를 비교해서 ture가 나오면 동일한 객체로 판단하고 중복저장을 하지 않는다.

#### 3-2-2. TreeSet
<sub>
    <p>- TreeSet</p>
    <img src='/images/contents/20170503/7.jpg' width='100%' height='100%'>
</sub>
1. TreeSet은 이진트리(binary tree)를 기반으로한 Set Collection이다.
2. TreeSet은 2개의 자식 노드를 참조하기 위한 2개의 변수로 구성된다.
3. 또한, 객체를 저장하면 자동으로 정렬되는데 부모값과 비교해서 낮은 것은 왼쪽 자식 노드에, 높은 것은 오른쪽 자식 노드에 저장한다.
4. Set 인터페이스 타입 변수에 대입해도 되지만 TreeSet 클래스 타입으로 대입한 이유는 객체를 찾거나 범위 검색과 관련된 메소드를 사요하기 위해서이다.
<sub>
    <p>- TreeSet의 검색 메소드</p>
    <img src='/images/contents/20170503/8.jpg' width='100%' height='100%'>
</sub>

## 3-3. Map에 대해서
- Key와 Value를 저장하며, Key는 중복될 수 없다. 키와 값은 모두 객체이다. 만약, 기존에 저장된 키와 동일한 키로 값을 저장하면 기존 값은 없어지고 새로운 값으로 대체 된다.
<sub>
    <p>- Map</p>
    <img src='/images/contents/20170503/9.jpg' width='100%' height='100%'>
</sub>

#### 3-3-1. HashMap
1. HashMap의 키로 사용할 객체는 hashCode()와 equlas() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다.
2. 키 값은 주로 String을 사용하지만, Object는 모든 키가 될 수 있다.

#### 3-3-2. HashTable
1. HashMap과 동일 구조를 갖고 있어, hashCode()와 equals() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다.
2. HashMap과의 차이점은 동기화된(Syncronized) 메소드로 구성되어 있어, Multi Thread 환경에서 안전하게 객체를 추가/삭제 등이 가능하다.(Thread safe), (ArrayList와 Vector의 관계와 유사)

#### 3-3-3. Properties
HashTable의 하위 클래스이기 때문에 HashTable의 모든 특징을 그대로 가지고 있다.
차이점은, HashTable은 키와 값을 다양한 타입으로 지정이 가능하지만, Properties는 키와 값을 String 타입으로 제한한 Collection 이다.
주로, 옵션 정보, 다국어 정보 등을 저장한다.

#### 3-3-4. TreeMap
<sub>
    <p>- TreeMap</p>
    <img src='/images/contents/20170503/10.jpg' width='100%' height='100%'>
</sub>
1. TreeMap은 이진트리(binary tree)를 기반으로 한 Map Collection이다.
2. TreeSet과 같은 구조를 같고 있지만, TreeSet과의 차이점은 키와 값이 저장된 Map.Entry를 저장하는 것.
3. TreeSet과 동일하게 낮은 값이 왼쪽에 높은 값이 오른쪽 노드에 위치한다.

<sub>
    <p>- TreeMap의 검색 메소드</p>
    <img src='/images/contents/20170503/11.jpg' width='100%' height='100%'>
</sub>

## Ontro
각각의 자료구조가 어떻게 구현 되었는지를 아는 것은 중요하다. 하지만 최소한 어떻게 구현되었는지까지 모른다면, 각각의 구조가 언제 어떻게 사용되는지를 아는 것이 프로그래머로서 기본이라고 생각된다. 알아야 효율적으로 데이터를 관리/사용 할 수 있기 때문이다.

이번 Collection Framework를 통해 List, Set, Map 등에 대해서 알아보았으며, 각각의 클래스와 메소드를 잘 이해하고 사용하는 기회가 될 것으로 판단된다. 특히, Multi Thread 환경과 검색을 위한 자료구조의 변화가 가장 큰 특이점으로 보여졌다.

Syncronized Method를 구현해주어 문제없이 thread safe 환경에서 구축할 수 있는 Vector와 HashTable이 있다. 검색을 향상시키기 위한 index, 이진트리(binary tree), 앞뒤 참조 등 다양한 방법으로 차이점이 발생되었다.

## 5. Origin Contents
[Tistory - Seolhun Blog - Collection Framework](http://postitforhooney.tistory.com/entry/JavaCollection-Java-Collection-Framework%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4%EB%A5%BC-%ED%86%B5%ED%95%B4-Data-Structure-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0?category=695112)
