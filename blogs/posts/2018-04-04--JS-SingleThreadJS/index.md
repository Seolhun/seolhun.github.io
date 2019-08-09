---
title: "[JS] JS는 어떻게 싱글스레드로 작동되는가?"
author: Seolhun
date: 2018-04-04
category: "Javascript"
tags: ['Javascript', 'JS', 'EventLoop', 'Web Worker', 'Stack']
banner: "javascript.jpeg"
---

이번에 면접을 보면서 JS가 어떻게 Single Thread로 이벤트를 처리하는지에 대한 질문을 받고, WEb Worker라는 것에 대해서 알게 되었습니다.
간단하게 Single Thread로 이벤트를 처리한다고만 생각했고 더 이를 추론할 수 없었습니다. 그래서 이를 좀 더 알아보고자 이렇게 글로 정리해볼까 합니다.


## Intro
JS가 가장 많이 언급되는 특징은 `Single Thread`라는 것입니다.
JS가 Event를 처리하면서 어떻게 동시에 Ajax 등과 같은 Request가 요청되었을 때, 이를 바로 처리하지 않고 비동기로 나중에 처리할 수 있는지에 대한 질문이었습니다. 간단하게 생각하면 Queue에서 Message관리를 통해 처리한다고 생각했습니다. 하지만, 결국 Queue를 관리하기 위해서도 Thread는 필요합니다. 결국, Main Thread가 Queue 이를 관리하고 있어야하는데, Single Thread에서 이벤트를 관리하며 Queue를 따로 관리하는 것은 불가능합니다.

이를 이해하기 위해서는 JS Event Loop를 이해하면 좋을 것 같습니다.
<sub>
    <img src='..//images/contents/20180404/js/js-eventloop.png'>
</sub>

1. Call Stack, Heap, Queue
2. Single Event Loop(Event Handler)
  - Event Queue(Message Queue)
3. Non-Blocking I/O
  - Promise
    - Micro Message
4. Additional Runtime Network
  - Web APIs(Web Worker...)

## Contents
Javascript는 Stack, Heap, Queue 영역을 가지고 있습니다. 해당 영역 별 기능이 다르기 때문에 이를 숙지하면 Single Thread로 작동되는 원리를 더 잘 이해할 수 있습니다.

<sub>
    <img src='..//images/contents/20180404/js/js-eventloop.svg'>
</sub>

#### 1. Event 처리를 위한 영역들
##### - Stack
- Call Stack에서 해당 코드를 분석하여 어떠한 순서로 처리할지를 결정합니다.

코드로 간단하게 예제를 만들어보겠습니다.

```tsx
function delay() {
    for (var i = 0; i < 100000; i++);
}
function foo() {
    delay();
    bar();
    console.log('foo!'); // (3)
}
function bar() {
    delay();
    console.log('bar!'); // (2)
}
function baz() {
    console.log('baz!'); // (4)
}

setTimeout(baz, 10); // (1)
foo();
```

Javascript를 경험해본 사람이라면, 아무리 delay 함수가 10ms 보다 오래 걸린다고 해도 'baz!'가 'foo!' 보다 먼저 콘솔에 찍히는 일은 없을 거라는 것을 알수 있습니다. 즉, foo 내부에서 bar를 호출하기 전에 10ms이 지났다고 해도 baz가 먼저 호출되지는 않습니다. 그러므로 위의 예제를 실행하면 콘솔에는 'bar!' > 'foo!' > 'baz!'의 순서로 찍히게 됩니다.
`bar() > foo() > baz() 순으로 stack에서 비워집니다.`

##### - Heap
객체들은 Heap 안에 할당됩니다. Heap은 구조화되지 않은 넓은 메모리 영역을 지칭합니다. 참조되는 객체들의 주소가 이 Heap 영역에 존재합니다.

##### - Queue
Javascript는 런타임은 Message Queue를 가지고 있습니다. 이 Queue는 처리될 Message들의 리스트 입니다. 각 Message에는 함수가 연관 되어 있습니다. `Stack이 비어 있으면 Queue에서 하나의 Message가 꺼내지고 처리 됩니다.` 이 처리는 연관된 함수를 호출하는 것으로 구성됩니다 (결과적으로 초기 스택 프레임을 생성합니다). `Message 처리는 스택이 다시 비워질 때 종료 됩니다.`

#### 2. Event Loop에서 어떻게 처리할지 결정합니다.
1. stack에서 코드를 분석 한후 호출 순서를 정합니다.
2. stack의 호출 순서대로 queue에서 할당하여 처리합니다.
3. queue에서 모든 event가 처리되면 다음 Message를 기다립니다.
  - queue.waitForMessage 함수는 현재 아무 Message도 없다면 새로운 Message 도착을 동기적으로 기다립니다.
4. 이를 반복합니다.

```tsx
function delay() {
    for (var i = 0; i < 100000; i++);
}
function foo() {
    delay();
    console.log('foo!');
}
function bar() {
    delay();
    console.log('bar!');
}
function baz() {
    delay();
    console.log('baz!');
}

setTimeout(foo, 10);
setTimeout(bar, 10);
setTimeout(baz, 10);
```

해당 코드는 Stack에서 `foo() > bar() > baz()`를 순서대로 할당되기 때문에 이는 순차적으로 처리됩니다. 이를 Single Thread에서 동시적으로 처리하기 위해서는 `Promise 혹은 CallBack()`을 통한 비동기 통신을 이용해야 합니다. 이를 더 이해하기위해서는 3번의 Non-Blocking I/O를 이해하면 좋을 것 같습니다.

#### 3. Non-Blocking I/O를 통해 해당 Message를 처리하기 위한 요청을 실행합니다.
- Non-Blocking I/O을 통해 요청되면 해당 Message들을 처리(요청)하기 시작합니다.
- I/O 처리는 흔히 이벤트와 콜백(`Promise`)으로 처리 됩니다. 그래서 query 반환을 기다리거나 XHR 요청 반환을 기다릴 때에도 여전히 사용자 입력과 같은 다른 것을을 처리할 수 있습니다.

Non-Blocking I/O로 요청된 Message들은 callback 되어 완료됐음을 알려주면 Queue에 Message처리가 종료되고 Stack에서 완전히 비워집니다.

#### 4. Additional Runtime Network
> Web Worker는 script 실행을 메인 쓰레드가 아니라 백그라운드 쓰레드에서 실행할 수 있도록 해주는 기술 입니다. 이 기술을 통해 무거운 작업을 분리된 쓰레드에서 처리할 수 있으며, 이를 통해 메인 쓰레드(일반적으로 UI 쓰레드)는 멈춤, 속도저하 없이 동작할 수 있게 됩니다.

`웹 워커 또는 크로스 오리진 아이프레임은 자신의 스택, 힙, Message 큐를 가지고 있습니다.` 두 별개의 런타임들은 postMessage method를 통해서만 서로 통신할 수 있습니다. 이 메서드는 다른 런타임이 message 이벤트 핸들러를 등록하고 있다면 해당 런타임의 큐에 Message를 추가합니다.

[Web Woker Best Practice - Medium](https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)를 참고하면 더 많은 도움이 될 것 같습니다.

## Outro
JS가 어떻게 Single Thread이면서도 동시적으로 작업을 수행할 수 있었는지를 이번 블로그 정리를 통해 간단한 정보들을 알 수 있었습니다. 특히, Event Loop에서 Single Thread의 끊임없이 움직이면서 해당 Event들을 관리한다는 것을 이제는 머리 속에 그릴 수 있습니다. Non-Blocking I/O를 통해 Promise를 사용해야하는 이유 등 다양한 것들도 이해할 수 있었습니다. 추가적으로는 Web Worker 등을 이용하여 UI의 흐름을 별개의 Thread(backend)로 구성하여 병렬적으로 이벤트를 처리할 수 있을 것으로 보입니다.

이번 내용을 계기로 JS 개발자로서 앞으로 이를 더 학습해야 할 필요성은 확실히 느낄 수 있었습니다. 하지만, 많은 것을 참조하면서 이해하느라 부족한 것도 있었으며, 코드를 통해 여러가지를 더 확인해야 할 필요가 있다고 생각합니다. 더 학습하고 정리할 수 있는 시간을 갖도록 노력하겠습니다. 감사합니다.

## References
- [Mozilla - Event Loop](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop)
- [Mozila - Web Worker](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API)
- [NHN Tech Blog - Javascript와 이벤트 루프](http://meetup.toast.com/posts/89)
