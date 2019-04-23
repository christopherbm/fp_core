"use strict";
module.exports = function (options) 
{
  const Pair = require("./Pair")();

  /**
   * Constructs a Pair type. Use this instead of touch type directly.
   * @param {Any} car - left pair value.
   * @param {Any} cdr - right pair value.
   * @returns {Pair} - Returns a new Pair type.
   */
  function cons_pair (car, cdr)
  {
    return new Pair(car, cdr);
  }

  return cons_pair;
}