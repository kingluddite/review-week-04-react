import React from 'react'
import Input from './Input'
import { Form, Field } from 'react-final-form'

const renderInput = ({ input, meta }) => (
  <Input {...input} type='text' errorMessage={meta.touched && meta.error} />
)

const onSubmit = (values) => {
  console.log(JSON.stringify(values))
}

const required = (value) => {
  if (!value || value === '') {
    return 'This field is required'
  }

  return undefined
}

const allowedNames = (v) => {
  if (v === 'forbidden name') {
    return `"forbidden name" is not a valid customer id`
  }
}

const FinalForm = (props) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, invalid }) => (
      <div>
        <h2>Final Form</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name='customer-id'
            component={renderInput}
            validate={composeValidators(required, allowedNames)}
          />
          {/* <Input */}
          {/*   type='text' */}
          {/*   label='Customer ID' */}
          {/*   id='customer-id' */}
          {/*   name='customer-id' */}
          {/* /> */}
          <button type='submit' disabled={invalid}>
            Submit
          </button>
        </form>
      </div>
    )}
  />
)

// const composeValidators =
//   (...validators) =>
//   (value) => {
//     return validators.reduce((acc, cur) => acc || cur(value), undefined)
//   }
// Refactored
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )
export default FinalForm
