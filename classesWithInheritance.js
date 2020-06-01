let person1 = {
  name: "bob",
  height: 180,
  eyes: "blue",
  goodbye: function() {
      return "Farewell from " + this.name
  },
  grow: function() {
      this.height += 20
  }
}

class Person {
  constructor(name, height, eyes) {
      this.name = name
      this.height = height
      this.eyes = eyes
      this.hunger = 50
  }

  eat() {
      this.hunger -= 20
  }

  speak() {
      return "Hello my name is " + this.name
  }
}

class Teacher extends Person {
  constructor(name, height, eyes, years) { //years employed as a teacher 
      super(name, height, eyes) //not passing years as person doesn't take years
      this.years = years
  }

  giveDetention() {
      return "You have detention"
  }
}

class Student extends Person {
  constructor(name, height, eyes, grade) { //years employed as a teacher 
      super(name, height, eyes) //not passing years as person doesn't take years
      this.grade = grade
  }

  talkBack() {
      return "Get Bent"
  }
}

new Teacher("a", 6, "e", 16)


let person2 = new Person("Tom", 160, "brown")
