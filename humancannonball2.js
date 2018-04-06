var N = parseInt(readline());
for (var i = 0; i < N; i++) {
   var values = readline();
   values = values.split(" ");
   check(parseFloat(values[0]), parseFloat(values[1]), parseFloat(values[2]), parseFloat(values[3]), parseFloat(values[4])); 
}

function check(v, theta, x1, h1, h2) {
   theta = theta * (Math.PI / 180);   
   var t = x1 / (v * Math.cos(theta));
   var y = v * t * Math.sin(theta) - (9.81 * (t * t) * 0.5);
   if ((h2 - y > 1) && (y - h1 > 1)){
     print("Safe");
   }
   else
     print("Not Safe");
}
