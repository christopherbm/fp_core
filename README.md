# fp_core
[ALPHA]
Core functional programming logic in Javascript. Inspired by Clojure and Rust.

The focus of this library is functional composition, polymorphism, purposeful mutability, and
monads.

[Thoughts](https://github.com/christopherbm/fp_core/blob/master/THOUGHTS.md)

# compose / composer
compose is a function that accepts any number of arguments, each must be a function, and returns 
a closure that when called, executes each of those functions **LEFT to RIGHT (OR BOTTOM UP)**, 
passing the return of each function to the next. Each function must be synchronous.

```javascript
compose(
  (i) => { return i + 1; }, // executes last
  (i) => { return i + 1; }, // executes second
  (i) => { return i + 1; }, // executes first
)(0);
// outputs: 3
```

The left to right execution is part of the math heratige, 
[lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus). It takes a little getting used to,
but I prefer this now because you're always working on the top, pushing completed work downward.

# cond

# monads

# polymorphism / stypes