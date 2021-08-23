(function () {

    var names = ["Clark", "Ken", "Leomel", "Jewl", "Jeje", "Luffy", "Jcrush", "John Paul", "Jho", "Crush"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    