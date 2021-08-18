export function cacheFunction(cb) {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache ={};
  return (par) => {
    if (!Object.prototype.hasOwnProperty.call(cache,par)) {
      cache[par] = cb(par);
      return cb(par);
    } 
    else 
      return {[par]: cache[par]};
  }; 
}

