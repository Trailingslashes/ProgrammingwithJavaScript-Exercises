function factorial(n) {
  let result = 1;
  for (let counter = n; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}


console.log(factorial(10))

