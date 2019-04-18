"use strict";
module.exports = function (options) 
{
  const unwrap_to = require("./unwrap_to")();
  
  /**
   * Unwraps a Monad and returns the given field (by name) or a default value.
   * @param {Monad} monad - Result or Option monad to unwrap.
   * @param {String} name - name of field to returned from unwrapped object.
   * @param {Any} defaultVal - default value to return.
   * @returns {Any} - Returns field value or default value of any type.
   */
  function unwrap_to_or (monad, name, defaultVal) 
  {
    try 
    {
      return unwrap_to(monad, name)
    }
    catch (e) 
    {
      return defaultVal;
    }
  }

  return unwrap_to_or;
}