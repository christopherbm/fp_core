"use strict";
const test = require("tape");
const is_mutable = require("../../src/utils/is_mutable")();

test('test is_mutable with mutable SType', function (t) 
{
  t.plan(1);
  t.equal(is_mutable({mutable: true}), true);
});

test('test is_mutable with immutable SType', function (t) 
{
  t.plan(1);
  t.equal(is_mutable({mutable: false}), false);
});