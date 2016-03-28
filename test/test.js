#!/usr/bin/env node;
/* globals describe, it */
'use strict';
// Module dependencies.
var translit = process.env.NPM_COV ?
  require('../translit-cov') :
  require('../translit'),
// End of dependencies.
  assert = require('assert'), phrase = [[],
   ['Диакритика',
    'Съешь ещё этих мягких французских булок, да выпей же чаю!',
    'Sʺešʹ eŝë ètih mâgkih francuzskih bulok, da vypej že čaû!'],
   ['Беларускую',
    'З’ясі яшчэ гэтых мяккіх французскіх булак, ды выпі ж чаю!',
    'Z\'yasi yashche` ge`ty`x myakkix franczuzskix bulak, dy` vy`pi zh chayu!'],
   ['Български ',
    'Яжте повече от тези меки кифлички, но също така се пие чай!',
    'YAzhte poveche ot tezi meki kiflichki, no sa`stho taka se pie chaj!'],
   ['Македонски',
    'Јадат повеќе од овие меки францускиот ролни, па пијат чај!',
    'Jadat povek`e od ovie meki franczuskiot rolni, pa pijat chaj!'],
   ['Русский   ', //  'мірь', 'mi`r`'
    'Съешь ещё этих мягких французских булок, да выпей же чаю!',
    'S``esh` eshhyo e`tix myagkix franczuzskix bulok, da vy`pej zhe chayu!'
   ],
   ['Українська',
    'З’їж ще цих м’яких французьких булок, та випий же чаю!',
    'Z\'yizh shhe czy`x m\'yaky`x franczuz`ky`x bulok, ta vy`py`j zhe chayu!']];
describe('Проверка translit',
  function() {
    var a = phrase.length, b = 1, c, d, e, f;
    for (; a > b; b++) {
      c = phrase[b][1]; e = translit(c, b);
      d = phrase[b][2]; f = translit(d, -1 * b);
      it(phrase[b][0] + ' ==> ' + translit(phrase[b][0], b),
      function() {assert.deepEqual((c === f && e === d), true);});
    }
  }
);
