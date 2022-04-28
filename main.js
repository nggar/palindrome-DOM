let Phrase = require( "nggar-palindrome" );

let string = prompt( "Please enter a string for palindrome tester: " );
let phrase = new Phrase( string );

if ( phrase.palindrome() ) {
     alert( `${phrase.content} is a palindrome!` );
} else {
     alert( `${phrase.content} is not a palindrome.` )
}