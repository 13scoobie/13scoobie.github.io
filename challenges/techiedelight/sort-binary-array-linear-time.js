function sortBinaryArray(binary_array) {
  var zeroes = 0;
  for (var i = 0; i < binary_array.length; i++) {
    if (binary_array[i] == 0) zeroes++;
  }
  for (var j = 0; j < binary_array.length; j++, zeroes--) {
    if (zeroes > 0) binary_array[j] = 0;
    else binary_array[j] = 1;
  }
  console.log(binary_array);
}

var example_1 = [0,0,1,0,1,1,0,1,0,0];

console.log(example_1);
sortBinaryArray(example_1);