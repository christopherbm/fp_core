"use strict";
module.exports = function (options) 
{
  /**
   * Determines if an OptionMonad has none value.
   * @param {OptionMonad} option - OptionMonad to examine.
   * @returns {Boolean} - Returns whether option has none value.
   */
  function is_none (option) 
  {
    if (option.none === true) return true;
    return false;
  }

  return is_none;
}