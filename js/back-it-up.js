function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var split = body.split(" ");
  return split.length;
};

Entry.prototype.vowelCount = function(body) {
  var vowel = 0;
  var vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  var split = body.split("");
  for (var i = 0; i < split.length; i++) {
    for (var index = 0; index <= vowelArray.length; index++) {
    if (split[i] === vowelArray[index]){
      vowel ++;
    }
   }
  }
  return vowel;
};

Entry.prototype.consonantCount = function(body){
  var consonant = 0;
  var vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  var split = body.split("");

  for (var i = 0; i < split.length; i++) {
    if (split[i] !== vowelArray){
      consonant ++;
      console.log(split[i]);
    }
   }
  return consonant;
};

exports.entryModule = Entry;
