function productFib(prod){
    function fibonacci(num, memo) {
      memo = memo || {};
      if (memo[num]) {
        return memo[num];
      }
      if (num <= 1) {
        return 1;
      }
      return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    }
      
    let result = [];
    // find closest f(n), f(n + 1) whose product is closest to prod
    //   e.g. find f(8) and f(9)
    // true if product = prod, false if not
    // push to result
    return result;
}  

productFib(4895)  // [55, 89, true]
productFib(5895)  // [89, 144, false]
productFib(74049690)  // [6765, 10946, true]
productFib(84049690)  // [10946, 17711, false]
productFib(193864606)  // [10946, 17711, true]
productFib(447577)  // [610, 987, false]
productFib(602070)  // [610, 987, true]