// 1. Create a function that takes in two arguments "key" and "value"
// 2. This function returns an object using those arguments
// 3. How can you do this?

// function objectify(key, value) {
//   let obj = {}
//   obj[key] = value
//   return obj
// }
// //
// console.log(objectify("title", "The Sun Also Rises"))

// but computed property names make life easier for us
// 1. We can use object literal notation
// 2. and assign the property as an object (without having to create it first)

// function objectify(key, value) {
//   return {
//     [key]: value,
//   }
// }

// console.log(objectify('title', 'The Sun Also Rises'))

// NOTE: Here the key argument can be ay expression as long as it is wrapped in brackets []
//
// see the practical example code for a practical example :)
