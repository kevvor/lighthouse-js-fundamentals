function concat(array1, array2) {
  var concatArray = [];
  for (var i = 0; i < array1.length; i++) {
    concatArray.push(array1[i]);
  } for (var i = 0; i < array2.length; i++) {
    concatArray.push(array2[i]);
  } return concatArray;
}