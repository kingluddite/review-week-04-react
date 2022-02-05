//
// styles here in App.css
//
// .input-text {
//   margin-bottom: 12px;
// }
//
// .input-text .error-message {
//   color: #d64541;
//   font-size: 80%;
// }
//
// input[type='text'] {
//   display: block;
//   width: 90%;
//   padding: 10px;
//   border-radius: 3px;
//   border: 1px solid grey;
// }
//
import React, { Component } from 'react'
import Input from './Input'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customerId: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({
      customerId: e.target.value,
    })
  }

  handleSubmit = (e) => {
    // disable default form submit behavior
    e.preventDefault()
    // show what the user added to state
    console.log(`The customer id is ${this.state.customerId}`)
  }

  isValid() {
    // check if field is empty
    if (this.state.customerId === '') {
      return false
    }

    // if we get here the field is not empty
    // so good to return
    return true
  }

  render() {
    return (
      <div>
        <h2>Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            label='cusomer id'
            id='customer-id'
            name='customer-id'
            onChange={this.handleInputChange}
            value={this.state.customerId}
            errorMessage={this.isValid() ? '' : 'This field is required'}
          />
          <button disabled={!this.isValid()} type='submit'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default ControlledForm
