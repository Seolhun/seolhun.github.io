---
title: [Typescript] Namespace란?
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2018-03-08
weight: 1
categories: ['Javascript', 'Typescript']
categories_weight: 10
tags: ['Javascript', 'Typescript', 'Namespace', 'Declare', 'Module']
tags_weight: 10
---
Typescript의 라이브러리 모듈을 사용하다보면은 namespace를 자주 접하게 됩니다. 해당 module을 만들 수 있도록 도와주는 namespace에 대해 간단히 공부했습니다.


## Overview
`namespaces`는 일정양의 코드를 조직화할 때 사용합니다. 이를 조직화하여 `Internal Modules`로 만드는 것이 주 목적입니다. 코드 묶음에 이름을 부여하여 해당 이름을 통해 어디서든 접근할 수 있게 만드는 것입니다.

어디서든 접근하기를 만들기 위해서는 `declare namespace Validation {}`처럼 namespace를 `declare(선언)`을 해주어야 합니다.

## Examples
#### - Singlefile - Not using `Namespace`
- 해당 파일에서만 정의되어 해당 type 별 사용만 가능합니다. 전혀 연관성이나 조직화되어 보이지 않습니다.

```tsx
interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? 'matches' : 'does not match' } '${ name }'.`);
    }
}
```

#### - Using `Namespace` File
- 해당 코드들을 Validation이라는 namespace로 묶어주어 Validation을 통해 접근이 가능해집니다.
- 이제야 연관성이나 조직성을 갖추어져 있는 것으로 보입니다.

```tsx
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`'${ s }' - ${ validators[name].isAcceptable(s) ? 'matches' : 'does not match' } ${ name }`);
    }
}
```

#### - Multiple using `namespaces`
- namespace를 사용하면 같은 namespace를 가져도 참조하여 사용할 수 있습니다.
- 각각의 파일을 참조하여 새롭게 정의하여주면, 해당 namespace에 `오버로딩`되어 조직화 할 수 있습니다.
---
- Validation.ts
```tsx
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
```
- LettersOnlyValidator.ts
```tsx
/// <reference path='Validation.ts' />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
```
- ZipCodeValidator.ts
```tsx
/// <reference path='Validation.ts' />
namespace Validation {
    const numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
```
- Test.ts
```tsx
/// <reference path='Validation.ts' />
/// <reference path='LettersOnlyValidator.ts' />
/// <reference path='ZipCodeValidator.ts' />

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`'${ s }' - ${ validators[name].isAcceptable(s) ? 'matches' : 'does not match' } ${ name }`);
    }
}
```

## References
- [TypeScript - Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
