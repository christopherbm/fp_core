# fp_core
[ALPHA]
Core functional programming logic in Javascript. Inspired by Clojure and Rust.

The focus of this library is functional composition, polymorphism, purposeful mutability, and
monads.

[Thoughts](https://github.com/christopherbm/fp_core/blob/master/THOUGHTS.md)

# compose (src/fns) / composer (src/composer)
*compose* is a function that accepts any number of arguments, each must be a function, and returns 
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

# cond (src/fns)
*cond* is important. It is the primary means of leaving imperitive-only programming and stepping into
a more declarative approach. *cond* takes any number of pairs, each pair is comprised of functions only.
The left-hand function of each pair is a boolean check and the right-hand function executes if the
left-hand returns true. Only one of the pair will be executed. This is sort of like a functional
switch statement.

```javascript
cond(
  [   // true branch
  	  (input) => { return (input === true); },
  	  (input) => { /* true branch logic */ }
  ],

  [   // false branch
  	  (input) => { return (input === false); },
      (input) => { /* false branch logic */ }
  ],
)(true);
// executes true branch logic
```



# monads

# polymorphism / stypes