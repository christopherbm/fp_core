"use strict";
const test = require("tape");
const is_stype = require("../../src/utils/is_stype")();

test('test is_stype with SType', function (t) 
{
  t.plan(1);
  t.equal(is_stype({SType: "TEST"}), true);
});

test('test is_stype without SType', function (t) 
{
  t.plan(1);
  t.equal(is_stype(5), false);
});