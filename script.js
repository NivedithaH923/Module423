
(function (window) {
  var names = ["Maruthi", "Joseph", "Jen", "Jason","Nivi", "Paul", "Farhan", "Lorhan", "Paru", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byespeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);