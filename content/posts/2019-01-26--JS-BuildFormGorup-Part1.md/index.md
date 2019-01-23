---
author: Seolhun
category: "JS"
cover: "js.png"
date: 2019-01-26
title: "[JS/Functional] Funtional하고 Reactive한 FormGroup Builder 만들어보기 - Part 1"
description: "Builder Pattern을 이용한 monad식의 FormGroup Builder 만들어보기"
subTitle: "Create a form group."
tags: ['JS', 'Functional', 'Form', "FormGroup"]
---

## Intro

웹 개발을 하다보면 가장 기본적으로 사용되는 것은 Form이라는 것을 알게됩니다.
대부분의 웹 사이트에 방문하면 회원가입, 로그인이 없는 사이트는 거의 없을 것이며, 최소한 고객문의 등에 대한 공간은 어느 사이트에나 있습니다.
그렇다면, 개발자로서 이렇게 대중적으로 사용되는 Form을 구현하기 위해서는 어떻게 접근하는 것이 가장 좋을까요?

먼저, 현재 JS 생태계를 지배하고 있는 React와 Vue, Agnular(?)의 입장에서 JS 코드를 바라보아야 합니다.
특히, UI와 관련된 모든 JS는 현재 3개의 Library(혹은 Framework)에 영향이 너무나 지대하므로, 이점을 간과할 수 없습니다.
또한, FormBuilder를 통해 만들게 될 값도 UI에서 필요로하는 값으로만 구현될 예정이기에 어느 Library(혹은 Framework)에서도 작동해야 합니다.

둘째, 우리가 사용하는 UI는 결국 HTML과 CSS, JS의 결합입니다. 그 중 이번 FormBuilder는 UI와 결합되기 전까지의 JS로 구성할 수 있는 독립적인 부분을 고려하여 설계할 것입니다.
너무 추상적이라고 느낄 수 있습니다. 그래서 더 간단하게 얘기하면, HTML과 CSS에 사용될 값들을 JS에서 모두 다룰 수 있도록 할 예정입니다. 이 부분은 앞으로 코드로 알아보도록 하겠습니다.

## Pre-requirement
- JS
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
  - Reactive & Functional

Reactive & Functional은 코드로 보는 것이 가장 빠른 방법입니다.
당연히 UI에 Reactive함은 State(React), data(Vue)... 등을 이용하여 쉽게 해결할 수 있습니다.(랜더링 이슈)
하지만, JS는 Reactive & Functional한 코드를 통해 Library(혹은 Framework)에 상관없이 이를 쉽게 값이 변하는 것을 구현할 수 있습니다.


## Code & Description
이제 코드로 알아 볼 시간입니다. 위의 목적을 달성하는 것을 차례로 코드를 작성해 봅시다.

FormGroup을 만들기 위해서는 먼저, Group안에 들어가는 Form의 input을 이용하여 진행 할 예정입니다.
input에는 text, checkbox 등이 있습니다. 먼저, text로 간단한 양식을 만들어보는 것을 진행해보겠습니다.

FormBuilder를 먼저 만들어봅시다. 이후에 FormGroupBuilder를 만들어봅시다.

## FormBuilder
이제 FormBuilder를 만들어 봅시다.

위에서 언급했듯이 우리에게 필요한 Goal을 보면, 
1. Form Attributes
2. Validation
3. Reactive Code
입니다.

이 3개를 채우기 위한 변수로 무엇이 있을까요? 한번 생각해봅시다. 

#### 1. Build & Set Properties
음. 생각해보셨나요?, 제가 선정한 값은 아래와 같습니다. 어떻게 이렇게 생각했냐구요? 당연히, 모든 값을 뚝딱하고 한번에 생각하진 못했습니다.
한 눈에 보이는 변수들은 생각한 것이 있지만, 그 외 여러가지 사항들은 과정 속에서 혹은 어떻게 구현할지를 고민 고민 끝에 넣은 값들입니다.

한번에 생각하셨다면, 여러분들은 정말 👍

```js
export const FORM_PROPERTIES = {
  // Values
  value: 'value',
  hasError: 'hasError',
  message: 'message',
  isRequired: 'isRequired',
  requiredMessage: 'requiredMessage',
  onValidation: 'onValidation',
  // Options
  isOnCreatedValidation: 'isOnCreatedValidation',
  isOnChangeValidation: 'isOnChangeValidation',
  onGroupValidation: 'onGroupValidation',
};
```
Object에 담은 이유는 2가지 입니다.

첫 째, 정의 된 값만을 사용하기 위함입니다. 이는 나중에 어떠한 값이 Props에 있고 유효하게 사용할 수 있는지 쉽게 알게해줍니다.
둘 째, 나중에 해당 값이 생성될 때 키 값을 이용하여 Props의 타입을 체크할 예정이기 때문입니다. 
올바른 값이 오지 않았을 때 생성되면 컨트롤 할수 없는 버그를 만들 수 있기 때문에, 해당 값의 타입이 잘못되었음을 미리 알려주는 것이 제일 좋습니다.

```js
class FormBuilder {
  constructor(properties, options) {
    if (!this._checkPropertiesValidation(properties)) {
      throw new Error('Properties type is not right');
    }
    this.properties = this._buildFormProperties(properties, options);
  }

  _checkPropertiesValidation = (properties) => {
    const isValidProperty = Object.keys(REQUIRED_CHECKING_TYPES).every(
      (key) => {
        if (properties[key]) {
          if (
            key === FORM_PROPERTIES.isRequired &&
            !properties[FORM_PROPERTIES.requiredMessage]
          ) {
            return false;
          }
          const propertyType = typeof properties[key];
          const validType = REQUIRED_CHECKING_TYPES[key];
          return validType === propertyType;
        }
        return true;
      }
    );
    return isValidProperty;
  };

  _buildFormProperties = (
    {
      // Values
      value,
      hasError = false,
      message = '',
      isRequired = false,
      requiredMessage,
      // Events
      onValidation = () => ({
        hasError: false,
        message: '',
      }),
    },
    {
      // Options
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation,
    }
  ) => {
    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      isValidObject = onValidation(value);
    }

    return {
      value,
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      onValidation,
      isOnCreatedValidation,
      isOnChangeValidation,
      onGroupValidation,
    };
  };
}
```

#### 2. Set - Get : Properties & Values

#### 3. HandleValidation

#### 4. Options

#### 5. FormBuilder Completedtion

```js
/* eslint-disable no-underscore-dangle */
export const FORM_PROPERTIES = {
  value: 'value',
  hasError: 'hasError',
  message: 'message',
  isRequired: 'isRequired',
  requiredMessage: 'requiredMessage',
  onValidation: 'onValidation',
  // Options
  isOnCreatedValidation: 'isOnCreatedValidation',
  isOnChangeValidation: 'isOnChangeValidation',
  onGroupValidation: 'onGroupValidation',
};

// Will be improvement considering browser
const REQUIRED_CHECKING_TYPES = {
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

class FormBuilder {
  constructor(properties, options) {
    if (!this._checkPropertiesValidation(properties)) {
      throw new Error('Properties type is not right');
    }
    this.properties = this._buildFormProperties(properties, options);
  }

  _checkPropertiesValidation = (properties) => {
    const isValidProperty = Object.keys(REQUIRED_CHECKING_TYPES).every(
      (key) => {
        if (properties[key]) {
          if (
            key === FORM_PROPERTIES.isRequired &&
            !properties[FORM_PROPERTIES.requiredMessage]
          ) {
            return false;
          }
          const propertyType = typeof properties[key];
          const validType = REQUIRED_CHECKING_TYPES[key];
          return validType === propertyType;
        }
        return true;
      }
    );
    return isValidProperty;
  };

  _buildFormProperties = (
    {
      // Values
      value,
      hasError = false,
      message = '',
      isRequired = false,
      requiredMessage,
      // Events
      onValidation = () => ({
        hasError: false,
        message: '',
      }),
    },
    {
      // Options
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation,
    }
  ) => {
    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      isValidObject = onValidation(value);
    }

    return {
      value,
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      onValidation,
      isOnCreatedValidation,
      isOnChangeValidation,
      onGroupValidation,
    };
  };

  _handleOnValidation = (value = this.properties.value) => {
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
    if (this.properties.isOnChangeValidation) {
      this._handleOnValidation(value);
    }
    this.setProperties({
      value,
    });
    return this;
  }

  /**
   * Finished Methods
   */
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

### FormGroup
```js
/* eslint-disable no-underscore-dangle */
import FormBuilder from './FormBuilder';
import { FORM_PROPERTIES } from '.';

class FormGroupBuilder {
  constructor(
    forms,
    {
      isDisabled = false,
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation = () => ({
        hasError: false,
        message: '',
      }),
    }
  ) {
    this.isDisabled = isDisabled;
    this.group = Object.keys(forms).reduce(
      (obj, key) => ({
        ...obj,
        [key]: new FormBuilder(
          {
            ...forms[key],
          },
          {
            isOnChangeValidation,
            isOnCreatedValidation,
            onGroupValidation,
          }
        ),
      }),
      {}
    );
    if (isOnCreatedValidation) {
      this._executeAllFormValidation();
    }
  }

  _executeAllFormValidation = () => {
    this.isDisabled = Object.keys(this.group).some((key) =>
      this.group[key]
        ._handleOnValidation()
        .getPropertyValueBy(FORM_PROPERTIES.hasError)
    );
    return this;
  };

  /**
   * Finished Methods
   */
  getHasErrorAllForm = () => this._executeAllFormValidation().isDisabled;

  getFormByName = (name) => this.group[name];

  getGroup = () => this.group;
}

export default FormGroupBuilder;

```

## Outro


## References
- [Form Attributes - w3schools](https://www.w3schools.com/html/html_form_attributes.asp)
