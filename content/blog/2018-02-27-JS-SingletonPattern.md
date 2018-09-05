---
title: [Typescript] Singleton Pattern이란?
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2018-02-27
weight: 1
categories: ['Javascript', 'Typescript']
categories_weight: 10
tags: ['Typescript', 'Singleton', 'Static', 'Private']
tags_weight: 10
---
디자인 패턴의 Singleton Pattern에 대해서 간단히 정리해보았습니다.


## Singleton이란
- 싱글턴 패턴(Singleton pattern)을 따르는 클래스는, 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다. 이와 같은 디자인 유형을 싱글턴 패턴이라고 한다. 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다.
- 싱글톤 패턴은 가장 단순한 디자인 패턴 중 하나입니다. 이 유형의 디자인 패턴은 오브젝트를 생성하는 가장 좋은 방법 중 하나를 제공하므로이 패턴은 Creational Patterns에 속해 있습니다. **이 패턴은 단일 객체 만 생성되도록하면서 객체를 만드는 단일 클래스를 포함합니다. 이 클래스는 클래스 객체를 인스턴스화하지 않고 직접 액세스 할 수있는 유일한 객체에 접근하는 방법을 제공합니다.**

```tsx
class Singleton {
  private static instance: Singleton;

  private constructor() {
    Singleton.instance = this;
  }

  static get getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return this.instance;
  }
}

export default Singleton;
```

## 내용
1. 객체를 생성하지 않고 같은 객체로 메소드와 변수를 사용할 수 있다.
2. `this`와 `instance`는 **같은 값을 갖고 있지만, 항상 같진 않다.** (3번과 연관)
3. 생성자를 사용하면 결국 다른 주소값을 반환한다. 즉, 생성자를 사용하여 값을 비교하면 결코 같을 수 없다.
  - 즉, 1개의 주소값을 갖고 있기때문에, 생성된 값과 비교하면 항상 같은 값을 얻을 수 있다.

- static
  - 동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 `this`를 사용할 수 있다

## Reference
- [Mozila - Static](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static)
  - 정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.
- [Mozila - Equality_comparisons_and_sameness](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Does JavaScript use stack or heap for memory allocation or both?](https://hashnode.com/post/does-javascript-use-stack-or-heap-for-memory-allocation-or-both-cj5jl90xl01nh1twuv8ug0bjk)
