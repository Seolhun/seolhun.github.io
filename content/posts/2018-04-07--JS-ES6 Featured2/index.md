---
title: "[Javascript/ES6] ES6부터 등장하는 개발자가 알아야 할 특징 - Part 2"
author: Seolhun
date: 2018-04-07
category: "Javascript"
tags: ['Javascript', 'ES6', 'Feature']
cover: "javascript.jpeg"
---
이번에는 저번 시간에 작성한 ES6 Featur Part1에 이어 Part 2에 해당되는 내용을 정리해볼까 합니다. 간단히 정리하였지만 필요한 기능들을 숙지하면 큰 도움이 될 것 같습니다.


## Intro
[ES6 특징 - Part 1](/posts/javascript/20180406-js-es6-featured-1/)을 먼저 정리하였으니, 2파트 모두 확인하실 분들은 블로그를 확인해주세요.

#### Part 1
1. Block-Scoped Constructs `let` and `const`
2. Arrow Functions
3. Default Parameters
4. Enhanced Object Literals
#### Part 2 New Built-In Methods
8. Template Literals
11. Classes
12. Modules

## 2. Contents
#### 7. New Built-In Methods
- Object Property Assign
  - `Object.assign`을 통해 자동으로 Destructuring 과정을 통해 객체 간 통합이 됩니다.

```js
let dest = { quux: 0 }
let src1 = { foo: 1, bar: 2 }
let src2 = { foo: 3, baz: 4 }

Object.assign(dest, src1, src2)
dest.quux === 0 // true
dest.foo  === 3 // true
dest.bar  === 2 // true
dest.baz  === 4 // true
```

- Find, FindIndex
  - 이 내용은 [Array에서 사용하면 좋을 메소드](posts/javascript/operators/20180407-js-goodarraymethods/)라는 블로그로 미리 정리해놓았습니다.
  - Find, FindIdex의 중요한 점은, `처음으로 찾는 값만` 결과 값으로 가져온다는 것입니다.

```js
[ 1, 3, 4, 2 ].find(x => x > 3) // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
```

- repeat
  - String.repeat이라는 메소드가 생겨 반복할 수 있습니다.

- String Repeating

```js
" - ".repeat(4 * 3) // " -  -  -  -  -  -  -  -  -  -  -  - "
"seolhun".repeat(3); // "seolhunseolhunseolhun"
```

- String Searching
  - 기존의 indexOf를 통해 확인하는 것을 다양한 메소드를 통해 쉽게 확인 할 수 있습니다.
  - sub-string과 같이 이용되어 2번째 argement를 잘 이용해야 합니다.

```js
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false
```

- Number Truncation
  - Negrative, Positive일 경우 조건을 다르게 줘야했던 것을 하나의 메소드로 처리할 수 있습니다.

```js
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0
```


 customer = { name: "Seolhun" }
let message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`
```

#### 9. Unicode & RegExp Literals
- Unicode
  - 기존의 Unicode는 parseInt를 했어야하지만, 이제는 추가적인 작업없이 비교가 가능합니다.

```js
// ES5
parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;

0o767 === 503

- Promise는 기존의 CallBack을 통해 이용하던 것들 추상화시킨 것으로 ES6부터 표준이 되었습니다.
  - 관련 내용은 이미 블로그에 작성하였습니다. [Seolhun Blog - Promise](/posts/javascript/operators/20180312-js-promise/)

```js
function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
```

#### 11. Classes
- `class`라는 표준이 등장하여 함수로만 정의하던 것을 대체하였습니다. 상당히 많은 내용이 있으니 코드로 작성하여 알아보겠습니다.
  1. `상속`이 가능해졌습니다.
  2. `static` 선언이 가능해졌습니다. static은 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없습니다.
  3. `getter`, `setter`

```js
class Shape {
  this.
  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
  static defaultRectangle () {
    return new Rectangle("default", 0, 0, 100, 100)
  }
}
class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y)
    this._width = width;
    this._height = height;
  }
  toString () {
    return "Rectangle > " + super.toString()
  }
  set width (width)  {
    this._width = width
  }
  get width () {
    return this._width
  }
  set height (height) {
    this._height = height
  }
  get height () {
    return this._height
  }
}
```

#### 12. Modules
- `modules`라는 기능이 생김으로써 코드의 모듈화를 할 수 있습니다.
  - global namespace를 사용하지 않고 모듈 별 `import/export` 기능을 사용할 수 있습니다.
  - `default` 속성도 사용할 수 있습니다.

```js
//  lib/math.js
export function sum (x, y) { return x + y };
export var pi = 3.141593;
export default (x) => Math.exp(x);

//  someApp.js
import * as math from "lib/math";
console.log(`2π = ${math.sum(math.pi, math.pi)}`);

//  otherApp.js
import { sum, pi } from "lib/math";
console.log(`2π = ${sum(pi, pi)}`);

// theOtherApp.js
import exp, { pi, e } from "lib/mathplusplus"
console.log(`e^{π} = ${exp(pi)}`)
```

## Outro
이렇게 ES6를 Part1, 2를 정리를 끝냈습니다. 이전에는 간단히 사용만 했지만 정리하면서 미쳐 알지 못한 사소한 정보들도 알게되면서 좋은 경험이 되었습니다. 특히, ES6를 잘 숙지하고 사용해야하는 이유는 브라우저 호환성 때문일 것입니다. 현대 표준으로 정의되어있지만 옛 브라우저(익스프롤러 9버전 등) 경우에서는 Babel과 같은 Polyfill을 사용해야하지만 브라우저가 인식하여 호환성을 고려한 개발에는 버전 별 기능을 잘 숙지해야 합니다.

이번을 계기로 ES6의 새로운 기능의 대부분을 알게되었습니다. 다음 시간에는 TypeScript의 기능을 알아보겠습니다. 이제는 먼저 코드로 개발하는 것 보다 먼저, 문서와 명칭 기본적인 특징들을 숙지하고 개발에 들어갈 수 있는 습관을 더더욱 들이도록 노력해야겠습니다.

## References
- [ES6-features.org/](http://es6-features.org/)
