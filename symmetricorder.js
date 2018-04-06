var setNo = 0;

while (true) {
   var N = parseInt(readline());
   var sorted = new Array(N);
   var start = [];
   var end = [];

   if (N === 0)
      break;   
   setNo++;
   print("SET " + setNo);
   for(var i = 0; i < N; i++) {
      var name = readline(); 
      if (i % 2 === 0)
         start.push(name);
      else
        end.unshift(name); 
   }
   sorted = start.concat(end);
   for (var j = 0; j < N; j++) {
      print(sorted[j]);
   }
}
