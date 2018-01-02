function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var split = body.split(" ");
  return split.length;
}

exports.entryModule = Entry;
