import { cacheFunction } from "../cacheFunction.js";
let cb = a => "Parameter "+ a;
let usedArgument = cacheFunction(cb);
console.log(usedArgument("a"));
console.log(usedArgument("a"));
console.log(usedArgument("b"));