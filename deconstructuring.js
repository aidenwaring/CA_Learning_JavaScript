let people = ["garret", "hamish", "matt"]
// Destructures the array, assigns the first two elements of the deconstructed array into these variables
let morePeople = ["jane", "mary"]

let everyone = [...people, ...morePeople]

let favColours = {sally: "blue", tom: "red", scott: "purple"}

//Deconstructs the hash, uses sally to assign as the result of the value in the key value pair of the hash. Assign a default value for John
let {sally, john="white"} = favColours

console.log(sally, john)

let herosBirthplaces = {
  marvel: {ironman: "New York", thor: "Asgard" },
  dc: {batman: "Gotham City", superman: "Krypton" }
}

// Deconstruct hash
let { dc } = herosBirthplaces

// Deconstruct nested hash
let { dc: {batman } } = herosBirthplaces

console.log(dc, batman)