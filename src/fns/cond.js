"use strict";
module.exports = function (options) 
{
  const args_to_array = require("../utils/args_to_array")();
  
  /*
    let check = cond(
      [(bool) => { return false }, (bool) => {return bool}],
      [(bool) => { return true }, (bool) => {return bool}]);
    console.log(check(false));
  */

  /**
   * Takes any number of tuples [0: boolean check, 1: return function] and returns the result of
   *   the return function of the first tuple with a boolean check that returns true.
   * NOTE: This only works for sync functions.
   * NOTE: Tuple order is compositional.
   * @param {Array[0:Function, 1:Functions], ...} {} - one or more arrays that represent tuples.
   * @returns {Function} - Function wrapper.
   */  
  function cond () 
  {
    const tuples = args_to_array(arguments);
    tuples.reverse(); // match composition
    return function () 
    {
      let args = args_to_array(arguments);
      for (let i = 0; i < tuples.length; i++) 
      {
        if (tuples[i][0].apply(null, args)) return tuples[i][1].apply(null, args);
      }
    }
  }

  return cond;
}