do {
  var searching = true;
  var tempArray = readline();
  if (parseInt(tempArray) === 0)
    break;
  else
    for (var i = 11;; i++) {
      if (getSum(parseInt(tempArray)) === getSum((parseInt(tempArray)*i))) {
        print(i);
        break;
      }
    }
} while(searching);

function getSum(number) {
  number = number.toString();
  number = number.split("");
  var total = 0;
  for (var i = 0; i < number.length; i++) {
    total += parseInt(number[i]);
  }
  return total;
}
