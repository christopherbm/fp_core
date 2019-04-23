"use strict";
module.exports = function (options) 
{
  /**
   * Returns the left value of a Pair.
   * @param {Pair} pair - a pair type.
   * @returns {Any} - Returns the left value of the type.
   */
  function car (pair) 
  { 
    return pair[0]; 
  }

  return car;
}