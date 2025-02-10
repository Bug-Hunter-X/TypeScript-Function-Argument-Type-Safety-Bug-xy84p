# TypeScript Function Argument Type Safety Bug

This repository demonstrates a common but subtle bug in TypeScript related to function argument type safety.  The issue occurs when a function is defined to accept specific argument types but is called without providing all arguments or with arguments of incorrect types.  The compiler doesn't always catch these issues, resulting in runtime errors. 

## Bug Description
The TypeScript code demonstrates a function `greet` that takes a `string` and a `Date` object as arguments.  The bug arises when the function is called without providing the `date` argument.  In this case, the `date` variable inside the function will be `undefined`, and attempting to use the `toDateString()` method on an undefined value throws a runtime error. 

## Solution
The solution involves adding checks to ensure that the arguments have the correct types and are not undefined before using them.