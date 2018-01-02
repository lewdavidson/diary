(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

  $('#vowel-count').click(function(){
    var title = $('#title').val();
    var body = $('#body').val();
    var userInput = new Entry(title, body);
    var vowelCount = userInput.vowelCount(body);
    $('#option-display').append("<li>" + "Vowels: " + vowelCount + "</li>");
  });

  $('#consonant-count').click(function(){
    var title = $('#title').val();
    var body = $('#body').val();
    var userInput = new Entry(title, body);
    var consonantCount = userInput.consonantCount(body);
    $('#option-display').append("<li>" + "Consonants: " + consonantCount + "</li>");
  });
});

},{"./../js/back-it-up.js":1}]},{},[2]);
