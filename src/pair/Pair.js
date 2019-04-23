"use strict";
module.exports = function (options) 
{
  const freeze_and_seal = require("../utils/freeze_and_seal")();

  /**
   * Pair. A tuple.
   */
  function Pair (car, cdr)
  {
    return freeze_and_seal({
      SType: "Pair", 
      0: car, 
      1: cdr});
  }

  return Pair;
}