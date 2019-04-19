"use strict";
module.exports = function (options) 
{
  const OptionMonad = require("./OptionMonad")();
  const freeze_and_seal = require("../utils/freeze_and_seal")();

  /**
   * Create a OptionMonad with none value.
   * @returns {OptionMonad<none:true>} - OptionMonad with none set as true. 
   *   OptionMonad is frozen and sealed.
   */
  function option_none () 
  {
    return freeze_and_seal(Object.assign({}, OptionMonad(), {none: true}));
  }

  return option_none;
}