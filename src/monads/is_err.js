"use strict";
module.exports = function (options) 
{
  /**
   * Determines if a ResultMonad has some err value.
   * @param {ResultMonad} result - ResultMonad to examine.
   * @returns {Boolean} - Returns whatever result has some err value.
   */
  function is_err (result) 
  {
    if (result.err != undefined) return true;
    return false;
  }

  return is_err;
}