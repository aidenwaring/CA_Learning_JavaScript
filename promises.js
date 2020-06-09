// let ourPromise = new Promise((resolve, reject) => {})
// console.log(ourPromise)

let x = 2
let y = 5

let calculation = new Promise((resolve, reject) => {
  let answer = x + y

  if (isNaN(answer)) {
    reject("Input must be a number.")
  }

  resolve(answer)
})

// Main
calculation
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

console.log("End of file")