"use strict";
module.exports = function (options) 
{
  /*
    function test () 
    {
      console.log(arguments);
      console.log(cast_args_array(arguments))
    }
    test(1,2,3)
  */

  /**
   * Casts an arguments object to an array.
   * @param {Arguments} args - arguments object to slice.
   * @returns {Array} - Returns arguments as array.
   */
  function args_to_array (args) 
  {
    if (!args) return [];
    return Array.prototype.slice.call(args);
  }

  return args_to_array;
}