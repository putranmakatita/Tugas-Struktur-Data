function frequentNumber(nums) {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
        result[nums[i]] = result[nums[i]] ? result[nums[i]] + 1 : 1;
    }
    return result;
}

// Test Cases

// Test case 1: Standard case with multiple numbers
console.log(frequentNumber([1, 2, 1, 2, 3])); // Expected output: { '1': 2, '2': 2, '3': 1 }

// Test case 2: Standard case with one number having higher frequency
console.log(frequentNumber([1, 1, 2, 1, 2, 3])); // Expected output: { '1': 3, '2': 2, '3': 1 }

// Test case 3: Empty array
console.log(frequentNumber([])); // Expected output: {}

// Test case 4: Array with only one element
console.log(frequentNumber([4])); // Expected output: { '4': 1 }

// Test case 5: Array with all elements the same
console.log(frequentNumber([7, 7, 7, 7, 7])); // Expected output: { '7': 5 }

// Test case 6: Array with negative numbers
console.log(frequentNumber([-1, -2, -1, -3, -1, -2])); // Expected output: { '-1': 3, '-2': 2, '-3': 1 }

// Test case 7: Array with zeroes and positive numbers
console.log(frequentNumber([0, 0, 1, 0, 2, 1])); // Expected output: { '0': 3, '1': 2, '2': 1 }

// Test case 8: Array with both negative and positive numbers
console.log(frequentNumber([-1, 1, -1, 2, 1, -2, 2])); // Expected output: { '-1': 2, '1': 2, '2': 2, '-2': 1 }

// Test case 9: Array with large numbers
console.log(frequentNumber([1000000, 1000000, 999999, 1000000, 999999])); // Expected output: { '1000000': 3, '999999': 2 }
