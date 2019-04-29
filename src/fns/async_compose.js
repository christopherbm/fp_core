"use strict";
module.exports = function (options) 
{
  const args_to_array = require("../utils/args_to_array")();
  const null_apply = require("./null_apply")();
  
  /* Example
    
    try 
    {
      let fin = await async_compose(as3, as2, as1)(1);
      console.log(fin)
    }
    catch (e) 
    {
      console.log(e)
    }

    function as1 (v) 
    {
      return new Promise(function(resolve, reject) 
      {
        console.log(v)
        resolve(v + 1);
      });
    }

    function as2 (v) 
    {
      return new Promise(function(resolve, reject) 
      {
        console.log(v)
        resolve(v + 1);
      });
    }

    function as3 (v) 
    {
      return new Promise(function(resolve, reject) 
      {
        console.log(v)
        resolve(v + 1);
        //reject(v + 1);
      });
    }
  */

  /**
   * Executes the function list (compositionally speaking, ie last function) passing the result
   *   of each function to the next.
   * NOTE: This only works for ASYNC functions.
   * @param {Function(s)} {} - Two or more functions, executed last to first.
   * @returns {Any} - Anything can be returned.
   */
  function async_compose () 
  {
    const args = args_to_array(arguments);
    args.reverse();

    return async function () 
    {
      let ret = await null_apply(args[0], arguments);
      for (let i = 1; i < args.length; i = i + 1) 
      {
        ret = await args[i](ret);
      }
      return ret;
    }
  }

  return async_compose;
}