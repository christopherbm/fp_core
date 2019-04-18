"use strict";
module.exports = function (options) 
{
  const is_some = require("./is_some")();
  const result_ok = require("./result_ok")();
  const result_err = require("./result_err")();
  const unwrap = require("./unwrap")();

  /**
   * Converts a ResultMonad into an OptionMonad
   * @param {ResultMonad} result - result to cast as option.
   * @returns {OptionMonad} - returns option monad.
   */
  function option_to_result (opt, errStr) 
  {
    if (is_some(opt)) return result_ok(unwrap(opt));
    return result_err(errStr);
  }

  return option_to_result;
}