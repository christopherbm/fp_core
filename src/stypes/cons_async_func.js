"use strict";
module.exports = function (options) 
{  
  /**
   * Async function constructor.
   * @param {Function} fn - Function value, should return promise.
   * @returns {SType} - Returns a stype function.
   */
  function cons_async_func (fn) 
  {
    let m = 
    {
      SType: "ASYNC_FUNCTION",
      mutable: false,
      value: fn,
    };
    return m;
  }

  return cons_async_func;
}