# Forward and reverse transliteration according to ISO 9 or ISO 9: 1995 or GOST 7.79-2000 system of A and B

Usage example:

var translit = require('../translit');

function example() {
 var a = "Съешь ещё этих мягких французских булок, да выпей же чаю!",
 //  var a = "мірь",          // Старославянский
 b = translit(a,  5);
 c = translit(b, -5);
 console.log("Транслируемая строка:\n%s\nТранслированная строка:\n%s\nОбратная трансляция:\n%s", a, b, c);
}

example();
