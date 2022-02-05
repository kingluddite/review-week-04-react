import React from 'react'

// one: page refresh and object object
// const handleSubmit = (event) => {
//   alert(event)
// }

// two:
// preventDefault
// const handleSubmit = (event) => {
//   event.preventDefault()
//   alert(event)
// }

// three: undefined???
// log better than alert
// log event and target
// we are pointing to form which has no value
// const handleSubmit = (event) => {
//   event.preventDefault()
//   console.log(event.target.value)
// }

// four: - is math operator in js and causes issues
// const handleSubmit = (event) => {
//   event.preventDefault()
//   console.log(event.target.customer - id.value)
// }

// five: we get our input element
// but we need to grab our id using brackets and a string
// const handleSubmit = (event) => {
//   event.preventDefault()
//   console.log(event.target['customer-id'])
// }

// six: We have a value
// but we need to grab our id using brackets and a string
// we user types in value we finally get it
const handleSubmit = (event) => {
  event.preventDefault()
  console.log(event.target['customer-id'].value)
}

// conclusions
// PROS - EASY TO USE
// * pure js
// * no react specific knowledge needed

// CONS
// no immediate form feedback for validation
// bad UX
// doens't feel like modern frontent app

// WHEN TO USE THIS
// NEVER (super small cases to use this but very rare)

const HTMLForm = () => (
  <div>
    <h2>Native Form</h2>
    {/* add our event handler here */}
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        label='cusomer id'
        id='customer-id'
        name='customer-id'
      />
      <button type='submit'>Submit</button>
    </form>
  </div>
)

export default HTMLForm
