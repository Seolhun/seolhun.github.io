---
title: "[Javascript/Typescript] Static이란?"
author: Seolhun
category: "Javascript"
tags: ['Prototype', 'Javascript', 'Typescript', 'Class', 'Module']
cover: "javascript.jpeg"
---

Singleton Pattern을 구현하면서 static이 Javascript에서는 어떻게 작동되는지 궁금하여 간단히 알아보았습니다.

## Goal
- `static`의 작동원리와 활용법 이해
- TypeScript와 JavaScript의 코드 차이를 이해한다.

## Overview
정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.

## Content
1. 클래스 생성자 및 다른 메서드에서의 호출
    - 정적 메서드가 비정적 메서드에서 키워드 `this`를 써서는 직접적인 접근을 할 수 없다. 바른 호출 방법은 클래스 명칭을 쓰거나, 직접 CLASSNAME.STATIC_METHOD_NAME()을 이용하거나 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 즉 constructor : this.constructor.STATIC_METHOD_NAME()를 이용한다.

## Examples
```tsx
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI); // 6.28
console.log(Helpers.calcCircumference(8)); // 25.12
```

## Review
- JavaScript에서 static은 결국, 해당 instance를 class 혹은 function 안에 객체를 선언하여 해당 값을 담아놓는 것이다.
- TypeScript와 JavaScript 코드를 같이 보면 이것이 더 명확해진다.
```tsx
class StaticClass {
    private static size: number = 20;
    static getStaticClassSize() {
        return this.size * 2;
    }
}
```
```tsx
var StaticClass = /** @class */ (function () {
    Singleton.size = 20;
    StaticClass.getStaticClassSize = function () {
        return this.size * 2;
    };
    return StaticClass
}
```

## References
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static)
