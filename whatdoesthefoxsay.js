var lines = parseInt(readline());
var sounds = "";
var knownSounds = [];

for (var i = 0; i < lines; i++) {
   sounds = readline();
   while (true) {
      var goes = readline();
      if (goes === "what does the fox say?") {
         filterFox();
         break;
      }
      addKnownSound(goes);
   }
}
//create an array of all known sounds
function addKnownSound(goes) {
   goes = goes.split(" ");
   knownSounds.push(goes[2]);
}

//filter known sounds out of the array
function filterFox() {
      var foxSounds = "";
      var allSounds = sounds.split(" "); //array of all sounds
      for (var j = 0; j < allSounds.length; j++) {
         if (knownSounds.indexOf(allSounds[j]) == -1) {
            //if the sound is not found in knownsounds
            foxSounds += allSounds[j] + " ";
         }
      }
      //remove last space from foxsounds
      foxSounds = foxSounds.slice(0, -1);
      print(foxSounds);
}
