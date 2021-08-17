export function counterFactory() {
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let counter = 3;
    function increment () {
      return ++counter;;
    }
    function decrement () {
      return --counter;
    }
    return {
        increment,
        decrement
      };
  }