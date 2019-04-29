"use strict";
const test = require("tape");
const curry_last = require("../../src/fns/curry_last")();

test('test curry_last', function (t) 
{
  t.plan(2);
  let curried = curry_last(2, function (val1, val2) 
  {
  	t.equal(val1, 1);
  	t.equal(val2, 2);
  });
  curried(1);
});