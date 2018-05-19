var nrNotes = parseInt(readline());
var notes = readline();

notes = notes.split(" ");

//calculate lentght of the lines
var linelength = 0;

function fillLine(letter) {
   var blank = " ";
   var filledLine = letter + ": ";
   if ((letter === 'F') || (letter === 'D') || (letter === 'B') || (letter === 'g') || (letter === 'e') || (letter === 'a')) {
      blank = "-";
   }
   for(var i = 0; i < notes.length; i++) {
      //check for notes that are length 1
      if (notes[i].length === 1) {
         if (notes[i] === letter) {
            

               filledLine += '*' + blank;
         }
         else {
            filledLine += blank + blank;
         }
      }
      else {
         //notes with lenght more than 1
         //get lenght
         var digit = notes[i][1];
         for (var j = 0; j < digit; j++) {
            if (notes[i][0] === letter) {
               filledLine += '*';
               //add space after double notes
               if (j === (digit -1)) {
                  filledLine += blank;
               }
            }
            else {
               filledLine += blank;
               //add more spaces here
               if (j === (digit -1)) {
                  filledLine += blank;
               }
            }
         }
      }
   }
   //remove space after last note
   filledLine = filledLine.substring(0,filledLine.length - 1);
   return filledLine;
}


print(fillLine('G'));
print(fillLine('F'));
print(fillLine('E'));
print(fillLine('D'));
print(fillLine('C'));
print(fillLine('B'));
print(fillLine('A'));
print(fillLine('g'));
print(fillLine('f'));
print(fillLine('e'));
print(fillLine('d'));
print(fillLine('c'));
print(fillLine('b'));
print(fillLine('a'));
