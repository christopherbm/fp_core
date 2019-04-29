"use strict";
module.exports = function (options) 
{  
  const has = require("./has")();

  /**
   * Checks to see if a given argument is an SType.
   * @param {Any} stype - value to check.
   * @returns {Boolean} - Returns whether or not the value is a SType.
   */
  function is_stype (stype) 
  {
    return has("SType", stype);
  }

  return is_stype;
}