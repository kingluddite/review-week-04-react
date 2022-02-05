import React from 'react'
import Input from './Input'
// HOC - Higher Order Component (takes in component and returns another component)
// part of functional programming
import { reduxForm, Field } from 'redux-form'

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

const ReduxForm = ({ handleSubmit, valid }) => (
  <div>
    <h2>Redux Form</h2>
    <form onSubmit={handleSubmit}>
      <Field
        name='customer-id'
        component={renderInput}
        validate={[required, allowedNames]}
      />
      {/* <Input */}
      {/*   type='text' */}
      {/*   label='Customer ID' */}
      {/*   id='customer-id' */}
      {/*   name='customer-id' */}
      {/* /> */}
      <button disabled={!valid} type='submit'>
        Submit
      </button>
    </form>
  </div>
)

export default reduxForm({
  form: 'my-customer-form',
  onSubmit,
})(ReduxForm)
