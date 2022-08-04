

(function () {
var speakWord = "Good Bye";
var byeSpeaker = {};

byeSpeaker = function speak(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})();
