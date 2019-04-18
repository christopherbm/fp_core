"use strict";
module.exports = function (options) 
{
  const is_ok = require("./is_ok")();
  const option_none = require("./option_none")();
  const option_some = require("./option_some")();
  const unwrap = require("./unwrap")();

  /**
   * Converts a ResultMonad into an OptionMonad
   * @param {ResultMonad} result - result to cast as option.
   * @returns {OptionMonad} - returns option monad.
   */
  function result_to_option (result) 
  {
    return is_ok(result) ? option_some(unwrap(result)) : option_none();
  }

  return result_to_option;
}