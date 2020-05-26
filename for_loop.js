// Initialiser | condition | increment
for (let i = 0; i < 10; i++) {
  console.log(i)
}

let favFoods = ["pizza", "cake", "chips"]

// for of loop

// 'of' for arrays, 'in' for objects
for (let food of favFoods) {
  console.log(food)
}

// Performs a for each loop in each elementin the favFoods array and runs a function accepting two arguments
favFoods.forEach(function(value, index){
console.log(`${value} is at index ${index}`)
})

// One liner of above loop
favFoods.forEach((value, index) => console.log(`${value} is at index ${index}`))

    /* Example of the function being seperated then being called later
    function foo(value, index){
      console.log(`${value} is at index ${index}`)
    }

    favFoods.forEach(foo)*/

let cohort = {
  name: "FastTrack 2020",
  students: 18,
  teacher: "Matt"
}

for (key in cohort) {
  // Prints each key in object
  console.log(key)
}

for (key in cohort) {
  // Prints each key and each value in the cohort object
  console.log(key, cohort[key])
}

