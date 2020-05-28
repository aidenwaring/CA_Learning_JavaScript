class Rectangle {
  // Ruby: def initialize(width, height)
  constructor(height, width){
    this.height = height
    this.width = width
  }

  area(){ // Within a class, functions do not require the function keyword or =>
    return this.height * this.width
  }
}

class Square extends Rectangle{ //Inherits from Rectangle
  constructor(width){
    super(width, width)
  }
}

let rect = new Rectangle(10, 20)
let sqr = new Square(15)
console.log(rect)
console.log(sqr.area())