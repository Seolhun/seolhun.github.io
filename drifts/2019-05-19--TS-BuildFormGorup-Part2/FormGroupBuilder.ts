/* eslint-disable no-underscore-dangle */
import FormBuilder, { FORM_PROPERTIES } from './FormBuilder';

export const FORM_GROUP_PROPERTIES = {
  /**
   * @default false
   * @type boolean
   */
  isAllChangeValidation: 'isAllChangeValidation',
  /**
   * @default false
   * @type boolean
   */
  isDisabled: 'isDisabled',
  /**
   * @default true
   * @type boolean
   */
  isOnChangeValidation: 'isOnChangeValidation',
  /**
   * @default false
   * @type boolean
   */
  isOnCreatedValidation: 'isOnCreatedValidation',
  /**
   * @default { key: '', watchKeys: ''. hassError: false, message: '' }
   * @type function
   */
  onGroupValidation: 'onGroupValidation',
};

class FormGroupBuilder {
  constructor(forms, {
    isAllChangeValidation = false,
    isDisabled = false,
    isOnChangeValidation = true,
    isOnCreatedValidation = false,
    onGroupValidation = () => ({
      hasError: false,
      message: '',
    }),
  } = {
    isAllChangeValidation: false,
    isDisabled: false,
    isOnChangeValidation: true,
    isOnCreatedValidation: false,
    onGroupValidation: () => ({
      key: '',
      watchKeys: '',
      hasError: false,
      message: '',
    }),
  }) {
    this.refs = null;
    this.storedKeyHavingWatchKeys = [];
    this.isAllChangeValidation = isAllChangeValidation;
    this.isDisabled = isDisabled;
    this.onGroupValidation = onGroupValidation;
    this.group = Object.keys(forms).reduce((obj, key) => ({
      ...obj,
      [key]: new FormBuilder({
        ...forms[key],
        key,
      }, {
        isAllChangeValidation,
        isOnChangeValidation,
        isOnCreatedValidation,
        onGroupValidation: this._handleOnGroupValidationBy,
      }),
    }), {});
    if (isOnCreatedValidation) {
      this._executeAllFormValidation();
    }
  }

  _isValidKey = (keys, targetKey) => {
    if (Array.isArray(keys)) {
      return keys.includes(targetKey);
    }

    return keys === targetKey;
  }

  _handleOnGroupValidationBy = (currentKey) => {
    const {
      key,
      watchKeys,
      hasError,
      message,
    } = this.onGroupValidation(this.group);

    if (key) {
      if (watchKeys && !this._isValidKey(this.storedKeyHavingWatchKeys, key)) {
        this.storedKeyHavingWatchKeys.push(key);
      }

      if (key && this.group[key]) {
        if (this._isValidKey(watchKeys, currentKey)) {
          this.group[key].setProperties({
            hasError,
            message,
          });
        }
        if (this._isValidKey(key, currentKey)) {
          this.group[key].setProperties({
            hasError,
            message,
          });
        }

        return this;
      }
    }

    this.storedKeyHavingWatchKeys.forEach((storedKey) => {
      if (this.group[storedKey]) {
        this.group[storedKey].setProperties({
          hasError,
          message,
        });
      }
    });
    return this;
  }

  _executeAllFormValidation = () => {
    const hasErrorKeys = Object.keys(this.group).filter(key => this.group[key]
      .runValidation()
      .getValueBy(FORM_PROPERTIES.hasError));

    if (this.isAllChangeValidation) {
      this.isDisabled = Array.isArray(hasErrorKeys) && hasErrorKeys.length > 0;
      if (this.isDisabled) {
        this.refsFocus(hasErrorKeys[0]);
      }
      return this;
    }

    this.isDisabled = Object.keys(this.group).some(key => this.group[key]
      .runValidation()
      .getValueBy(FORM_PROPERTIES.hasError));
    if (this.isDisabled) {
      this.refsFocus(hasErrorKeys[0]);
    }
    return this;
  }

  refsFocus = (name) => {
    if (this.refs && this.refs[[name]]) {
      this.refs[name].focus();
      return this;
    }

    if (this.group && this.group[[name]]) {
      this.group[name].refFocus();
      return this;
    }

    return this;
  }

  setRefs = (refs, isOverride) => {
    if (isOverride || (refs && !this.refs)) {
      this.refs = refs;
    }
    return this;
  };

  getFormGroupIsDisabled = () => this._executeAllFormValidation().isDisabled

  getFormByName = name => this.group[name]

  getFormGroup = () => this.group;

  runAllValidation = () => this._executeAllFormValidation()
}

export default FormGroupBuilder;
