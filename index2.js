function addSquares(a, b){
  function square(x){
    return x * x
  }
  var added = square(a) + square(b)
  console.log(`The sum of ${a} squared and ${b} squared is ${added}. bitch...`)

}

addSquares(5, 6)
