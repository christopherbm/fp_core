"use strict";
module.exports = function (options) 
{
  /**
   * Determines if an OptionMonad has some value.
   * @param {OptionMonad} option - OptionMonad to examine.
   * @returns {Boolean} - Returns whether option has some value.
   */
  function is_some (option) 
  {
    if (option.some != undefined) return true;
    return false;
  }

  return is_some;
}