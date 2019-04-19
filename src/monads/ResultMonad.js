"use strict";
module.exports = function (options) 
{
  const freeze_and_seal = require("../utils/freeze_and_seal")();

  /**
   * Result Monad. Is either ok (with Some value) or err (with Error).
   * This is just the shell object, returned new each time so nothing is changed unwittingly.
   */
  function ResultMonad ()
  {
    return freeze_and_seal({
      mtype: "ResultMonad", 
      ok: undefined, 
      err: undefined});
  }

  return ResultMonad;
}