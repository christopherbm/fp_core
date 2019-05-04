"use strict";
module.exports = function (options) 
{
  const async_compose = require("../fns/async_compose")();
  const compose = require("../fns/compose")();

  /**
    Example. 
    const cfn = new Composer()
      .async((i) => 
      { 
        return new Promise(function (resolve, reject) 
        {
          resolve(i + 1); 
        }) 
      })
      .sync((i) => { return i + 1; })
      .sync((i) => { return i + 1; })
      .sync((i) => { return i + 1; })
    .compose();
    cfn(0).then(finalI => { console.log(finalI) });
  */

  /**
   */
  function Composer () 
  {
    this.compArr = [];
    
    this.async = function (fn, options) 
    {
      this._add_fn(false, fn);
      return this;
    }

    this.compose = function () 
    {
      let asyncFns = [];
      let syncGroup = [];
      for (let i = this.compArr.length - 1; i >= 0; i--) // reverse through array
      {
        if (this.isSync(this.compArr[i])) 
        {
          syncGroup.unshift(this.compArr[i]);
        }
        else 
        {
          asyncFns.unshift(compose.apply(null, syncGroup.map(fd => fd.fn)));
          syncGroup = [];
          asyncFns.unshift(this.compArr[i].fn);
        }
      }

      // add any remaining sync fns
      if (syncGroup.length > 0) 
      {
        asyncFns.unshift(compose.apply(null, syncGroup.map(fd => fd.fn)));
      }

      return async_compose.apply(null, asyncFns);
    }

    this.isSync = function (fd) { return fd.sync; }

    this.sync = function (fn, options) 
    {
      this._add_fn(true, fn);
      return this;
    }

    this._add_fn = function (isSync, fn) 
    {
      if (isSync === true) 
      {
        this.compArr.push({sync: true, fn: fn});
      }
      else 
      {
        this.compArr.push({sync: false, fn: fn});
      }
    }
  }

  return Composer;
}