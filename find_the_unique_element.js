function findTheUniqueElement(nums) {
    let mapNums = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        mapNums[nums[i]] = (mapNums[nums[i]] || 0) + 1;
    }

    for (let key in mapNums) {
        if (mapNums[key] === 1) {
            result.push(Number(key));
        }
    }
    return result;
}

// Test Cases

// Test case 1: Standard case with a mix of unique and duplicate numbers
console.log(findTheUniqueElement([1, 2, 1, 3, 2, 4])); // Expected output: [ 3, 4 ]

// Test case 2: No unique elements
console.log(findTheUniqueElement([1, 2, 1, 2, 3, 3])); // Expected output: []

// Test case 3: All elements are unique
console.log(findTheUniqueElement([5, 6, 7, 8])); // Expected output: [ 5, 6, 7, 8 ]

// Test case 4: Single element array
console.log(findTheUniqueElement([9])); // Expected output: [ 9 ]

// Test case 5: Array with all elements the same
console.log(findTheUniqueElement([10, 10, 10, 10])); // Expected output: []

// Test case 6: Array with negative numbers and unique negatives
console.log(findTheUniqueElement([-1, -2, -1, -3, -4])); // Expected output: [ -2, -3, -4 ]

// Test case 7: Array with zero and positive numbers, some unique
console.log(findTheUniqueElement([0, 0, 1, 2, 1])); // Expected output: [ 2 ]

// Test case 8: Array with large numbers and unique large numbers
console.log(findTheUniqueElement([1000000, 1000000, 999999, 888888, 999999])); // Expected output: [ 888888 ]

// Test case 9: Array with both positive and negative unique elements
console.log(findTheUniqueElement([-1, 1, -1, 2, -2, 2, 3])); // Expected output: [1, -2, 3 ]
