"use strict";
module.exports = function (options) 
{
  /**
   * Returns the right value of a Pair.
   * @param {Pair} pair - a pair type.
   * @returns {Any} - Returns the right value of the type.
   */
  function cdr (pair) 
  { 
    return pair[1]; 
  }

  return cdr;
}