## About

Phonetic phrase helper is a mini-JS app (and library) that allows you to enter a password or phrase and have the phonic from the NATO phonetic alphabet printed out alongside each character. This allows you to easily give out a password or spell words over the phone whilst learning the phonetic alphabet at the same time.

## Quick start

 * Visit http://dansimau.github.com/phonetic-phrase-helper/ and type in your password.
 
 * Include `phonetics.js` into your Node project.

   Eg.:

    var phonlib = require("./phonetics.js");
    console.log(phonlib.phonetics("foobar"));

## Note about security

The app and conversion is done entirely in client-side JavaScript (from a browser) so your password is never sent to the server. I encourage you to <a href="https://github.com/dansimau/phonetic-phrase-helper">examine the source code</a> or <a href="https://github.com/dansimau/phonetic-phrase-helper/zipball/gh-pages">download</a> the app to your computer.

## Compatibility

 * Browser page works in Chrome 18, Firefox 8 and Safari 5
 * `phonetics.js` library compatible with Node.js
