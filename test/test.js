#!/usr/bin/env node
var translit = require('../translit');

function example() {
 var a = "Съешь ещё этих мягких французских булок, да выпей же чаю!",
 //  var a = "мірь",          // Старославянский
 b = translit(a,  5);
 c = translit(b, -5);
 console.log("Транслируемая строка:\n%s\nТранслированная строка:\n%s\nОбратная трансляция:\n%s", a, b, c);
}

example();

