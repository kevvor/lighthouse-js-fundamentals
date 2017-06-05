function range(start, end, step) {
  var someArray = [];
  if (start === undefined) {
    return someArray;
  }	else if (end === undefined) {
    return someArray;
  }	else if (step === undefined) {
    return someArray;
  }	else if (start > end) {
    return someArray;
  }	else if (step < 0) {
    return someArray;
  }	else {
    for (start; start <= end; start += step) {
      someArray.push(start);
    }
    return(someArray);
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
