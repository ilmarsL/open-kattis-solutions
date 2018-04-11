var line = readline();
line = line.split(" ");
var x = parseInt(line[0]);
var y = parseInt(line[1]);
var parking = [];
var zero = 0;
var one = 0;
var two = 0;
var three = 0;
var four = 0;

//filling the array
for (var i = 0; i < x; i++) {
   line = readline();
   line = line.split("");
   parking[i] = line;
}

//checking
for (var i = 0; i < (x - 1); i++) {
   for (var j = 0; j < (y - 1); j++) {
      var parkSpace = "";
      
      parkSpace += parking[i][j]; 
      parkSpace += parking[i + 1][j]; 
      parkSpace += parking[i][j + 1]; 
      parkSpace += parking[i + 1][j + 1]; 
     
      if ((parkSpace.match(/#/g) || []).length > 0) 
         continue; 
      if ((parkSpace.match(/X/g) || []).length === 0) 
         zero++;
      if ((parkSpace.match(/X/g) || []).length === 1) 
         one++;
      if ((parkSpace.match(/X/g) || []).length === 2) 
         two++;
      if ((parkSpace.match(/X/g) || []).length === 3) 
         three++;
      if ((parkSpace.match(/X/g) || []).length === 4) 
         four++;
   }
}

print(zero);
print(one);
print(two);
print(three);
print(four);
