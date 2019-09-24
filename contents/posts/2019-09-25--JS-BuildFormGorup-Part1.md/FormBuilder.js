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
