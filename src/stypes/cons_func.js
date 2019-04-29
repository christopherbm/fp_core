"use strict";
module.exports = function (options) 
{  
  /**
   * Synchronous function constructor.
   * @param {Function} fn - Function value.
   * @returns {SType} - Returns a stype function.
   */
  function cons_func (fn) 
  {
    let m = 
    {
      SType: "FUNCTION",
      mutable: false,
      value: fn,
    };
    return m;
  }

  return cons_func;
}