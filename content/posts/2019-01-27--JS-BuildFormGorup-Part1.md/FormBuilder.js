/* eslint-disable no-underscore-dangle */
export const FORM_PROPERTIES = {
  key: 'key',
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

class FormBuilder {
  constructor(properties, options) {
    // 1. 함수를 생성할 때 가장 먼저 실행되는 것이 생성자이므로 생성자에서 유효성 검사를 실시합니다.
    const validtionProperties = this._checkPropertiesValidation(properties);
    if (!validtionProperties.hasError) {
      throw new Error(
        `Properties types('${validtionProperties.keys.join(', ')}') are invalid`
      );
    }
    this.properties = this._buildFormProperties(properties, options);
  }

  _checkPropertiesValidation = (properties) => {
    // 2. 유효성 검사는 위에서 언급한 Object 값을 이용하여 실행시켜줍니다.
    const invalidProperties = [];
    const isInvalidProperty = Object.keys(REQUIRED_CHECKING_TYPES).every(
      (key) => {
        if (properties[key]) {
          // 3. 주어진 변수에 값이 있다면, 해당 키를 이용하여 타입이 올바른지 확인합니다.
          const propertyType = typeof properties[key];
          const validType = REQUIRED_CHECKING_TYPES[key];
          const isMatch = validType === propertyType;
          if (!isMatch) {
            invalidProperties.push(key);
          }
          return isMatch;
        }
        return true;
      }
    );
    return {
      hasError: isInvalidProperty,
      keys: invalidProperties,
    };
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
    // Options
    {
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation = () => ({
        hasError: false,
        message: '',
      }),
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

  _handleOnGroupValidation = () => {
    const { key, hasError, message } = this.onGroupValidation();
    if (key === this.key && hasError) {
      this._setProperties({
        key,
        hasError,
        message,
      });
    }
    return this;
  };

  // 7. 해당 값의 유효성 감사를 실행하여 줍니다.
  _handleOnValidation = (value = this.properties.value) => {
    // 필수 값의 옵션은 쉽게 체크할 수 있어 FomrBuilder 내에 구현해놓았습니다.
    if (this.properties.isRequired && !value) {
      this.setProperties({
        hasError: true,
        message: this.properties.requiredMessage || 'Value is required',
      });
      return this;
    }
    // onValidation의 외부 Props값을 받았다면 클로저로 함수를 이용하여 유효성 검사값을 반영합니다.
    let isValidObject = this.onValidation(value);
    // 에러가 없다면, 그룹 값과 비교한 유효성 검사를 한 번 더 실시합니다.
    if (!isValidObject.hasError) {
      this._setProperties({
        ...isValidObject,
      });
      isValidObject = this._handleOnGroupValidation();
    }
    this._setProperties({
      ...isValidObject,
    });
    return this;
  };

  // 5. 새로운 newProperties의 있는 값만 기존 properties를 덮어줍니다.
  setProperties(newProperties) {
    this.properties = {
      ...this.properties,
      ...newProperties,
    };
    return this;
  }

  // 6. 값을 바꿀 때, 유효성 감사를 할 것인지에 대한 Option이 true라면 유효성 검사를 합니다.
  setValue(value) {
    if (this.properties.isOnChangeValidation) {
      this._handleOnValidation(value);
    }
    this.setProperties({
      value,
    });
    return this;
  }

  // 8. Properties 중 우리가 필요한 값만 가져오기 위함입니다.
  getPropertyBy(propertyKey) {
    return this.properties[propertyKey];
  }

  // 9. 현재 갖고있는 모든 Properties를 가져오기 위함입니다.
  getProperties() {
    return this.properties;
  }

  // 9. Form에 필요한 Values만 가져오기 위함입니다.
  getValues() {
    const { value, hasError, message, isRequired } = this.properties;

    return {
      value,
      hasError,
      message,
      isRequired,
    };
  }
}

export default FormBuilder;
