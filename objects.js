let obj1 = {}

obj1.name = "Alex"



console.log(obj1)

let student = {
  name: "Bob",
  age: 22,
  address: {
    street: "123 Test St",
    state: "NSW",
    city: "Sydney"
  }
}

console.log(student.address.state)

let obj = {}
let obj2 = new Object() //Ruby: Object.new
obj2.name = {}
obj2.name.address = "123 Test St"
console.log(obj2)