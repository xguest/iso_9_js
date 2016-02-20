# iso_9

Forward and reverse transliteration according to ISO 9 or ISO 9: 1995 or GOST 7.79-2000 system of A and B

Read translit.js file header

## Usage

```javascript
var translit = require('../translit');
function example() {
 var a, b = [
    [],
    ["Диакритика", "Съешь ещё этих мягких французских булок, да выпей же чаю!"],
    ["Беларускую", "З'ясі яшчэ гэтых мяккіх французскіх булак, ды выпі ж чаю!"],
    ["Български",  "Яжте повече от тези меки кифлички, но също така се пие чай!"],
    ["Македонски", "Јадат повеќе од овие меки францускиот ролни, па пијат чај!"],
    ["Русский",    "Съешь ещё этих мягких французских булок, да выпей же чаю!"],
    ["Українська", "З'їж ще цих м'яких французьких булок, та випий же чаю!"]
 ], c, d;
 for(a = 1; a < b.length - 1; a++) {
  c = b[a][0];                                       // Language
  d = b[a][1];                                       // Source
  e = translit(d, a);                                // Translit
  console.log(
   "%s - %s\nSource  : %s\nTranslit: %s\nReverse : %s\n",
   c,                                                // Language
   translit(c, a),                                   // Transliterated language
   d,                                                // Source
   e,                                                // Translit
   translit(e, -1 * a)                               // Reverse
  );
 }
};
example()

```