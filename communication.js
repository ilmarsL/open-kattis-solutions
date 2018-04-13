var N = parseInt(readline());
var values = readline();
values = values.split(" ");

for (var j = 0; j < N; j++) {
   for (var i = 0; i < 256; i++) {
      var test = (i ^ (i << 1));
      if (test > 255) {
         test -= 256;
      }
      if (test === parseInt(values[j]))
         print(i);
   }
}
