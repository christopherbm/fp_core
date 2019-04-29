"use strict";
module.exports = function (options) 
{  
  /**
   * Checks to see if a given SType is immutable.
   * @param {SType} stp - SType to check.
   * @returns {Boolean} - Returns whether or not the Stype is immutable.
   */
  function is_immutable (stp) 
  {
    if (stp.mutable === false) return true;
    return false;
  }

  return is_immutable;
}