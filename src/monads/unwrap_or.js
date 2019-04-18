"use strict";
module.exports = function (options) 
{
  const is_ok = require("./is_ok")();
  
  /**
   * Unwraps a ResultMonad or, if the result is err, returns a default value.
   * @param {ResultMonad} result - ResultMonad to unwrap.
   * @param {Mixed} def - Default value to return if result is err.
   * @returns {Mixed} - Returns unwrapped result ok or default value.
   */
  function unwrap_or (result, def) 
  {
    if (is_ok(result)) 
    {
      return result.ok;
    }
    return def;
  }

  return unwrap_or;
}