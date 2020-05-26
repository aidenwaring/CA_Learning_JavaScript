const multipleArguments = (...args) => {
  if (args.length == 0) { 
    return 0
  }

  let sum = args[0]
  for (i = 1; i < args.length; i++){ 
    sum = sum * args[i] 
  }
  return sum
}

console.log(multipleArguments(1, 2, 3, 4, 5)) //should return 1 * 2 * 3 * 4 * 5 => 120
console.log("---------------------")
console.log(multipleArguments(6, 4, 12, 1, 8)) //should return 6 * 4 * 12 * 1 * 8 => 2304

// Don't alter the lines below
// module.exports = {
// 	multipleArguments
// }