/**
 * Takes a string and returns an array of phonetic descriptions of each letter of the string.
 *
 * dan@dans.im
 * 2011-12-20
 */

var map = {
	"a":"alfa",
	"b":"bravo",
	"c":"charlie",
	"d":"delta",
	"e":"echo",
	"f":"foxtrot",
	"g":"golf",
	"h":"hotel",
	"i":"india",
	"j":"juliet",
	"k":"kilo",
	"l":"lima",
	"m":"mike",
	"n":"november",
	"o":"oscar",
	"p":"papa",
	"q":"quebec",
	"r":"romeo",
	"s":"sierra",
	"t":"tango",
	"u":"uniform",
	"v":"victor",
	"w":"whiskey",
	"x":"xray",
	"y":"yankee",
	"z":"zulu",
	"0":"zero",
	"1":"one",
	"2":"two",
	"3":"three",
	"4":"four",
	"5":"five",
	"6":"six",
	"7":"seven",
	"8":"eight",
	"9":"nine",
	" ":"space",
	"!":"exclamation",
	"\"":"double quote",
	"#":"hash",
	"$":"dollar",
	"%":"percent",
	"&":"ampersand",
	"'":"single quote",
	"(":"left bracket",
	")":"right bracket",
	"*":"asterisk",
	"+":"plus",
	",":"comma",
	".":"period or dot",
	"/":"forward slash",
	":":"colon",
	";":"semicolon",
	"<":"less than",
	"=":"equals",
	">":"greater than",
	"?":"question mark",
	"@":"at",
	"[":"left square bracket",
	"\\":"backslash",
	"]":"right square bracket",
	"^":"caret",
	"_":"underscore",
	"`":"backtick or grave accent",
	"{":"left curly brace",
	"|":"pipe or broken vertical bar",
	"}":"right curly brace",
	"~":"tilde",
	"€":"euro",
	"£":"pound",
	"-":"dash",
};

function phonetics(str) {
	var arr = [];
	str = str.toLowerCase();
	for (c in str) {
		arr.push(map[str[c]]);
	}
	return arr;
}

if (typeof(exports) !== "undefined") exports.phonetics = phonetics;
