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
        .getPropertyBy(FORM_PROPERTIES.hasError)
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
