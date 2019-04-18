"use strict";
module.exports = function (options) 
{
  const is_ok = require("./is_ok")();
  
  /**
   * Executes one of two functions depending on whether a ResultMonad is ok or err.
   * @param {ResultMonad} result - monad to use.
   * @param {Function} okFn - function to execute of result is ok.
   * @param {Function} errFn - function to execute if result is err.
   * @returns {Mixed} - Returns result of okFn or errFn.
   */
  function match_result (result, okFn, errFn) 
  {
    if (is_ok(result)) 
    {
      return okFn(result);
    }
    else 
    {
      return errFn(result);
    }
  }

  return match_result;
}