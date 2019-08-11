import React from "react"

const reduxFormField = Component => ({
  input,
  type,
  option,
  label,
  onBlur,
  meta: { touched, error }
}) => (
  <div>
    <Component
      {...input}
      type={type}
      option={option}
      label={label}
      onBlur={onBlur}
    />
    {touched && error && <p>{error}</p>}
  </div>
)

export default reduxFormField
