"use strict";
module.exports =  
{
  "Composer": require("./src/composer/Composer")(),

  "async_compose": require("./src/fns/async_compose")(),
  "compose": require("./src/fns/compose")(),
  "cond": require("./src/fns/cond")(),
  "curry_first": require("./src/fns/curry_first")(),
  "curry_last": require("./src/fns/curry_last")(),
  "identity": require("./src/fns/identity")(),
  "null_apply": require("./src/fns/null_apply")(),

  "is_err": require("./src/monads/is_err")(),
  "is_none": require("./src/monads/is_none")(),
  "is_ok": require("./src/monads/is_ok")(),
  "is_some": require("./src/monads/is_some")(),
  "match_result": require("./src/monads/match_result")(), // deprecate and replace with cond
  "option_none": require("./src/monads/option_none")(),
  "option_some": require("./src/monads/option_some")(),
  "option_to_result": require("./src/monads/option_to_result")(),
  "OptionMonad": require("./src/monads/OptionMonad")(),
  "result_err": require("./src/monads/result_err")(),
  "result_ok": require("./src/monads/result_ok")(),
  "result_to_option": require("./src/monads/result_to_option")(),
  "ResultMonad": require("./src/monads/ResultMonad")(),
  "unwrap": require("./src/monads/unwrap")(),
  "unwrap_or": require("./src/monads/unwrap_or")(),
  "unwrap_or_else": require("./src/monads/unwrap_or_else")(),
  "unwrap_to": require("./src/monads/is_none")(),
  "unwrap_to_or": require("./src/monads/unwrap_to_or")(),
  "wrap_with_monad": require("./src/monads/wrap_with_monad")(),

  "car": require("./src/pair/car")(),
  "cdr": require("./src/pair/cdr")(),
  "cons_pair": require("./src/pair/cons_pair")(),
  "Pair": require("./src/pair/Pair")(),

  "cons_async_func": require("./src/stypes/cons_async_func")(),
  "cons_func": require("./src/stypes/cons_func")(),

  "args_to_array": require("./src/utils/args_to_array")(),
  "freeze_and_seal": require("./src/utils/freeze_and_seal")(),
  "has": require("./src/utils/has")(),
  "is_immutable": require("./src/utils/is_immutable")(),
  "is_mutable": require("./src/utils/is_mutable")(),
  "is_stype": require("./src/utils/is_stype")(),
}