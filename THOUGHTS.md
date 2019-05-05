# thoughts
Writing software is a craft. In my opionion, the best expression of that craft is through the creation
of code that allows for *incremental complexity*. Incremental complexity is difficult to achieve in
any work, in any field. The reason that I started shift to functional programming is because I believe
that FP better allows for incremental complexity through functional composition. While you can achieve
this in OOP, it requires a very well thought out and well executed system of patterns. You can achieve
the same thing in FP simply by using FP. FP patterns are simple, but they yeild fantastic architectures.

Functional composition is more than just *.chain* or *.pipe* methods. Those are generally thought of
as control flow. Composition is a form of abstraction. It is nesting functions, tucking them away so
that you can focus on whatever is next.

It took me quite a while to figure out a method for composing sync and async functions without
making each function asynchronous (which seems burdensome). This encourages the breakdown of larger
functions without having to worry about promises, callbacks or async/await.

> "It is better to have 100 functions operate on one data structure than to have 10 functions operate 
on 10 data structures." 
> - Alan Perlis.

You can build **anything** with cond, compose and recur. Really! Literally any logic can be expressed
with those three functions. This is why I love functional programming. Once you wrap your mind around
the building blocks, you start to realize how few of those blocks are really needed. It requires a 
great deal of effort to untrain yourself to default to OOP patterns, but I believe that this is a 
better discipline of programming.

Wrapping native types isn't very egonomic, but it certainly requires less effort than using an
entirely different language like TypeScript or ClojureScript.

It might be nice to have a strict/not-strict modes for using STypes.

Why not use TypeScript? -> I don't really like superset languages and the concept of a "type" here
is not about classes or OOP but rather something like a struct. It is being used to facilitate
polymorphism, controlled mutability and creating domain-specific granular type systems based off
native and algorithmic types (like stacks and queues).

I came across the monads in rust for the first time in early 2018. They are a simple pattern, but
they because really helpful in dealing with logical pipelines, null values and conditional logic. I 
think it would be possible to create some automated unit test creating with monads.

I think a Loading monad may be useful, in addition to Result and Option.

One of the difficult things about functional programming is debugging. I should build debug modes
into the various compose functions to help with this.