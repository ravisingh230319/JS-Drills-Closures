export function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let limit = 0;
  return () => {
    if (limit === n) {
      return null;
    }
    limit+=1;
    return cb();
  };
}
