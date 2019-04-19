"use strict";
module.exports = function (options) 
{
  const ResultMonad = require("./ResultMonad")();
  const freeze_and_seal = require("../utils/freeze_and_seal")();

  /**
   * Create a ResultMonad with err value.
   * @param {Mixed} err - Value to be set as err.
   * @returns {ResultMonad<err:err>} - ResultMonad with err set as err. ResultMonad is frozen and
   *   sealed.
   */
  function result_err (err) 
  {
    if (err === undefined) err = "error" 
    return freeze_and_seal(Object.assign({}, ResultMonad(), {err: err}));
  }

  return result_err;
}