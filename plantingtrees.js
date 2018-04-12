var N = parseInt(readline());
var days = 0;
var trees = readline();
trees = trees.split(" ");
trees.sort(function(a, b) {
   return (-1 * (a - b));

});
for (var i = 0; i < N; i++) {
   if (days < (parseInt(trees[i]) + i + 2))
      days = (parseInt(trees[i]) + i + 2); 
}
print(days);
