---
author: Seolhun
banner: "/assets/covers/typescript.png"
category: "TS"
date: 2020-09-25
description: "Builder Pattern을 이용한 monad식의 FormGroup Builder 만들어보기"
subTitle: "Create a form group."
tags: ['TS', 'Form', "FormGroup"]
title: "[TS] Typescript로 Reactive한 FormGroup Builder 만들어보기 - Part 1"
---

## Intro

개인적으로 Typescript를 상당히 애용합니다. Bundler와 같이사용하면, Javascript에 다양한 모듈을 만들어 줄 수 있으며, 타입을 명시해줌으로써 함수와 객체에 대한 정의를 더 쉽게 할 수 있기 때문입니다.
당연히 기존 Script의 언어 장점을 잃어버리는 측면도 있습니다. 하지만, 이미 번들러를 통해서 ES5까지 호환할 수 있는 스크립트를 만들 수 있으며, TS-Compiler를 통해서 사전에 코드 에러를 방지할 수 있습니다.

<img src='/assets/images/contents/2019/ts-es6.png' width='100%' height='100%'>

또한, 워낙 위처럼 유명한 이미지처럼, Typescript는 이미 대부분의 Javascript의 기능들을 호환할 수 있게 만들수 있습니다. 특히, JS로만 개발하면 Typescript의 유저가 해당 모듈을 사용할 때, type경고 및 에러 등으로 사용이 원활하지 않게되는 경우가 있습니다. 이럴 때, type만 declare하는 경우도 있지만 typescript로 초기부터 개발하면 2개의 언어(사실 모두 JS)를 모두 쉽게 커버할 수 있습니다.

## Pre-requirement
- Typescript
  - ES6

기존에 작성된 JS코드를 TS로 변경하여 재작성 할 예정입니다. Jest를 이용하여 테스트로 코드의 유효성을 확인해볼 것입니다.

## Goals
JS로 만들어진 내용이 있기 때문에 해당 내용을 기반으로 JavaScript와 TypeScript를 비교하면서 무엇이 다른지에 중점을 두어 작성해보겠습니다.
이마 크게 달라진 것은 없을 것입니다. 결국 JS기 떄문에, Type이 있냐 없냐로 인한 메카니즘 차이이지 그 코어에 해당되는 메카니즘은 같기 때문입니다.


## 1. Build & Set Properties

Typescript에서는 Javascript와 다르게 각각의 Type만 선언하면 그 값을 컴파일 단계에서 확인 할 수 있습니다. 즉, 서비스 레벨에서 잘못 들어오는 값의 유효성 처리는 필요하겠지만, 개발단계에서의 오류는 개발 단계에서 오류/경고 처리를 할 수 있어 쉽게 해결할 수 있다는 것입니다. 

즉, Javascript

```ts
// Validation 처리에 필요한 구조 값
export interface ValidationResponse {
  hasError: boolean;
  message: string;
}

// UI에 사용되는 Form Value 타입
export interface FormBuilderValues {
  value?: string | number | boolean;
  hasError?: boolean;
  message?: string;
}

export interface FormBuilderProperties extends FormBuilderValues {
  key: string;
  htmlFor: string;
  type?: string;
  isRequired?: boolean;
  requiredMessage?: string;
  isFocus?: boolean;
  onValidation?: (value: string | number | boolean) => ValidationResponse;
}

export interface FormBuilderOptions {
  onGroupValidation?: (value: string) => ValidationResponse;
  isOnCreatedValidation?: boolean;
  isOnChangeValidation?: boolean;
}

export interface FormBuildeProps {
  properties: FormBuilderProperties;
  options: FormBuilderOptions;
  handleOnValidation: (value?: any) => FormBuilder;
  setProperties: (Properties) => FormBuilder;
  setValue: (value) => FormBuilder;
  getPropertyValueBy: (keyName: keyof FormBuilderProperties) => any;
  getProperties: () => FormBuilderProperties;
  getValues: () => FormBuilderValues;
}
```

> JS에서는 PropsTypes를 사용하지는 않았습니다. 해당 라이브러리를 사용하는 것이 더 좋을것으로 판단되지만, 결국, 해당 타입을 확인한다는 의미를 두었기 때문입니다. 
> 즉, 라이브러리를 배제한 JS와 TS를 비교하기 위해 해당 영역을 JS에서 더 Raw하게 적었다고 느끼실 수 있습니다.

```ts
export interface ValidationResponse {
  hasError: boolean;
  message: string;
}

export interface FormBuilderValues {
  value?: string | number | boolean;
  hasError?: boolean;
  message?: string;
}

export interface FormBuilderProperties extends FormBuilderValues {
  key: string;
  htmlFor: string;
  type?: string;
  isRequired?: boolean;
  requiredMessage?: string;
  isFocus?: boolean;
  onValidation?: (value: string | number | boolean) => ValidationResponse;
}

export interface FormBuilderOptions {
  onGroupValidation?: (value: string) => ValidationResponse;
  isOnCreatedValidation?: boolean;
  isOnChangeValidation?: boolean;
}

export interface FormBuildeProps {
  properties: FormBuilderProperties;
  options: FormBuilderOptions;
  handleOnValidation: (value?: any) => FormBuilder;
  setProperties: (Properties) => FormBuilder;
  setValue: (value) => FormBuilder;
  getPropertyValueBy: (keyName: keyof FormBuilderProperties) => any;
  getProperties: () => FormBuilderProperties;
  getValues: () => FormBuilderValues;
}

export class FormBuilder implements FormBuildeProps {
  properties: FormBuilderProperties;
  options: FormBuilderOptions;

  constructor(properties: FormBuilderProperties, options: FormBuilderOptions) {
    const formProperties = this._initForm(properties, options);
    this.properties = formProperties.properties;
    this.options = formProperties.options;
  }

  private _initForm = (
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
      onValidation = (value: string) => ({
        hasError: false,
        message: '',
      }),
    }: FormBuilderProperties,
    {
      onGroupValidation = (currentKey: string) => ({
        hasError: false,
        message: '',
      }),
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
    }: FormBuilderOptions,
  ) => {
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

  // tslint:disable-next-line:variable-name
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

  /**
   * Finished Methods
   */
  getValidation(): ValidationResponse {
    return {
      hasError: this.properties.hasError,
      message: this.properties.message,
    };
  }

  getPropertyValueBy(propertyKey: keyof FormBuilderProperties) {
    return this.properties[propertyKey];
  }

  getProperties() {
    return this.properties;
  }

  getValues(): FormBuilderValues {
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
