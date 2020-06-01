class Dog {
  constructor(name, location) {
      this.name = name
      this.location = location
      this.walksArray = []
  }

  speak() {
      return `Woof! My name is ${this.name}`
  }

  walk(location, distance) {
      this.walksArray.push(new Walk(location, distance))
  }

  allWalks() {
      return this.walksArray
  }

  totalDistance() {
      let sum = 0
      this.walksArray.forEach(element => {
          sum += element.distance
      })
      return sum
  }
}