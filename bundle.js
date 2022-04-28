(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require( "nggar-palindrome" );

function palindromeTester() {
     let string = prompt( "Please enter a string for palindrome tester: " );
     let phrase = new Phrase( string );
     let palindromeResult = document.querySelector( "#palindromeResult" );

     if ( phrase.palindrome() ) {
          palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
     } else {
          palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
     }
}

document.addEventListener( "DOMContentLoaded", function () {
     let button = document.querySelector( "#palindromeTester" );
     button = addEventListener( "click", function () {
          palindromeTester();
     } );
} );

},{"nggar-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Reverses a string.
function reverse( string ) {
     return Array.from( string ).reverse().join( "" );
}

// Defines a Phrase object
function Phrase( content ) {
     this.content = content;

     // Return content processed for palindrome testing
     this.processedContent = function processedContent() {
          return this.letters().toLowerCase();
     }

     // Return only letters in the content.
     this.letters = function letters() {
          return ( this.content.match( /[a-z]/ig ) || [] ).join( "" );
     }

     // Return true for palindrome, false otherwise.
     this.palindrome = function palindrome() {
          return this.processedContent() === reverse( this.processedContent() );
     }
}
},{}]},{},[1]);
