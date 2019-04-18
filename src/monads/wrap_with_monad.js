"use strict";
module.exports = function (options) 
{
  const null_apply = require("./fns/null_apply")();
  const result_err = require("./result_err")();
  const result_ok = require("./result_ok")();

  /*
    console.log(wrap_with_monad((v) => { return v; })(100))
    console.log(wrap_with_monad(() => { throw(false); })())
  */

  /**
   * Wraps given function with one that returns a ResultMonad.
   * @param {Function} fn - Function to wrap.
   * @returns {ResultMonad} - Returns result monad.
   */
  function wrap_with_monad (fn) 
  {
    return function () 
    {
      try 
      {
        let ret = null_apply(fn, arguments);
        if (ret.mtype) 
        {
          if (ret.mtype === "ResultMonad") return ret;
        }
        return result_ok(ret);
      }
      catch (e) { return result_err(e) }
    }
  }

  return wrap_with_monad;
}