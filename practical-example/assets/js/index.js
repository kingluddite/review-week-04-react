// user object
let user = {
  firstName: '',
  lastName: '',
}

// event handlers

let handleChange = (event) => {
  // grab the name and value from the inputs
  const { name, value } = event.target
  // show in console the values of name and value
  console.log(`${name} is equal to ${value}`)
  // set the user object's properties to values provided
  user[name] = value
}

// update UI
let displayPerson = () => {
  // grab the UI by the id of the HTML element
  // update the UI with the Object's new property values
  document.querySelector(
    '#output'
  ).textContent = `${user.firstName} ${user.lastName}`
}

// events
// docs - https://www.w3schools.com/jsref/event_oninput.asp
// anytime input changes call the handleChange function
document.querySelectorAll('input').forEach((element) => {
  element.oninput = handleChange
})

// when button is clicked call function that will update the UI
document.querySelector('button').onclick = displayPerson
