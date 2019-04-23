"use strict";
module.exports = function (options) 
{
  const args_to_array = require("../utils/args_to_array")();
  
  /* Example
    try {
      console.log('return', compose(
        (r) => { console.log(r); return (4); },
        (r) => { console.log(r); throw('compose error') },
        (r) => { console.log(r); return (2); },
        (r) => { console.log('?', r); return (1); },
        )(1));
    }
    catch (e) { console.log(e) }
  */

  /**
   * Executes the function list (compositionally speaking, ie last function) passing the result
   *   of each function to the next.
   * NOTE: This only works for sync functions.
   * @param {Function(s)} {} - Two or more functions, executed last to first.
   * @returns {Any} - Anything can be returned.
   */
  function compose () 
  {
    let index = 1;
    let fns = args_to_array(arguments);
    fns.reverse(); // for composition

    return function () 
    {
      index = 1;
      let ret = undefined;
      ret = fns[0].apply(null, args_to_array(arguments));
      while (index < fns.length) 
      {
        ret = fns[index](ret);
        index += 1;
      }
      return ret;
    }
  }

  return compose;
}