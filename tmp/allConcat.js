var Entry = require('./../js/back-it-up.js').entryModule;

$(document).ready(function(){
  $('form#new-journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('#entry-list').append('<li>' + title + '</li>' + '<li>' + body + '</li>');
  });

  $('#word-count').click(function(){
    var title = $('#title').val();
    var body = $('#body').val();
    var userInput = new Entry(title, body);
    var wordCount = userInput.wordCount(body);
    $('#option-display').append("<li>" + wordCount + "</li>");
  });
});
