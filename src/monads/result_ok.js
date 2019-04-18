"use strict";
module.exports = function (options) 
{
  const ResultMonad = require("./ResultMonad")();
  const freeze_and_seal = require("./utils/freeze_and_seal")();

  /**
   * Create a ResultMonad with ok value.
   * @param {Mixed} val - Value to be set as ok.
   * @returns {ResultMonad<ok:val>} - ResultMonad with val set as ok. ResultMonad is frozen and
   *   sealed.
   */
  function result_ok (val) { 
    return freeze_and_seal(Object.assign({}, ResultMonad(), {ok: val}));
  }

  return result_ok;
}