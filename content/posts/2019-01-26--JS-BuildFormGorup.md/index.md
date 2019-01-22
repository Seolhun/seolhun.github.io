---
author: Seolhun
category: "JS"
cover: "js.png"
date: 2019-01-26
title: "[JS/Functional] Funtional하고 Reactive한 FormGroup Builder 만들어보기"
description: "Builder Pattern을 이용한 monad식의 FormGroup Builder 만들어보기"
subTitle: "Create a form group."
tags: ['JS', 'Functional', 'Form', "FormGroup"]
---

## Intro

웹 개발을 하다보면 가장 기본적으로 사용되는 것은 Form이라는 것을 알게된다.
대부분의 웹 사이트에 방문하면 회원가입, 로그인이 없는 사이트는 거의 없을 것이며, 최소한 고객문의 등에 대한 공간은 어느 사이트에나 있을 것이다.
그렇다면, 개발자로서 이렇게 대중적으로 사용되는 Form을 구현하기 위해서는 어떻게 접근하는 것이 가장 좋을까?

먼저, 현재 JS 생태계를 지배하고 있는 React와 Vue, Agnular(?)의 입장에서 JS 코드를 바라보아야 한다. 
특히, UI와 관련된 모든 JS는 현재 3개의 Library(혹은 Framework)에 영향이 너무나 지대하므로, 이점을 간과해서는 안된다.
결국, 이번에 만들게 될 값들도 결국, UI에서 필요로하는 값들로 구현될 예정이기 때문이다.

둘째, 우리가 사용하는 UI는 결국 HTML과 CSS, JS의 결합이다. 그 중 이번 FormBuilder는 UI와 결합되기 전까지의 JS로 구성할 수 있는 독립적인 부분을 고려하여 설계할 것이다.
너무 추상적이라고 느낄 수 있다. 간단하게 얘기하면, HTML과 CSS에 사용될 값들을 JS에서 모두 다룰 수 있도록 할 예정이다. 이 부분은 앞으로 코드로 알아보자.

## Pre-requirement
- JS
  - ES6

JS로만 코드를 짤 예정이며, Jest를 이용하여 테스트로 코드의 유효성을 확인해볼 것이다.

## Goals
먼저, 이번 FromGroup을 만들기 위한 3가지 목표를 세웠다.

- Form Attributes
  - disabled
  - reqired
  - readonly
  - ...

Form 관련 Attributes의 값을 JS에서 다룰 예정이다. 특히, disabled와 requried는 필수로 다룰 에정이다. 
이유는 아래 항목인 Validation 항목과 아주 연관이 된 값이기 떄문이다.

- Validation
  - Group Validation
  - Form Valition  
  - Message

Form의 핵심은 Validation에 있다고 생각한다. 당연히, 편리하게 UI를 만들어주는 것도 중요하다.
하지만, 서버로 전송되기전에 데이터 형식에 어긋나는 부분들을 알기 쉽고, 정확하게 알려주어 데이터의 정합성을 높이는 것이 더 바람직하다.
이러한 부분들로 UI에 필요한 3개의 기능을 이번에 만들것이다.

- Reactive & Functional

Reactive & Functional은 코드로 보는 것이 가장 빠른 방법이다.
당연히 UI에 Reactive함은 State(React), data(Vue)... 등의 바인딩을 통해서 쉽게 해결할 수 있다.
하지만, JS근본적으로 Reactive & Functional한 코드를 통해 우리는 이를 Library(혹은 Framework)에 상관없이 독립적으로 만들 예정이다.


## Code & Description

### Form
```js
/* eslint-disable no-underscore-dangle */
export const FORM_PROPERTIES = {
  value: 'value',
  hasError: 'hasError',
  message: 'message',
  isRequired: 'isRequired',
  requiredMessage: 'requiredMessage',
  // Event/s
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
    // Options
    {
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
