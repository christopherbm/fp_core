"use strict";
module.exports = function (options) 
{  
  /**
   * Checks to see if an object has given field.
   * @param {String} field - field name as string.
   * @param {Object} obj - object to test.
   * @returns {Boolean} - Returns whether or not the field exists on the given object.
   */
  /*  */
  function has (field, obj) 
  {
    if (obj[field] === undefined) return false;
    return true;
  }

  return has;
}