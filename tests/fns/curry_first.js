"use strict";
const test = require("tape");
const curry_first = require("../../src/fns/curry_first")();

test('test curry_first', function (t) 
{
  t.plan(2);
  let curried = curry_first(1, function (val1, val2) 
  {
  	t.equal(val1, 1);
  	t.equal(val2, 2);
  });
  curried(2);
});