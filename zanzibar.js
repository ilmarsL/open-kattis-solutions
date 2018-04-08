var N = parseInt(readline());

for (var i = 0; i < N; i++) {
   var cases = readline();
   cases = cases.split(" ");
   var turtles = 0;
   var imported = 0;
   for (var j = 0; j < cases.length; j++) {
      turtles = parseInt(cases[j]);
      if (j >= 1) {
         if (turtles > parseInt(cases[j - 1] * 2)) {
            imported += turtles - parseInt(cases[j - 1] * 2);  
         }
      } 
   }
   print(imported);
}
