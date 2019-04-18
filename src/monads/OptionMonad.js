"use strict";
module.exports = function (options) 
{
  const freeze_and_seal = require("./utils/freeze_and_seal")();

  /**
   * OptionMonad. Is either Some with value or None with no value.
   * This is just the shell object, returned new each time so nothing is changed unwittingly.
   */
  function OptionMonad ()
  {
    return freeze_and_seal({
      mtype: "OptionMonad", 
      some: undefined, 
      none: undefined});
  }

  return OptionMonad;
}