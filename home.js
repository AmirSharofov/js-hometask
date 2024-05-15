function createCounter(n) {
    function counter() {
        return n;
    }
    return counter;
  }
  
  function expect(val) {
    return {
        toBe: function(val2) {
            if (val === val2) {
                return {value: true};
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val2) {
            if (val !== val2) {
                return {value: true};
            } else {
                throw new Error("Equal");
            }
        }
    }
  }
  function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
  }
  