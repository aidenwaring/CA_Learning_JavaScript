let count = 3

while (count > 0 ) {
  console.log(count--)
  // Post decrement, counts the current value, then decreases the value
}

//

let students = []
students.push("Sarah")

input = prompt("What is your name?", "Enter name")
console.log("")

students.push(input)
console.log(students)

let count = 0

while (count > 3){
  input = prompt("What is your name?", "Enter name")
  students.push(input)
  count++
}