let obj = { age: 42 }

let obj2 = new Object({ name: "Bob" })  // Ruby: Object.new

obj2.name = {}

obj2.name.address = "123 mars way"



obj2 = obj    // Shallow copy (i.e. copies only the reference/pointer, not the object)

obj2 = { ...obj } // Deep copy (duplicates the actual object)

obj.age = 50

console.log(obj2)

obj2.age = 60

console.log(obj)



