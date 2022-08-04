(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var firstAlphabet = names[i].charAt(0).toLowerCase();

  if (firstAlphabet === 'j') {
    byeSpeaker(names[i]);
  } else {
     helloSpeaker(names[i]);
  }
}
    })();
