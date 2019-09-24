---
author: Seolhun
banner: "/assets/covers/js.png"
category: "Javascript"
date: 2018-04-06
subTitle:  ""
tags: ['Javascript', 'ES6', 'Feature']
title: "[Javascript/ES6] ES6부터 등장하는 개발자가 알아야 할 특징 - Part 1"
---

Javascript, Typescript 등 다양한 Javascript를 번갈아 사용하면서, ES6의 새로운 기능이 무엇인지, Typescript만의 기능이 무엇인지 잘 구분하지 않았던 것 같습니다.
이번 시간을 계기로 ES6의 기능들과 Typescript의 기능들을 구분하여 정리해보겠습니다.

## Intro
#### ECMAScript란?
> 넷스케이프(Netscape)에서 1995년 개발한 자바스크립트(javascript)는 웹 브라우저에서 동적인 기능을 제공하기 위한 언어다. 현재는 대부분의 브라우저에서 이 언어를 제공하고 있다. 그런데 표준 규격없이 여러 브라우저에서 독자적인 특성이 추가되면서 호환성 문제가 발생하기 시작했다. 이에 ECMA 국제 기구에서 “ECMAScript Standard”라는 표준을 만들게 되었다. 정확히 이야기 하자면 현재의 자바스크립트는 ECMAScript와 BOM(Browser Object Model)와 DOM(Document Object Model)을 포괄하는 개념이다.

그렇다면, 이번 주제인 Typescript와 ES6의 특징들에 대해서 알아볼까 합니다.

#### Typescript vs ES6
<div class='text-center'>
  <img src="/assets/images/contents/20180406/es6/ts-es6.png" width="40%" height="40%">
</div>

Typescript에서 주로 사용되는 그림이다. 문제는 Typescript를 사용하다보면, 해당 기능들이 ES6부터 제공된 기능인지 Typescript에서 제공된 기능인지를 잘 모르고 사용할 때가 많았습니다. 특히, ES6부터는 Javascript의 격변이 시작되었고 상당히 중요한 기능들이 등장하기 시작했습니다. 가끔 누군가가 제게 이러한 기능들에 대해 물어보면 ES6의 기능인지 Typescript의 기능인지, 정확히 어떤 내용인지를 잘 설명하지 못하는 자신을 보고 꼭 정리할 필요성이 있다고 생각했습니다.

이번의 내용은 상당히 길어질 것으로 예상되어 2개로 나누어서 작성하겠습니다. 내용 목차는 아래와 같습니다. 연관성이 있는 것들을 묶으려고 노력했고, 작은 단위로 바로바로 알 수 있고, 알아야 할 것들로 순서를 정리했습니다.

#### Part 1
1. Block-Scoped Constructs `let` and `const`
2. Arrow Functions
3. Default Parameters
4. Enhanced Object Literals
5. Destructuring Assignment
6. Rest & Spread Operators

#### Part 2
7. New Built-In Methods
8. Template Literals
9. Unicode & RegExp Literals
10. Promises
11. Classes
12. Modules

## Contents
#### 1. Block-Scoped Constructs `let` & `const`
1. const
  - const는 상수를 선언하는 것으로 여러번 선언될 수 없지만, let과 같이 블록 내부로 유효 범위가 한정되므로 아래의 예시는 오류가 발생하지 않는다.
2. let
  -  let은 `{}` 블록 내부로 유효 범위가 한정되어 Scope가 기존의 var와 다르게 Scope의 영향을 받지 않는다.

```tsx
function testBlockScope(value = 10) {
  const PI = 3.14;
  try {
    PI = value // Error
  } catch(error) {
    // TypeError: Assignment to constant variable.
    console.error(error);
  }

  if(PI) {
    const PI = 5;
    console.log(PI); // 5
  }

  let local = 3;
  if(local == 3) {
    let local = 5; // 5
    local = value;
    console.log(`function if let : ${local}`) // 10
  }
  console.log(`function local let : ${local}`) // 3
}
testBlockScope();
```

테스트를 위해 만든 함수이지만 안에는 많은 내용이 내포되어있습니다.
1. const과 let 모두 Block-Scoped라는 명칭처럼 {} 안에서만 Scope의 영향력을 가져갈 수 있습니다. 이는 const가 에러난 부분과 상수임에도 다시 생성해도 문제가 되지 않는 부분을 비교하면 이를 더 잘 알 수 있습니다.
2. let은 const와 같이 Block Scope를 갖지만 재할당 할 수 있습니다. 또한, 블록 안에서만 Scope를 가지고 있기 때문에 재선언하면 같은 변수이름을 갖더라도 스코프 밖 변수에 영향을 주지 않습니다.

#### 2. Arrow Functions
Arrow Function의 장점은 기존 function의 Syntax 보다 간결하다는 것입니다. 그 중 가장 중요한 것은 `현재 객체 Context를 binding 한다.`는 것입니다.

```tsx
// ES5
let odds  = evens.map(function (v) { return v + 1; });
let pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
let nums  = evens.map(function (v, i) { return v + i; });

// ES6
let odds  = evens.map(v => v + 1)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)

// Lexical Scope: Binding: this
// ES5
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // 콜백은 `that` 변수를 참조하고 이것은 값이 기대한 객체이다.
    that.age++;
  }, 1000);
}

// ES6
function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  this.age = 0;

  setInterval(function growUp() {
    // 비엄격 모드에서, growUp() 함수는 `this`를 전역 객체로 정의하고, 이는 Person() 생성자에 정의된 `this`와 다름.
    this.age++;
  }, 1000);
}

var p = new Person();
```

#### 3. Default Parameter Values
ES6부터는 Default Parameter Values를 가질 수 있습니다. 함수 선언 시에 미리 작성해주고 값이 정의되지 않았으면 기본 값을 사용하고 값이 있으면 주어진 값을 사용합니다.

```tsx
function es5(x, y, z) {
  if (y === undefined) {
    y = 7;
  }
  if (z === undefined) {
    z = 42;
  }
  console.log(`es5 : ${x+y+z}`)
  return x + y + z;
};
es5(1) === 50;
function es6(x, y=7, z=42) {
  console.log(`es6 : ${x+y+z}`)
  return x + y + z;
}
es6(1) === 50;
es6(1, 6) === 49;
```

#### 4. Enhanced Object Literals
ES6부터는 기존의 Object를 생성하는 방식을 더 쉽고 간편하게 개선하였습니다.

1. 객체에서 바로 메소드를 정의할 수 있습니다.
2. 정의된 속성과 같은 경우 더 짧게 사용할 수 있습니다.

```tsx
// ES5
obj = {
  isMethod: function (a, b) {},
  x: x,
  y: y,
};
// ES6
obj = {
  isMethod (a, b) {},
  x,
  y,
};
```

#### 5. Destructuring Assignment
1. 비구조화된 객체 자체를 변수로 사용할 수 있습니다. (변수 기본 값도 할 수 있습니다.)
2. 비구조화된 객체를 개별로 할당할 수 있습니다.

```tsx
// ES5
function es5(arg) {
  let name = arg[0];
  let val  = arg[1];
  console.log(name, val);
};
es5(['Seolhun', 29]);

// ES6
function es6([ name, val ]) {
  console.log(name, val)
}
es6(['Seolhun', 29]);
function es6({ name }) {
  console.log(name)
}
// 비구조화된 객체를 개별로 할당할 수 있습니다.
es6({name: 'Seolhun'});
let { op, os } = {op: 1, os: 2};
op // 1
os // 2
```

#### 6. Rest & Spread Operators
- Rest
  - 나머지 인수를 가변 인수 함수의 단일 매개 변수로 사용 할 수 있습니다.

```tsx
// ES6
// Rest : 3개의 변수를 ...a 단일 매개 변수로 사용할 수 있습니다.
function es6(x, y, ...a) {
    return (x + y) * a.length
}
es6(1, 2, "Seolhun", true, 29); // ( 1 + 2 ) * 3 = 9
```

- Spread
  - 리터럴 요소와 개별 함수 매개 변수 모두에 반복 가능한 컬렉션 (배열 또는 문자열) 요소의 확산.

```tsx
// ES5
let es5_values = [ 'Seolhun', 29, true ];
let es5_spread = [ 1, 2 ].concat(es5_values);
es5_spread // [ 1, 2, 'Seolhun', 29, true ];

// ES6
// Spread
let es6_values = [ 'Seolhun', 29, true ];
let es6_spread = [ 1, 2, ...es6_values ];
es6_spread // [ 1, 2, 'Seolhun', 29, true ];

function spreadFunction(value) {
  if(typeof value === "string") {
    console.log(`String is ${value}`);
  } else if(typeof value === "boolean") {
    console.log(`Boolean is ${value}`);
  } else if(typeof value === "number") {
    console.log(`Number is ${value}`);
  }
}
spreadFunction(es6_spread);
```

## Outro
다음은 ES6 Feature Part 2라는 글로 마무리 하겠습니다. 이번 ES6의 기능만으로도 많은 것을 대체할 수 있다고 생각합니다. 잘 숙지해서 적시 적소에 사용하도록 노력해야겠습니다.

## References
- [ES6-features.org/](http://es6-features.org/)
