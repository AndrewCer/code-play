var numerals = {
  'I': 1,
  // 'IV': 4,
  'V': 5,
  // 'IX': 9,
  'X': 10
}
//standard
// var convertedInput = 0;
// var convertedArray = [];
// var romanConvert = function (input) {
//   for (var i = 0; i < input.length; i++) {
//     for (var key in numerals) {
//       if (key === input[i]) {
//         convertedArray.push(numerals[key]);
//         convertedInput += numerals[key]
//       }
//     }
//   }
// }
// romanConvert('IV');
// for (var i = 0; i < convertedArray.length; i++) {
//   if (convertedArray[i] < convertedArray[i + 1]) {
//     convertedInput = convertedArray[i + 1] - convertedArray[i]
//   }
// }
// console.log(convertedArray);
// console.log(convertedInput);


//recursion
// var convertedInput = 0;
var convertedArray = [];
var numberConvert = function (input) {
  for (var i = 0; i < input.length; i++) {
    for (var key in numerals) {
      if (key === input[i]) {
        convertedArray.push(numerals[key]);
      }
    }
  }
}

var romanConvertRecur = function (input, length) {
  if (length === 0) {
    return 1
  }
  else {
    if (input[length] > input[length - 1]) {
      return input[length] - romanConvertRecur(input, length - 1)
    }
    else {
      return input[length] + romanConvertRecur(input, length - 1)
    }
  }
}

numberConvert('IV');
if (convertedArray.length - 1 === 0 ) {
  console.log(convertedArray[0]);
}
else {
  var result = romanConvertRecur(convertedArray, convertedArray.length - 1)
  console.log(result);
}
