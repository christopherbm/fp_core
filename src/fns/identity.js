"use strict";
module.exports = function (options) 
{  
  /**
   * Returns a function that will simply return the given value.
   * @param {Any} val - Value to return.
   * @returns {Function} - Returns a function that returns the given value.
   */
  function identity (val) 
  {
    return function () { return val; }
  }

  return identity;
}