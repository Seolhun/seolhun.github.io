/* eslint-disable no-underscore-dangle */
export const FORM_VALUES = {
  /**
   * @requires
   * @type string
   */
  value: 'value',
  /**
   * @requires
   * @type string
   */
  htmlFor: 'htmlFor',
  // isNotRequired
  /**
   * @default false
   * @type boolean
   */
  hasError: 'hasError',
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
  hasError: 'boolean',
  htmlFor: 'string',
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

class FormBuilder {
  constructor(props, options) {
    if (!this._checkPropertiesValidation(props)) {
      throw new Error('Properties type is not right');
    }
    this.key = props.key;

    const {
      value,
      hasError,
      message,
      isFocus,
      isRequired,
      requiredMessage,
      htmlFor,
      type,
      onValidation,
      // Group Options
      onGroupValidation,
      isOnCreatedValidation,
      isOnChangeValidation,
    } = this._buildFormProperties(props, options);

    this.value = value;
    this.hasError = hasError;
    this.message = message;
    this.isFocus = isFocus;
    this.isRequired = isRequired;
    this.requiredMessage = requiredMessage;
    this.htmlFor = htmlFor;
    this.type = type;
    this.onValidation = onValidation;
    // Group Options
    this.onGroupValidation = onGroupValidation;
    this.isOnCreatedValidation = isOnCreatedValidation;
    this.isOnChangeValidation = isOnChangeValidation;
  }

  _buildFormProperties = ({
    value = '',
    htmlFor = '',
    // isNotRequired
    hasError = false,
    message = '',
    isFocus = false,
    isRequired = false,
    requiredMessage = '',
    type = 'text',
    onValidation = () => ({
      hasError: false,
      message: '',
    }),
  },
  // Group Options
  {
    onGroupValidation = () => ({
      hasError: false,
      message: '',
    }),
    isOnCreatedValidation = false,
    isOnChangeValidation = true,
  }) => {
    if (!htmlFor) {
      throw new Error('htmlFor property is required. Set unique name to use Object key');
    }

    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      const onValidationResult = onValidation(value);
      isValidObject = {
        ...onValidationResult,
      };
    }

    return {
      value,
      isFocus,
      // isNotRequired
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      htmlFor,
      type,
      onValidation,
      // Group Options
      onGroupValidation,
      isOnCreatedValidation,
      isOnChangeValidation,
    };
  }

  _checkPropertiesValidation = (properties) => {
    const isValidProperty = Object
      .keys(REQUIRED_CHECKING_TYPES)
      .every((key) => {
        if (properties[key]) {
          const propertyType = typeof properties[key];
          const validType = REQUIRED_CHECKING_TYPES[key];
          return validType === propertyType;
        }
        return true;
      });
    return isValidProperty;
  }

  _handleOnValidation = (value = this.value) => {
    if (this.isRequired && !value) {
      this.setProperties({
        hasError: true,
        message: this.requiredMessage,
      });
      return this;
    }

    const isValidObject = this.onValidation(value);
    this.setProperties({
      ...isValidObject,
    });

    if (!this.hasError) {
      this.handleOnGroupValidation(this.key);
    }

    return this;
  }

  handleOnGroupValidation = (currentKey) => {
    this.onGroupValidation(currentKey);
    return this;
  }

  setProperties({
    // Props
    key = this.key,
    value = this.value,
    htmlFor = this.htmlFor,
    // isNotRequired
    hasError = this.hasError,
    isFocus = this.isFocus,
    isRequired = this.isRequired,
    message = this.message,
    requiredMessage = this.requiredMessage,
    type = this.type,
    // Events
    onValidation = this.onValidation,
    onGroupValidation = this.onGroupValidation,
    // Options
    isOnCreatedValidation = this.isOnCreatedValidation,
    isOnChangeValidation = this.isOnChangeValidation,
  }) {
    // Props
    this.key = key;
    this.value = value;
    this.htmlFor = htmlFor;
    // isNotRequired
    this.isFocus = isFocus;
    this.type = type;
    this.hasError = hasError;
    this.message = message;
    this.isRequired = isRequired;
    this.requiredMessage = requiredMessage;
    // Events
    this.onValidation = onValidation;
    this.onGroupValidation = onGroupValidation;
    // Options
    this.isOnCreatedValidation = isOnCreatedValidation;
    this.isOnChangeValidation = isOnChangeValidation;
    return this;
  }

  setRef = (ref = this.ref, isOverride = false) => {
    if (isOverride || (ref && !this.ref)) {
      this.ref = ref;
    }
    return this;
  }

  setValue(value, ref) {
    this.setProperties({
      value,
    }).setRef(ref);
    if (this.isOnChangeValidation) {
      this._handleOnValidation(value);
    }
    return this;
  }

  getValueBy(valueKey) {
    return this[valueKey];
  }

  getValues() {
    const {
      value,
      hasError,
      message,
    } = this;

    return {
      value,
      hasError,
      message,
    };
  }

  refFocus(ref) {
    this.setRef(ref);
    if (this.isFocus && this.ref) {
      this.ref.focus();
    }
    return this;
  }

  runValidation(value = this.value) {
    return this._handleOnValidation(value);
  }
}

export default FormBuilder;
