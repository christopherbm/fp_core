"use strict";
module.exports = function (options) 
{
  const OptionMonad = require("./OptionMonad")();
  const freeze_and_seal = require("../utils/freeze_and_seal")();

  /**
   * Create a OptionMonad with some value.
   * @param {Mixed} some - Some value to be set as some.
   * @returns {OptionMonad<some:some>} - OptionMonad with some set as Some. 
   *   OptionMonad is frozen and sealed.
   */
  function option_some (some) 
  {
    return freeze_and_seal(Object.assign({}, OptionMonad(), {some: some}));
  }

  return option_some;
}