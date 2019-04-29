"use strict";
const test = require("tape");
const is_immutable = require("../../src/utils/is_immutable")();

test('test is_immutable with mutable SType', function (t) 
{
  t.plan(1);
  t.equal(is_immutable({mutable: true}), false);
});

test('test is_immutable with immutable SType', function (t) 
{
  t.plan(1);
  t.equal(is_immutable({mutable: false}), true);
});