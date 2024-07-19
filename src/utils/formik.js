import { objectAccessor } from "./object";

export function getFormikTextFieldHelperText(formik, key, helperText) {
  return !!objectAccessor(formik.touched, key) &&
    objectAccessor(formik.errors, key)
    ? objectAccessor(formik.errors, key)
    : helperText;
}

export function getFormikTextFieldError(formik, key) {
  return (
    !!objectAccessor(formik.touched, key) &&
    !!objectAccessor(formik.errors, key)
  );
}

/**
 *
 * @param {*} formik
 * @param {*} key
 * @returns
 */
export function getFormikTextFieldHelperTextAndErrorProps(
  formik,
  key,
  helperText
) {
  return {
    error: getFormikTextFieldError(formik, key),
    helperText: getFormikTextFieldHelperText(formik, key, helperText),
  };
}

/**
 * @param {*} formik
 * @param {*} key
 * @returns
 */
export function getFormikTextFieldProps(formik, key, helperText) {
  return {
    ...formik.getFieldProps(key),
    ...getFormikTextFieldHelperTextAndErrorProps(formik, key, helperText),
  };
}

export function getFormikCheckFieldProps(
  formik,
  key,
  checkedValue = true
  // unCheckedValue = false
) {
  const textFieldProps = getFormikTextFieldProps(formik, key);

  const value =
    typeof checkedValue === "boolean"
      ? !!textFieldProps.value
      : textFieldProps.value;
  return {
    ...textFieldProps,
    value: value,
    checked: value === checkedValue,
  };
  // return {
  //   checked: !!formik.values[key],
  //   onChange: (e) => formik.setFieldValue(key, e.target.checked),
  // };
}
