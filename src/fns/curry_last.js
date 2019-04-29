"use strict";
module.exports = function (options) 
{
  const args_to_array = require("../utils/args_to_array")();
  
  /**
   * Wraps a function, applying the given argument as the last argument of the wrapped function.
   * @param {Any} lastVal - Last value to be applyed to wrapped function.
   * @param {Function} fn - Function that is wrapped by this currying process.
   * @returns {Function} - Returns a function.
   */
  function curry_last (lastVal, fn) 
  {
    return function () 
    {
      const args = args_to_array(arguments);
      args.push(lastVal);
      return fn.apply(null, args);
    }
  } 

  return curry_last;
}