(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  // var wordArray = [];
  var split = body.split(" ");
  // wordArray.push(split);
  return split.length;
}

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
});

},{"./../js/back-it-up.js":1}]},{},[2]);
