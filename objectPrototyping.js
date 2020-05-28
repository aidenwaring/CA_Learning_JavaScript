function Hero(name, level) {
  this.name = name
  this.level = level
}

Hero.prototype.shout = function() {
  return `My name is ${this.name}!!`
}

let conan = new Hero("Conan", 100)
let batman = new Hero("Batman", 60)

console.log(conan.shout())
console.log(batman.shout())