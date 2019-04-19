"use strict";
module.exports = function (options) 
{
  const args_to_array = require("../utils/args_to_array")();
  
  /**
   * Calls apply on the given function using null as "this" and passing the given args object as 
   *   an array.
   * @param {Function} fn - Function to call apply on.
   * @param {Arguments} args - Arguments object used in apply (converted to array first).
   * @returns {Any} - Returns fn return value.
   */
  function null_apply (fn, args) {
    return fn.apply(null, args_to_array(args));
  }

  return null_apply;
}