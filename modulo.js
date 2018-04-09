Array.prototype.includes = function (element) {
   if (this.indexOf(element) === -1)
      return false;
   else
      return true;
}

var modulos = [];
for (var i = 0; i < 10; i++) {
   var number = parseInt(readline());
   if (!modulos.includes(number % 42))
      modulos.push(number % 42);
}
print(modulos.length);
