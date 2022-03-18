(condition) ? (if true, do this) : (otherwise, do this)

var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// used in React

// render () {
//   return (
//     <div className="row">
//       { //Check if message failed
//         (this.state.message === 'failed')
//           ? <div> Something went wrong </div> 
//           : <div> Everything in the world is fine </div> 
//       }
//     </div>
//   );
// }
//
// more reading
//https://reactjs.org/docs/conditional-rendering.html
