"use strict";
module.exports = function (options) 
{
  const unwrap = require("./unwrap")();
  
  /**
   * Unwraps a Monad and returns the given field (by name).
   * @param {Monad} monad - ResultMonad or Option monad to unwrap.
   * @param {String} name - name of field to returned from unwrapped object.
   * @returns {Any} - Returns field value of any type.
   * @throws - "Field not found" if field does not exist on unwrapped object.
   */
  function unwrap_to (monad, name) 
  {
    const obj = unwrap(monad);
    if (obj[name] === undefined) throw("Field not found.");
    return obj[name];
  }

  return unwrap_to;
}