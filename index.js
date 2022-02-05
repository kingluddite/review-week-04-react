// EXAMPLE 1
// BEFORE SPREAD OPERATOR IN ES6
// WE HAD TO USE APPLY METHOD LIKE THIS
// function sum(x, y, z) {
//   return x + y + z
// }
//
// const numbers = [1, 2, 3]
//
// // console.log(sum.apply(null, numbers)) // 6
//
// NOW WITH SPREAD OPERATOR
//
// console.log(sum(...numbers)) // 6

// EXAMPLE 2
// INSIDE FUNCTION CALLS (AKA REST PARAMETER)
// function someFunc() {}
// func(...argument)

// CREATING/EXTENDING AN ARRAY/ITERABLE
// const arr = ['one', 'two']
// const newArr = [...arr, 'aa', 'bb', 'cc']
// console.log(newArr)

// function sum(...args) {
//   return args
// }
// const numbers = [1, 2, 3]
// console.log(sum(...numbers))

// HOW TO GET THE SUM OF ALL THE ARGUMENTS
// function sum(...args) {
//   return args.reduce((acc, a) => acc + a, 0)
// }
// const numbers = [1, 2, 3]
// console.log(sum(...numbers)) // 6

// PUSH ELEMENTS INTO ARRAY
// const arr = [1, 2]
// arr.push([1, 2, 3])
// console.log(arr) // [1, 2, [1,2,3] ]
// limitation of push is we have to push in elements one by one
// but pushing an array into an existing array we get the unwanted result of a multidimensional array

// OLD SOLUTION (AGAIN USING APPLY() METHOD)
// const arr = [1, 2]
// arr.push.apply(arr, [1, 2, 3])
// console.log(arr) // [1,2,1,2,3]
// NOT A GREAT SOLUTION
// NOT VERY READABLE

// A BETTER MORE ELEGANT READABLE WAY WITH REST
// const arrOne = [1, 2]
// const arrTwo = [1, 2, 3]
// arrOne.push(...arrTwo)
// console.log(arrOne) // [1,2,1,2,3]

// COPY AN ARRAY
// let arrOne = [1, 2]
// const arrTwo = [1, 2, 3]
// arrOne = [...arrTwo]
// console.log(arrOne) // [1,2,3]

// WE CAN COPY USING OBJECTS
// const a = { a: 1, b: 2 }
// const obj = { ...a }
// console.log(obj) // { a: 1, b: 2}

// CONCATENATING 2 ARRAYS
// let arrOne = [1, 2]
// const arrTwo = [1, 2, 3]
// console.log(arrOne.concat(arrTwo)) // [1,2,1,2,3]

// BUT WE CAN DO THE SAME AS ABOVE USING THE `...` OPERATOR
// NOTE: THREE DOTS IN JAVASCRIPT) IS CALLED THE SPREAD SYNTAX OR SPREAD OPERATOR
// let arrOne = [1, 2]
// const arrTwo = [1, 2, 3]
// console.log([...arrOne, ...arrTwo]) // [1,2,1,2,3]

// CONVERT A STRING TO AN ARRAY
// const greet = 'Hello'
// const greetArr = greet.split('')
// console.log(greetArr) //[ 'H', 'e', 'l', 'l', 'o' ]

// FIND MAX NUMBER IN AN ARRAY
// THIS DOESN'T WORK
// const numsArr = [1, 3, 40, 50]
// console.log(Math.max(numsArr)) // NaN

// WE COULD SOLVE USING APPLY() BUT SPREAT OPERATOR IS BETTER
// const numsArr = [1, 3, 40, 50]
// console.log(Math.max(...numsArr)) // 50

// MIN WORKS TOO!
// const numsArr = [1, 3, 40, 50]
// console.log(Math.min(...numsArr)) // 1
