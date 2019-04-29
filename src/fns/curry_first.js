"use strict";
module.exports = function (options) 
{
  const args_to_array = require("../utils/args_to_array")();
  
  /**
   * Wraps a function, applying the given argument as the first argument of the wrapped function.
   * @param {Any} firstVal - First value to be applyed to wrapped function.
   * @param {Function} fn - Function that is wrapped by this currying process.
   * @returns {Function} - Returns a function.
   */
  function curry_first (firstVal, fn) 
  {
    return function () 
    {
      const args = args_to_array(arguments);
      args.unshift(firstVal);
      return fn.apply(null, args);
    }
  }

  return curry_first;
}