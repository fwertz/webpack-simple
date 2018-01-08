export default {
    errorBagName: 'verror', // change if property conflicts
    fieldsBagName: 'vfield',
    delay: 1000,
    locale: 'en',
    dictionary: null,
    strict: true,
    classes: true,
    classNames: {
      touched: 'touched', // the control has been blurred
      untouched: 'untouched', // the control hasn't been blurred
      valid: 'is-success', // model is valid
      invalid: 'is-warning', // model is invalid
      pristine: 'pristine', // control has not been interacted with
      dirty: 'dirty' // control has been interacted with
    },
    events: 'input|blur',
    inject: false,
    validity: false,
    aria: true,
    i18n: null, // the vue-i18n plugin instance,
    i18nRootKey: 'validations' // the nested key under which the validation messsages will be located
};