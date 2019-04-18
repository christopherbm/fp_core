"use strict";
module.exports = function (options) 
{
  const is_ok = require("./is_ok")();
  
  /**
   * Unwraps a ResultMonad or, if the result is err, returns a default value.
   * @param {ResultMonad} result - ResultMonad to unwrap.
   * @param {Function} elseFn - fn to execute if result is err.
   * @returns {Mixed} - Returns unwrapped result ok or return of elseFn.
   */
  function unwrap_or_else (result, elseFn) 
  {
    if (is_ok(result)) 
    {
      return result.ok;
    }
    return elseFn(result);
  }

  return unwrap_or_else;
}