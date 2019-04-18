"use strict";
module.exports = function (options) 
{
  /**
   * Determines if a ResultMonad has some ok value.
   * @param {ResultMonad} result - ResultMonad to examine.
   * @returns {Boolean} - Returns whatever result has some ok value.
   */
  function is_ok (result)
  {
    if (result.ok != undefined) return true;
    return false;
  }

  return is_ok;
}