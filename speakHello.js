(function (window){
var speakWord = "Hello";
var helloSpeaker = {};

helloSpeaker = function (name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);
