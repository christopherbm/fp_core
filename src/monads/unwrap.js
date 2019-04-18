"use strict";
module.exports = function (options) 
{
  /**
   * Unwraps a ResultMonad or OptionMonad with ok/some value. Throws error if result is err/none.
   * @param {ResultMonad || OptionMonad} monad - Monad to unwrap.
   * @returns {Mixed} - Returns whatever value is in result.ok.
   * @returns {Mixed} - Returns whatever value is in option.some.
   * @throws {Error} - Throws error "Result is error" if the ResultMonad has err instead of ok.
   * @throws {Error} - Throws error "Option is none" if the OptionMonad has none instead of some.
   */
  function unwrap (monad) 
  {
    switch (monad.mtype) {
      case 'ResultMonad':
        return __unwrap_result_monad(monad);
      case 'OptionMonad':
        return __unwrap_option_monad(monad);
    }
    throw('Monad required for unwrap.')
  }

  function __unwrap_result_monad (result) 
  {
    if (result.ok) return result.ok;
    throw('Result is error.');
  }

  function __unwrap_option_monad (option) 
  {
    if (option.some) return option.some;
    throw('Option is none.');
  }

  return unwrap;
}