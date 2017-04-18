var example_1 = [ 1, 2, 3, 4, 5, 6, 7 ];
var example_1_length = example_1.length;

var example_2 = [ 3, 6, 7, 8, 9 ];
var example_2_length = example_2.length;

var example_3 = [ 6, 9, 2, 5, 1, 4 ];
var example_3_length = example_3.length;

function rearrange(array, length) {
  var temp = 0;
  for(var i = 1; i < length; i+= 2) {
    //prev element is greater than current
    console.log("compare " + array[i - 1] + " with " + array[i]);
    if(array[i - 1] > array[i]) {
      console.log("swapping " + array[i-1] + " with " + array[i]);
      temp = array[i - 1];
      array[i-1] = array[i];
      array[i] = temp;
    }
    //next element is greater than current
    console.log("compare " + array[i + 1] + " with " + array[i]);
    if(i + 1 < length && array[i+1] > array[i]) {
      console.log("swapping " + array[i+1] + " with " + array[i]);
      temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
    console.log("current array: " + array);
  }//end for
  console.log("final re-arranged array: " + array + "\n\n");
}//end rearrage

rearrange(example_1, example_1_length);
rearrange(example_2, example_2_length);
rearrange(example_3, example_3_length);
