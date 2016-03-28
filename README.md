# iso_9
[![Home][home-img]][home-url][![License][lic-img]][lic-url][![Downlod][down-img]][down-url][![NPM][npm-img]][npm-url][![Build][travis-img]][travis-url][![Climate][climate-img]][climate-url][![Coverage][Coverage-img]][Coverage-url][![Inline docs][docs-img]][docs-url][![Dependency Status][depe-img]][depe-url]
### **Forward and reverse transliteration according to ISO 9 or ISO 9: 1995 or GOST 7.79-2000 system of A and B**

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
   e,                                                // Forward
   translit(e, -1 * a)                               // Reverse
  );
 }
};
example()
```
[home-img]: https://img.shields.io/badge/Home-Habrahabr.ru-blue.svg?style=flat-square
[home-url]: https://habrahabr.ru/post/250885/

[lic-img]: https://img.shields.io/badge/License-GPL-blue.svg?style=flat-square
[lic-url]: COPYRIGHT.md

[down-img]: https://img.shields.io/badge/GitHub-Latest-blue.svg?style=flat-square
[down-url]: https://github.com/xguest/iso_9_js/archive/last.zip

[npm-img]: https://img.shields.io/npm/v/iso_9.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/iso_9

[travis-img]: https://travis-ci.org/xguest/iso_9_js.svg?style=flat-square
[travis-url]: https://travis-ci.org/xguest/iso_9_js

[climate-img]: https://img.shields.io/badge/Climate-4.0-brightgreen.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/xguest/iso_9_js

[Coverage-img]: https://img.shields.io/badge/Coverage-100%-brightgreen.svg?style=flat-square
[Coverage-url]: https://coveralls.io/github/xguest/iso_9_js?branch=master

[docs-img]: https://img.shields.io/badge/Docs-100%-brightgreen.svg?style=flat-square
[docs-url]: http://inch-ci.org/github/xguest/iso_9_js

[depe-img]: https://img.shields.io/badge/Deps-none-brightgreen.svg?style=flat-square
[depe-url]: https://david-dm.org/xguest/iso_9_js
