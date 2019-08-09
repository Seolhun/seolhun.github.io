---
title: "[Javascript/Typescript] Promise에 대해서 알아보고 예제 작성하기 - 1"
author: Seolhun
date: 2018-03-12
category: "TypeScript"
tags: ['Promise', 'Async']
cover: "javascript.jpeg"
---

TypeScript 환경에서 Promise 사용법을 알아보고 테스트코드를 작성해보고자 합니다. 문제가 되는 부분이나, 도움이 되는 것을 알려주시면 감사합니다.

## Intro
첫 시작을 Java 개발자로 시작하여, Javascript에서 Promise개념을 처음 사용할 때에는 상당히 어렵게 느껴졌습니다. 특히, jQuery 라이브러리를 이용하면서 Promise와 비슷한 jQuery, Defferred를 사용하고 멘붕을 겪었습니다. Promise가 어려웠던 점은 아마 기존 Java의 환경에서 Script의 언어를 바라보았기 때문이라고 생각합니다.

특히, Java에 대표적인 Spring에는 IoC라는 개념이 있습니다. Spring은 IoC 개념으로 대부분이 Spring Container에서 직접 관리해주기 때문에, 이러한 부분을 크게 고민하지 않고 구현이 가능했고, Thread가 필요하면 ThreadPool을 이용하여 Executor를 구현하면 큰 어려움 없이 Thread를 이용한 개발이 가능했습니다.

하지만, NodeJS는 싱글 스레드로서 대부분의 Event를 처리하므로, 1개의 이벤트를면 동기화처리하면, 해당 이벤트를 기다리면서 다른 이벤트가 처리가 늦어져 NodeJS 서비스 모두가 느려질 수 밖에 없어집니다. 이러한 환경 차이가 NodeJS에서 비동기로 처리하기 위한 Promise개념이 확실히 필요하다고 할 수 있습니다.

이 외에도 Frontend가 고도화되면서 Javascript에서도 해당 페이지 내에 많은 Event가 호출된다면 비동기로 처리해야하고, 함수 안에 함수의 끝없는 CallBack지옥을 벗어나기 위해서는 Promise개념이 필요합니다. ECMA 6에서 Native Promise를 공식적으로 지원하기 때문에, 해당 문서를 통해 개념을 정리하고 테스트코드를 작성해보고자 합니다.

```tsx
// CallBack Hell
async(1, () => {
	async(2, () => {
		async(3, () => {
			async(4, () => {
				console.log('Completed Task : Callback Hell');
			});
		});
	});
});
```

## Goal
1. Promise의 개념 정리/이해
2. Promise 테스트코드 작성하기

## Overview
Promise는 생성될 때 꼭 알 필요는 없는 값을 위한 대리자입니다. 이는 비동기 동작이 종료된 이후의 결과값이나 실패 이유를 처리하기 위한 처리기(handler)를 연결할 수 있도록 합니다. `Promise는 비동기 메서드가 동기 메서드처럼 값을 반환하도록 합니다.` 최종값 대신, 비동기 메서드는 미래 어느 시점에 값을 갖는 promise를 반환합니다.

> Promise는 하나의 약속입니다. `약속한 것을 지금 처리하지 못했으니 처리되면 알려줄게`로 해석하면 더 편합니다.

- Promise는 다음 중 하나의 상태를 가집니다.
    - 대기중(pending): 초기 상태, 이행 또는 거부되지 않은.
    - 처리됨(settled): 연산이 성공했든 실패했든 처리가 된 상태.
    	- 이행됨(fulfilled): 연산이 성공리에 완료되었음을 뜻합니다.
    	- 거부됨(rejected): 연산이 실패했음을 뜻합니다.

대기중인 Promise는 값으로 이행되거나, 이유(reason 또는 오류)와 함께 거부될 수 있습니다. 이 중 하나가 일어난 경우, 연결된 처리기는 호출된 Promise의 then 메서드에 의해 대기열에 오릅니다(queued up). (Promise에 처리기가 부착될 때 이미 이행 또는 거부된 경우에도 처리기는 호출되므로, 비동기 연산과 부착될 처리기 사이에는 경합 조건(race condition)이 없습니다.)

Promise.prototype.then() 및 Promise.prototype.catch() 메서드가 Promise를 반환하기에, 둘은 연결(chain)될 수 있습니다. 이를 합성(composition)이라고 합니다.
<sub>
  <img src='/images/contents/20180312/promise.png' width='100%' height='100%'>
  - Promise Flow
</sub>

Promise는 대기중이 아니라 이행 또는 거부된 경우 처리되었다(settled)고 합니다. 또한 Promise와 함께 쓰이는 용어 (운명이) 결정됨(resolved)이라고 합니다. — 이는 Promise가 (상태가) 처리됨(settled) 또는 Promise(처리) 체인 내에 갖힘(locked)을 뜻합니다. Promise 용어에 관한 더 자세한 사항은 [Domenic Denicola의 글 상태와 운명](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)에 담겨 있습니다.

## Content
1. 메서드
	- Promise.all(iterable)
		- `인수 iterable 내의 모든 Promise가 결정된 때 결정되며 하나의 Promise라도 거부된 경우 즉시 거부하는 Promise를 반환합니다.` 이 Promise가 결정되는 경우, iterable 내의 Promise가 결정한 값들의 배열로 결정됩니다. 반환된 Promise가 거부되는 경우, iterable 내의 거부된 그 Promise가 거부된 이유를 그대로 이용해 거부합니다. 이 메서드는 여러 Promise의 결과를 모두 모으는 데 유용할 수 있습니다.
	- Promise.race(iterable)
		- `iterable 내 Promise 중 하나를 결정 또는 거부하자마자 결정 또는 거부하는 Promise를 반환합니다.`
	- Promise.reject(reason)
    	- 주어진 reason(이유)로 거부된 Promise 객체를 반환합니다.
	- Promise.resolve(value)
    	- 주어진 값(value)으로 결정된 Promise 객체를 반환합니다. 값이 thenable 객체인(즉 then 메서드가 있는) 경우, 반환된 Promise는 그 thenable을 '따르고(follow)', 그 최종 상태를 취합니다. 그렇지 않으면 반환된 Promise는 그 값으로 이행됩니다. 보통, 값이 Promise인지 아닌지 알고 싶은 경우 - 대신 Promise.resolve(value)로 쓰고 Promise처럼 반환값으로 작동합니다.

2. Promise 프로토타입
	- Promise.prototype.constructor
    	- 인스턴스의 프로토타입을 만드는 함수를 반환합니다. 이는 기본으로 Promise 함수입니다.
	- 메서드
		- Promise.prototype.catch(onRejected)
    		- Promise(promise)에 거부 처리기 콜백을 추가하고 호출된 경우 콜백의 반환값 또는 Promise가 대신 이행된 경우 그 원래 이행(fulfillment)값으로 결정하는(resolving) 새 Promise를 반환합니다.
		- Promise.prototype.then(onFulfilled, onRejected)
    		- Promise에 이행 또는 거부 처리기를 추가하고 호출된 처리기의 반환값 또는 Promise가 처리되지 않은 경우 그 원래 처리된(settled) 값으로 결정하는 새 Promise를 반환합니다 (즉 관련 처리기 onFulfilled 또는 onRejected가 undefined인 경우).

## Examples
1. Promise vs Non-Promise

```tsx
import * as Promise from 'promise';

class Car {
  private name: string;
  private doors: number;

  constructor(name: string, doors: number) {
    this.name = name;
    this.doors = doors;
  }
}

class PromiseTest {
  promiseCreateCar(name: string, doors: number): Promise<Car> {
    const promised_car = new Promise<Car>((resolve, reject) => {
      try {
        let car;
        setTimeout(() => {
          resolve(car = new Car(name, doors));
        }, 3000);
      } catch (error) {
        reject(Error(error));
      }
    });
    return promised_car;
  }

  nonPromiseCreateCar(name: string, doors: number): Car {
    try {
      let car;
      setTimeout(() => {
        car = new Car(name, doors);
      }, 3000);
      return car;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { Car, PromiseTest };
```

```tsx
class PromiseView {
  promise() {
    // Object { name: '아반떼', doors: 4 }
    this.promise_test.promiseCreateCar('아반떼', 4).then((car) => {
      console.log(car);
    }).catch((error) => {
      console.log(error);
    });
  }

  nonPromise() {
    // undefined
    const car = this.promise_test.nonPromiseCreateCar('벨로스터', 3);
    console.log(car);
  }
}
```
- 결론
	- Promies와 Non-Promise의 차이는 결국, 비동기로 처리하되 해당 결과를 동기화시키는가 아닌가에 달려있습니다. 위에서 얘기했던 것처럼 `Promise는 비동기 메서드가 동기 메서드처럼 값을 반환하도록 합니다.`로 요약할 수 있습니다.
	- 즉, Non-promise는 해당 값을 시간이 지난 후 동기화해주지 못하기 때문에, 해당 값을 사용하기 위해서는 promiseCreateCar안에서 해당 함수 값을 다시 호출하여 사용해야합니다.(CallBack Hell 문제 발생)

2. Promise All

```tsx
class PromiseTest {
  private getEvenValue(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try {
        const random = Math.ceil(Math.random() * 10);
        console.log(random);
        setTimeout(() => {
          if (random % 2 === 0) {
            resolve(random);
          } else {
            reject(random);
          }
        }, 300);
      } catch (error) {
        reject(Error(error));
      }
    });
  }

  promiseAll() {
    const getEven = this.getEvenValue();
    const getEven2 = this.getEvenValue();

    Promise.all([getEven, getEven2]).then((car) => {
      console.log('Promise All success', car);
    }).catch((error) => {
      console.log('Promise All error', error);
    });
  }
  // 4
  // 7
  // Promise All error 7
  // -----
  // 10
  // 4
  // Promise All success Array [ 10, 4 ]

  promiseRace() {
    const getEven = this.getEvenValue();
    const getEven2 = this.getEvenValue();

    Promise.race([getEven, getEven2]).then((car) => {
      console.log('Promise Race success', car);
    }).catch((error) => {
      console.log('Promise Race error', error);
    });
  }
  // 4
  // 9
  // Promise Race success 4
  // 3
  // Promise Race error 3
}
```

- 결론
  - Promise.all
    - Promise.all은 Promise를 인수로 받아 Promise 모두의 결과상태를 확인하여 처리합니다.
    - Promise로 구현된 로직에서 모두 성공이 필요한 로직일 경우 Promise.all을 통해 처리할 수 있습니다.
  - Promise.race
    - Promise.race는 Promise를 인수로 받아 결과 상태에 하나의 reject라도 있을 시 이를 거부하여 처리한다.

- 차이점
  - Promise.race와의 차이는 All은 모든 결과를 처리한 후 알려줍니다.

## Outro
간단한 코드를 통해 Promise를 확인했습니다. Promise를 사용하면 `해당 메소드를 비동기로 처리하고 이를 약속하여 결과를 기다리는 것`이라고 생각하면 좋을 것 같습니다. 이전 회사에서 Mithril이라는 Framework를 사용하였습니다. React와 비슷한 유형의 Script Framework입니다. 개발자 한 분이 Mithril stream 아키텍처에 대한 비판이라는 글로 이슈를 적었습니다. [Criticisms of Mithril's stream architecture](https://github.com/MithrilJS/mithril.js/issues/1391). 해당 글 안에 Promise 관련한 내용도 있으니 읽어보시면 좋을 것으로 판단합니다.

여기서 가장 인상깊었던 비판은 Mithril에 Request의 반환 값이 Promise로 해야된다는 내용입니다. 제가 사용할 때만해도 Promise였는데, 이전에는 Promise가 아닌 Stream으로 반환을 했었던 것 같습니다. Stream은 Mithril 안에서 Reactive하게 바인딩하여 처리할 수 있는 모듈입니다. 어쨋든, 해당 글에서 재밌는 토론들이 일어나는데, Request에 Promise를 꼭 반환해야하며 이것이 현재는 표준이로 받아들여진다는 것입니다. 제가 이글을 얘기하는 것은 결국, 비동기 요청에는 Promise는 이제 필수라는 것입니다. 더욱 중요한 것은 NodeJS 환경에서는 비동기 요청이 필수이기에 Promise는 필수라는 결론이 나옵니다.

간단한 예제를 통해 Promise를 확인했으며, [BlueBird](http://bluebirdjs.com/docs/getting-started.html)와 Promise도 같이 확인하면 좋을 것 같습니다. Promise-based ORM Sequelize에 BlueBird로 구현되어있습니다. 앞으로 Promise를 마주치면, 안에 무엇인가 있구나로 생각하면 더 편한 개발이 될 것이라 생각합니다. 감사합니다.

## References
- [JavaScript Mozila - Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [감성프로그래밍 - 바보들을 위한 Promise 강의](http://programmingsummaries.tistory.com/325)
