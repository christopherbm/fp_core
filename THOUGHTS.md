# fp_core
It took me quite a while to figure out a method for composing sync and async functions without
making each function asynchronous (which seems burdensome). This encourages the breakdown of larger
functions without having to worry about promises, callbacks or async/await.

> "It is better to have 100 functions operate on one data structure than to have 10 functions operate 
on 10 data structures." 
> - Alan Perlis.

You can build **anything** with cond, compose and recur.