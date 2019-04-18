"use strict";
module.exports = function (options) 
{
  /**
   * Freeze and seal an object.
   * @param {Object} mut obj - Mutable object to freeze and seal.
   * @returns {Object} - Same object.
   */
  function freeze_and_seal (obj)
  {
    return Object.seal(Object.freeze(obj));
  }

  return freeze_and_seal;
}