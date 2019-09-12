---
author: Seolhun
category: "Story"
banner: "/assets/covers/logo.png"
date: 2019-05-93
title: "[]"
description: "ES7 Decorator에 대해서 알아보며, 어떻게 사용하면 좋을지에 대해서 개인적으로 적어보며 코드와 함께 공유하고자 합니다."
tags: ['js', 'ts', 'es5', es6', 'es7', 'javscript', 'how to']
---

## Table of Contents
- [Intro](#Intro)
- [Contents](#Contents)
  - [What is Decorator?](#What is Decorator?)
  - [How to Setup Decorator?](#How to Setup Decorator?)
  - [When is Decorator executed?](#When is Decorator executed?)
  - [How to create Decorator](#How to create Decorator)
- [Test](#Test)
- [Outro](#Outro)
- [References](#References)

## Intro

저번 시간에 FormBuilder와 FormGroupBuilder를 작성해보았습니다. 
FormBuilder 함수를 작성하면서 가장 의미있었던 것은, React나 Vue에 state관련 함수를 이용하지 않고도 충분히 Reactive한 프로그래밍을 할 수 있다는 것입니다.
또한, 순수 JS만 사용하여 코드를 작성하면, Framework나 Library에 제한되지 않고 해당 함수를 재사용할 수 있는 장점이 있습니다.

즉, 프레임워크에 제약없는 코드를 만들기 위해서는 View와 ViewModel을 분리하여 순수 JS를 기반으로 ViewModel를 구현하는 것이 재사용을 높이는데 큰 도움이 된다고 생각합니다.
이번 FormBuilder처럼 ViewModel되는 부분들을 추상화할 방법들을 찾고 있는 가운데, `Decorator`를 사용하면 좀 더 재사용가능한 코드를 만들 수 있다는 확신을 갖게되었습니다.

그래서 이번시간에는 FormBuilder 내에 ES7 decorator를 사용해보면 좋겠다는 생각을 하였으며, FormBuilder를 기반으로하여 Decorator를 알아보고자 합니다.

## Contents
	
### What is Decorator?
Decorator는 @expression 표현식으로 사용되며, 클래스, 메서드 등 대부분의 함수(Function, Method)와 객체의 속성(Property) 또는 매개 변수에 사용 할 수 있는 특별한 종류의 `선언(함수)`입니다.

여기서 중요한 것은, decorator가 `함수`라는 것입니다. decorator는 함수로 구현할 수 있으며, HoC패턴과 상당히 유사하여 함수를 통해 다른 Class나 함수, 속성 등의 값을 인자로 받아 접근할 수 있습니다.

다른 언어에서는 Annotation이라는 이름으로 사용되지만, JS기준으로는 Decorator라고 명명합니다. 각각의 언어마다 Decorator의 구현체는 조금 다를지 몰라도, 결국 우리가 원하는 기능을 선언만으로도 사용할 수 있다는 공통점을 가지고 있습니다.

간단히 설명하면, 데코레이터는 선언적 방식으로 클래스, 메소드 또는 특성을 변경, 대체 또는 관찰할 수 있는 기능을 쉽게 제공해줍니다.

### How to Setup Decorator?
데코레이터는 ECMAScript2016에서 제안 된 표준입니다. Typescript [TS - compiler-options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)에서 "experimentalDecorators" 컴파일러 플래그를 설정하거나 [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) 플러그인을 설치하여 babel을 사용하여 활성화 할 수 있습니다.

### When is Decorator executed?
데코레이터로 정의된 함수는 데코레이터가 선언된 메소드가 실행되거나 클래스에 new를 통해 constructor가 실행(인스턴스화) 될 때가 아니라, 런타임 때 실행됩니다. 즉, 내부 함수가 반복적으로 실행되지 않습니다.

간단히 코드로 알아보겠습니다.

```js
function watchClassBy(targetProperty) {
  return function (constructor) {
    const original = constructor.prototype[targetProperty];

    constructor.prototype[targetProperty] = function () {
      const result = original.apply(this, arguments);
      console.error(result);
      return result;
    };
  };
}

@watchClassBy('setValue')
class FormBuilder {
  constructor(props, options) {
    console.log('Executed FormBuilder constructor');
    // ...
  }
	setValue(value) { 
		//...
	}
}

class SignInView extends React.Component {
	constructor(props) {
	  super(props);
	  console.log('Before Created Form ViewModel In SignInView');
	  this.signInForm = SignInFormGroup(props);
	  console.log('After Created Form ViewModel In SignInView');
	  // ...
	}
}
````

위 코드는 FormBuilder에 watchClassBy라는 Decorator를 사용하였습니다. 위 코드를 테스트해보면 아래와 같이 실행됩니다.

```
'Executed Decorator watchClassBy'
'Executed watchClassBy'
'Before Created Form ViewModel In SignInView'
'Executed FormBuilder constructor'
'After Created Form ViewModel In SignInView'
```

위 로그를 기반으로 런타임 때 실행된다는 의미는, Babel Code를 뜯어보면서 추측해 볼 수 있습니다.

```js
var FormBuilder = _decorate([(0, _decorator.watchClassBy)('setValue')], function (_initialize) {
	// ...
}
```

코드를 통해서 우리는 `_decorate` 함수가 _decorator.watchClassBy)('setValue') 함수를 체이닝하면서, 기존 Class, Method 혹은 함수를 변경할 것이라고 알아낼 수 있습니다.
나중에 Function, Property 등 Decorator의 코드도 확인해보면 `_decorate`를 통해 해당 코드의 인스턴스 전부터 Decorator가 체이닝 된다는 사실을 다시 확인 할 수 있습니다.

즉, Decorator는 기존 코드의 인스턴스화 전에 해당 객체의 기능을 변경, 대체 등을 처리한 뒤에 인스턴스화를 진행하게 됩니다. 
그렇디 않다면, 애초에 Decorator를 통해 기존 코드의 변경하거나 대체할 수 없 것입니다.

### How to create Decorator
그럼 데코레이터가 클래스에 적용되는 경우, 함수, 메소드에 적용되는 경우, 프로퍼티에 적용되는 경우 이렇게 세 가지로 나누어 코드를 살펴보겠습니다.

### Decorator for Class
```js
export function watchClassBy(targetProperty) {
  return function (constructor) {
    const original = constructor.prototype[targetProperty];

    constructor.prototype[targetProperty] = function () {
      const result = original.apply(this, arguments);
      console.error(result);
      return result;
    };
  };
}
````

기본적으로 Decorator Class에 사용되는 함수는 Class의 `constructor`(이상 생성자) 인자를 받게 됩니다.
생성자는 아직 인스턴스화가 되지 않은 객체(코드)를 의미하며, 해당 생성자가 실행되면 인스턴스가 만들어집니다.

코드를 훓어보면, 

1. 생성자 안에 존재하는 prototype의 targetProperty를 original로 보관.
2. 생성자 prototype에, 기존 original 함수를 실행하고 결과를 로그로 찍어주는 결과를 로그로 찍어주는 새로운 함수를 생성하여줍니다.

결국 우리는 decorator를 통해 우리는 Override와 Overloading을 쉽게 구현할 수 있다는 것을 알 수 있습니다.


### Decorator for Method
```js
export function timeout( milliseconds = 0 ) {
  return function(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      setTimeout(() => {
        originalMethod.apply(this, arguments);
       }, milliseconds);
    };
    return descriptor;
  }
}
````

기본적으로 Method를 구현하기에 앞서 각각의 함수 인자를 이해하는 것이 큰 도움이 될 것 같습니다.

target은 현재 메소드의 Context를 의미합니다. 즉, 현재 Method가 어느 Scope안에 존재하냐에 따라 달라지겠습니다.
class의 메소드라면 class 객체의 prototype값으 반환될 것입니다.

propertyKey는 현재 method 이름입니다. 

descriptor는 `value`, `configurable`, `enumerable`, `writable` property를 의미합니다. 
즉, 인스턴스화 전에 정의가 되어야 할 값들이 descriptor 인자에 속해있습니다. 그 중, value의 경우에는 구현체 코드이므로 상시 값이 존재햐 합니다.


### Decorator for Property
```js
export function logProperty(target, key) {
  let value;
 
  const getter = function() {
    console.log(`Get => ${key}`);
    return value;
  };
 
  const setter = function(newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    value = newVal;
  };
 
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}
````

## Outro

## References
- [MEDIUM - Create and Test Decorators in Javascript](https://medium.com/m/global-identity?redirectUrl=https%3A%2F%2Fnetbasal.com%2Fcreate-and-test-decorators-in-javascript-85e8d5cf879c%3Fsource%3Dbookmarks---------0---------------------)
- [Typescript HandBook - Decorator](https://github.com/microsoft/Typescript-Handbook/blob/master/pages/Decorators.md)
- [Naver D2 - Javascript Trends(2017)](https://d2.naver.com/helloworld/2809766)
