// one - turn into Class based component
import React, { Component } from 'react'

export class ControlledForm extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>Native Form</h2>
        {/* add our event handler here */}
        <form>
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
  }
}

export default ControlledForm
