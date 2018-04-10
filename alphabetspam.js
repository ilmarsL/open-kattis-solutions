var line = readline();
var whitespace = 0;
var lowercase = 0;
var uppercase = 0;
var symbols = 0;
for (var i = 0; i < line.length; i++) {
   if ((line.charCodeAt(i) >= 65) && (line.charCodeAt(i) <= 90))
      uppercase++;
   else if ((line.charCodeAt(i) >= 97) && (line.charCodeAt(i) <= 122))
      lowercase++;
   else if (line.charCodeAt(i) === 95)
      whitespace++;
   else
      symbols++;
}

print(whitespace / line.length);
print(lowercase / line.length);
print(uppercase / line.length);
print(symbols/ line.length);
