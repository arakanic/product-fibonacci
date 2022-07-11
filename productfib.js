function productFib(prod){
    const fibonacci = (num, memo) => {
      memo = memo || {};
      if (memo[num]) {
        return memo[num];
      }
      if (num <= 1) {
        return 1;
      }
      return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    }
  
    let n = 0;
    let product = 1;
    let result = [];
  
    while (product < prod) {
      result = [fibonacci(n), fibonacci(n + 1)];
      product = result[0] * result[1];
      product === prod ? result.push(true) : result.push(false);
      n += 1;
    }
  
    return result;
}

productFib(4895)  // [55, 89, true]
productFib(5895)  // [89, 144, false]
productFib(74049690)  // [6765, 10946, true]
productFib(84049690)  // [10946, 17711, false]
productFib(193864606)  // [10946, 17711, true]
productFib(447577)  // [610, 987, false]
productFib(602070)  // [610, 987, true]