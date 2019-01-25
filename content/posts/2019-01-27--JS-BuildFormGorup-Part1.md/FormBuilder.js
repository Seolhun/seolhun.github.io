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
