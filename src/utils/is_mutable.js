"use strict";
module.exports = function (options) 
{  
  /**
   * Checks to see if a SType is mutable.
   * @param {SType} stp - SType to check.
   * @returns {Boolean} - Returns whether or not SType is mutable.
   */
  function is_mutable (stp) 
  {
    if (stp.mutable === true) return true;
    return false;
  }

  return is_mutable;
}