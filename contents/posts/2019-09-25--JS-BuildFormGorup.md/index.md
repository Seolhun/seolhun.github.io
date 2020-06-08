---
author: Seolhun
banner: '/assets/covers/typescript.png'
category: 'TS'
date: 2019-09-25
title: '[JS] Javascript로 Reactive한 FormGroup Builder 만들어보기'
subTitle: 'Create a form group.'
description: 'Builder Pattern을 이용한 monad식의 FormGroup Builder 만들어보기'
tags: ['JS', 'Form', 'FormGroup']
---

## Intro

웹 개발을 하다보면 가장 많이 사용되는 기능은 Form이라고 생각합니다.
대부분의 웹 사이트에 방문하면 회원가입과 로그인이 없는 사이트는 거의 없을 것이며, 최소한 고객문의와 Contact 등에 대한 페이지는 어느 사이트에서나 필요하기 때문입니다.

그렇다면, 개발자로서 이렇게 많이 사용되는 Form을 구현하기 위해서는 어떻게 접근하는 것이 가장 좋을까요?
이러한 질문을 던져보면, Form을 자동화할 수 있는 Module을 만드는 것이 가장 좋을 것입니다. 그 중에서도 React, Vue, Agnular와 같은 Library(혹은 Framework)를 사용하면 쉽게 만들 수 있습니다. 하지만, 어느 곳에서나 사용할 수 있게 만들려면, 순수한 JS로만 작성하는 것이 가장 좋을 것입니다. 그래서 이번 블로그를 통해서 제가 직접 순수한 JS로 만들어 본 코드에 대해서 정리하고 공유드리는 시간을 가져보고자 합니다.

먼저, 현재 JS 생태계를 지배하고 있는 React와 Vue, Agnular의 입장에서 JS 코드를 바라보아야 합니다. 왜냐하면, UI와 관련된 모든 JS는 현재 3개의 Library(혹은 Framework)에 영향이 너무나 지대하므로, 이점을 간과할 수 없기 때문입니다.

그러므로 FormBuilder는 어느 UI Library(혹은 Framework)와 함께 사용하더라도 작동할 수 있게 구현 할 예정입니다.

둘째, 우리가 사용하는 UI는 결국 HTML과 CSS, JS의 결합입니다. 그 중 이번 FormBuilder는 UI와 결합되기 전까지의 JS로 구성할 수 있는 독립적인 부분을 고려하여 설계할 것입니다.
너무 추상적이라고 느낄 수 있습니다. 그래서 더 간단하게 얘기하면, HTML과 CSS에 사용될 값들을 JS에서 모두 다룰 수 있도록 할 예정입니다.

## Pre-requirement

- Javascript, Typescript
  - ES6

JS로만 코드를 짤 예정이며, Jest를 이용하여 테스트로 코드의 유효성을 확인해볼 것입니다.

## Goals

먼저, 이번 FromGroup을 만들기 위한 3가지 목표를 세웠습니다.

1. Form Attribution 값을 호환시켜야 합니다. 간단한 속성값으로는 아래와 같습니다.

- Form Attributes
  - disabled
  - reqired
  - ...

Form 관련 Attributes의 값을 JS에서 다룰 예정이며, 특히, disabled와 requried는 필수로 다룰 에정입니다.
이유는 아래 항목인 Validation 항목과 아주 연관이 된 값이기 떄문입니다.

2. Form에 들어가는 값들에 유효성 검사가 원활해야 합니다. 메세지도 포함해서요~

- Validation
  - Group Validation
  - Form Valition
  - Message

Form의 핵심은 Validation에 있다고 생각하며, 편리하게 UI를 만들어주는 것이 중요합니다.
하지만, 서버로 전송되기전에 데이터 형식에 어긋나는 부분들을 알기 쉽고, 정확하게 알려주어 데이터의 정합성을 높이는 것이 더 바람직합니다.
이러한 부분들로 UI에 필요한 3개의 기능을 이번에 만들것입니다.

3. Library(혹은 Framework)에 상관없는 값의 Observable한 코드

- Reactive

Reactive는 코드로 보는 것이 가장 빠른 방법입니다.
당연히 UI에 Reactive함은 State(React), data(Vue)... 등을 이용하여 쉽게 해결할 수 있습니다.(랜더링 이슈)
하지만, JS는 Reactive한 코드를 통해 Library(혹은 Framework)에 상관없이 이를 쉽게 값이 변하는 것을 구현할 수 있습니다.

## Code & Description

이제 코드로 알아 볼 시간입니다. 위의 목적을 달성하는 것을 차례로 코드를 작성해 봅시다.

FormGroup을 만들기 위해서는 먼저, Group안에 들어가는 Form의 input을 이용하여 진행 할 예정입니다.
input에는 text, checkbox 등이 있습니다. 먼저, text로 간단한 양식을 만들어보는 것을 진행해보겠습니다.

FormBuilder를 먼저 만들어봅시다. 이후에 FormGroupBuilder를 만들어봅시다.

## FormBuilder

이제 FormBuilder를 만들어 봅시다.

위에서 언급했듯이 우리에게 필요한 Goal은 3가지 입니다.

1. Form Attributes
2. Validation
3. Reactive Code

이 3가지를 채우기 위한 변수로 무엇이 있을까요? 한번 생각해봅시다.

## 1. Build & Set Properties

음. 생각해보셨나요?, 제가 선정한 값은 아래와 같습니다.

```js
export const FORM_VALUES = {
  /**
   * @requires
   * @type string
   */
  key: 'key',
  /**
   * @requires
   * @type string
   */
  htmlFor: 'htmlFor',
  // isNotRequired
  /**
   * @default '''
   * @type string
   */
  value: 'value',
  /**
   * @default false
   * @type boolean
   */
  hasError: 'hasError',
  /**
   * @default false
   * @type boolean
   */
  message: 'message',
  /**
   * @default 'text'
   * @type string
   */
  type: 'type',
  /**
   * @default false
   * @type boolean
   */
  isFocus: 'isFocus',
  /**
   * @default false
   * @type boolean
   */
  isRequired: 'isRequired',
};

export const FORM_PROPERTIES = {
  ...FORM_VALUES,
  /**
   * @default ''
   * @type string
   */
  requiredMessage: 'requiredMessage',
  /**
   * @default () => { hassError: false, message: '' }
   * @type function
   */
  onValidation: 'onValidation',
  /**
   * @default { hassError: false, message: '' }
   * @type function
   */
  onGroupValidation: 'onGroupValidation',
  /**
   * @default false
   * @type boolean
   */
  isOnCreatedValidation: 'isOnCreatedValidation',
  /**
   * @default true
   * @type boolean
   */
  isOnChangeValidation: 'isOnChangeValidation',
  /**
   * @default false
   * @type boolean
   */
};
```

Object에 담은 이유는 2가지 입니다.

1. 정의 된 값만을 사용하기 위함입니다. 이는 나중에 어떠한 값이 Props에 있고 유효하게 사용할 수 있는지 쉽게 알게해줍니다.
2. 해당 값이 생성될 때 키 값을 이용하여 Props의 타입을 체크할 예정이기 때문입니다.

2번 사항에 더 알아보겠습니다.

올바른 값이 오지 않았을 때 생성되면 컨트롤 할수 없는 버그를 만들 수 있기 때문에, 해당 값의 타입이 잘못되었음을 미리 알려주는 것이 제일 좋습니다.

그래서 추가로 타입을 체크하기 위한 값이 필요합니다. 해당 값은 typeof와 비교되어 사용될 값입니다.

```js
const REQUIRED_CHECKING_TYPES = {
  // Values
  key: 'string',
  value: 'string',
  hasError: 'boolean',
  message: 'string',
  isRequired: 'boolean',
  requiredMessage: 'string',
  // Events
  onValidation: 'function',
  // Options
  isOnCreatedValidation: 'boolean',
  isOnChangeValidation: 'boolean',
  onGroupValidation: 'function',
};
```

> 이 방법은 고려할게 더 많습니다. 특히, IE 9 이전 브라우저에서 function에 typeof를 사용하면 object의 값을 받게됩니다. 그러므로 해당 브라우저까지 호환시키려면 브라우저를 고려한 함수를 사용하여 값과 매칭시키는게 제일 좋을 것 같습니다.

차후 더 업데이트하면서 개선되어야 하지만, 간단하게는 현재 FormBuilder의 안정성을 위해 만들어졌습니다.

코드로 알아봅시다.

```js
export class FormBuilder {
  constructor(properties, options) {
    // 1. 함수를 생성할 때 가장 먼저 실행되는 것이 생성자이므로 생성자에서 유효성 검사를 실시합니다.
    if (!this._checkPropertiesValidation(properties)) {
      // 4. 주어진 값에 문제가 있다면, 어디에 문제가 있는지를 사용자(개발자)에게 알려줍니다.
      throw new Error('Properties types are not right');
    }
    // 5. 각 값들의 default 값을 만들어주기 위해 함수로 만들었습니다.
    const formProperties = this._initForm(properties, options);
    this.properties = formProperties.properties;
    this.options = formProperties.options;
  }

  _checkPropertiesValidation = (properties) => {
    // 2. 유효성 검사는 위에서 언급한 Object 값을 이용하여 실행시켜줍니다.
    const isValidProperty = Object.keys(REQUIRED_CHECKING_TYPES).every((key) => {
      if (properties[key]) {
        // 3. 주어진 변수에 값이 있다면, 해당 키를 이용하여 타입이 올바른지 확인합니다.
        const propertyType = typeof properties[key];
        const validType = REQUIRED_CHECKING_TYPES[key];
        return validType === propertyType;
      }
      return true;
    });
    return isValidProperty;
  };

  // 초기 선언된 js-doc에 맞게 만들어줍니다.
  _initForm = (
    {
      // Values
      htmlFor,
      key,
      value = '',
      type = 'text',
      hasError = false,
      message = '',
      isRequired = false,
      requiredMessage = '',
      isFocus = false,
      onValidation = () => ({
        hasError: false,
        message: '',
      }),
    },
    {
      // Options
      onGroupValidation = () => ({
        hasError: false,
        message: '',
      }),
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
    },
  ) => {
    if (!htmlFor) {
      throw new Error('htmlFor property is required. Set unique name to use Object key');
    }

    if (!key) {
      throw new Error('key property is required. Set unique name to use Object key');
    }

    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      isValidObject = onValidation(value);
    }

    const properties = {
      htmlFor,
      key,
      value,
      type,
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      isFocus,
      onValidation,
    };
    const options = {
      isOnCreatedValidation,
      isOnChangeValidation,
      onGroupValidation,
    };
    return {
      properties,
      options,
    };
  };
}
```

## 2. Set - Get : Properties & Values

다음으로는 properties에 담긴 값들을 Set & Get 하기 위한 함수들입니다.

중요한 것은 항상 모든 함수에는 return이 있어야한다는 것입니다. 이유는, 우리는 Reactive하게 사용하려면 함수의 연속된 호출을 위한 현재 객체를 return하는 것이 가장 바람직합니다.

> 저도 고민이 많은데, class를 이용하는 순간 객체지향 코드로 구성하겠다는 것과 같습니다. 즉, 그 둘을 완벽하게 분리해서 코드를 구성할 수도 있겠지만, 우리가 생각하는 FormBuilder에는 객체지향 요소로 고려하면 장점이 되는 것이 많습니다. 그래서, 객체지향 내부 함수를 최대한 Functional하게 구성하는게 여기서 더 좋은 방법이라고 생각합니다.

```js
export class FormBuilder {
  // ...

  // 1. 새로운 newProperties의 있는 값만 기존 properties를 덮어줍니다.
  setProperties(newProperties) {
    this.properties = {
      ...this.properties,
      ...newProperties,
    };
    return this;
  }

  // 2. 값을 바꿀 때, 유효성 감사를 할 것인지에 대한 Option이 true라면 유효성 검사를 합니다.
  setValue(value) {
    if (this.options.isOnChangeValidation) {
      this.handleOnValidation(value);
    }
    this.setProperties({
      value,
    });
    return this;
  }

  // 3. Properties 중 유효성 검사에 대한 값만 가져오기 위함입니다.
  getValidation() {
    return {
      hasError: this.properties.hasError,
      message: this.properties.message,
    };
  }

  // 4. Properties 중 우리가 필요한 값만 가져오기 위함입니다.
  getPropertyValueBy(propertyKey) {
    return this.properties[propertyKey];
  }

  // 5. 현재 갖고있는 모든 Properties를 가져오기 위함입니다.
  getProperties() {
    return this.properties;
  }

  // 6. Form에 값으로 사용되어야 할 Properties를 가져옵니다.
  getValues() {
    const { value, hasError, message } = this.properties;

    return {
      value,
      hasError,
      message,
    };
  }
}
```

## 3. HandleValidation

Properties로 주어진 onValidation과 onGroupValidation 함수를 이용하여 FormBuilder의 유효성 Properties를 변경할 예정입니다.

주의 할 점은 onValidation과 onGroupValidation의 return 값은 `{ hasError, message }` 구조를 가져야 한다는 것입니다.

또한, GroupValidation은 key값을 이용하여 해당 key값과 매칭되는 부분만 값을 변경합니다. 이는 FormGroupBuilder를 포스팅 할 때 다시 설명드리겠습니다.

```js
export class FormBuilder {
  // ...

  // 1. 해당 값의 유효성 감사를 실행하여 줍니다.
  handleOnValidation = (value = this.properties.value) => {
    // 필수 값의 옵션은 쉽게 체크할 수 있어 FomrBuilder 내에 구현해놓았습니다.
    if (this.properties.isRequired && !value) {
      this.setProperties({
        hasError: true,
        message: this.properties.requiredMessage,
      });
      return this;
    }

    // onValidation의 외부 Props값을 받았다면 해당 함수를 이용하여 유효성 검사값을 반영합니다.
    const isValidObject = this.properties.onValidation(value);
    this.setProperties({
      ...isValidObject,
    });

    // 에러가 없다면, 그룹 값과 비교한 유효성 검사를 한 번 더 실시합니다.
    if (!this.properties.hasError) {
      this.handleOnGroupValidation(this.properties.key);
    }

    return this;
  };

  // 8. 그룹 유효성 검사를 실시합니다.
  handleOnGroupValidation = (currentKey) => {
    const { key, hasError, message } = this.options.onGroupValidation(currentKey);
    if (key === this.key && hasError) {
      this._setProperties({
        key,
        hasError,
        message,
      });
    }
    return this;
  };
}
```

> 현재 \_를 사용한 이유는 private에 대한 개념이 없기에 이를 명시하기 위함입니다.
>
> > ModulePattern을 이용하여 클로저와 스코프를 이용하면 class 내에는 private을 사용할 수 있습니다만, class에 현재 스펙이는 private이 없으므로, 이렇게 작업하였습니다.

## 6. FormBuilder Completion

완성된 FormBuilder 코드는 아래와 같습니다.

```js
/* eslint-disable no-underscore-dangle */
export const FORM_VALUES = {
  /**
   * @requires
   * @type string
   */
  key: 'key',
  /**
   * @requires
   * @type string
   */
  htmlFor: 'htmlFor',
  // isNotRequired
  /**
   * @default '''
   * @type string
   */
  value: 'value',
  /**
   * @default false
   * @type boolean
   */
  hasError: 'hasError',
  /**
   * @default false
   * @type boolean
   */
  message: 'message',
  /**
   * @default 'text'
   * @type string
   */
  type: 'type',
  /**
   * @default false
   * @type boolean
   */
  isFocus: 'isFocus',
  /**
   * @default false
   * @type boolean
   */
  isRequired: 'isRequired',
};

export const FORM_PROPERTIES = {
  ...FORM_VALUES,
  /**
   * @default ''
   * @type string
   */
  requiredMessage: 'requiredMessage',
  /**
   * @default () => { hassError: false, message: '' }
   * @type function
   */
  onValidation: 'onValidation',
  /**
   * @default { hassError: false, message: '' }
   * @type function
   */
  onGroupValidation: 'onGroupValidation',
  /**
   * @default false
   * @type boolean
   */
  isOnCreatedValidation: 'isOnCreatedValidation',
  /**
   * @default true
   * @type boolean
   */
  isOnChangeValidation: 'isOnChangeValidation',
  /**
   * @default false
   * @type boolean
   */
};

// Will be improvement considering browser
const REQUIRED_CHECKING_TYPES = {
  key: 'string',
  htmlFor: 'string',
  value: 'string',
  hasError: 'boolean',
  isFocus: 'boolean',
  isRequired: 'boolean',
  message: 'string',
  onValidation: 'function',
  requiredMessage: 'string',
  type: 'string',
  // Group Options
  onGroupValidation: 'function',
  isOnCreatedValidation: 'boolean',
  isOnChangeValidation: 'boolean',
};

export class FormBuilder {
  constructor(properties, options) {
    if (!this._checkPropertiesValidation(properties)) {
      throw new Error('Properties types are not right');
    }
    const formProperties = this._initForm(properties, options);
    this.properties = formProperties.properties;
    this.options = formProperties.options;
  }

  _checkPropertiesValidation = (properties) => {
    const isValidProperty = Object.keys(REQUIRED_CHECKING_TYPES).every((key) => {
      if (properties[key]) {
        const propertyType = typeof properties[key];
        const validType = REQUIRED_CHECKING_TYPES[key];
        return validType === propertyType;
      }
      return true;
    });
    return isValidProperty;
  };

  _initForm = (
    {
      // Values
      htmlFor,
      key,
      value = '',
      type = 'text',
      hasError = false,
      message = '',
      isRequired = false,
      requiredMessage = '',
      isFocus = false,
      // Events
      onValidation = () => ({
        hasError: false,
        message: '',
      }),
    },
    {
      onGroupValidation = () => ({
        hasError: false,
        message: '',
      }),
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
    },
  ) => {
    if (!htmlFor) {
      throw new Error('htmlFor property is required. Set unique name to use Object key');
    }

    if (!key) {
      throw new Error('key property is required. Set unique name to use Object key');
    }

    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      isValidObject = onValidation(value);
    }

    const properties = {
      htmlFor,
      key,
      value,
      type,
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      isFocus,
      onValidation,
    };
    const options = {
      isOnCreatedValidation,
      isOnChangeValidation,
      onGroupValidation,
    };
    return {
      properties,
      options,
    };
  };

  handleOnValidation = (value = this.properties.value) => {
    if (this.properties.isRequired && !value) {
      this.setProperties({
        hasError: true,
        message: this.properties.requiredMessage,
      });
      return this;
    }

    const isValidObject = this.properties.onValidation(value);
    this.setProperties({
      ...isValidObject,
    });

    if (!this.properties.hasError) {
      this.handleOnGroupValidation(this.properties.key);
    }

    return this;
  };

  handleOnGroupValidation = (currentKey) => {
    this.options.onGroupValidation(currentKey);
    return this;
  };

  setProperties(newProperties) {
    this.properties = {
      ...this.properties,
      ...newProperties,
    };
    return this;
  }

  setValue(value) {
    if (this.options.isOnChangeValidation) {
      this.handleOnValidation(value);
    }
    this.setProperties({
      value,
    });
    return this;
  }

  getValidation() {
    return {
      hasError: this.properties.hasError,
      message: this.properties.message,
    };
  }

  getPropertyValueBy(propertyKey) {
    return this.properties[propertyKey];
  }

  getProperties() {
    return this.properties;
  }

  getValues() {
    const { value, hasError, message } = this.properties;

    return {
      value,
      hasError,
      message,
    };
  }
}

export default FormBuilder;
```

## Outro

이번 FormBuilder를 이용하여 ES6 기반의 많은 feature들을 이용할 수 있었습니다. 또한, 객체를 return하여 함수를 쉽게 재호출할 수 있다는 것을 알게되었습니다. 이러한 형식을 monad라고 많이 부릅니다. 특히, JQuery가 이러한 방식을 사용하였다는 것을 알 수 있습니다. 함수형에서도 compose, flow 등을 같이 사용하면 이러한 함수를 구현할 수 있습니다.

FormBuilder를 만들면서 가장 좋은 것은, FormGroup과 연계되어 생각하면 좋은데 React, Vue 등 을 이용할 때 해당 Builder를 이용하여 해당 객체를 State에 주입하여 사용하면 아주 쉽게 사용할 수 있다는 것입니다.

즉, 어떠한 Library(Framework)에서도 매번 함수를 새로 구성하여 쉽게 파편화되고 하드코딩되는 부분들을 구조적으로 방지할 수 있다는 것입니다. 당연히 아직 개선할 점이 있지만, Form을 생성하는데는 무리가 없어보입니다.

여기까지 글 읽어주셔서 감사합니다! :)

<img src='/assets/images/contents/2019/FormBuilderJsTest.png' width='100%' height='100%'>

## References

- [Form Attributes - w3schools](https://www.w3schools.com/html/html_form_attributes.asp)
- [typeof - MDN](https://developer.mozilla.org/ko/docs/Web/Javascript/Reference/Operators/typeof)
- [JQuery - Monad - stackoverflow](https://stackoverflow.com/questions/10496932/is-jquery-a-monad)
