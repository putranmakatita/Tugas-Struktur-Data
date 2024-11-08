function checkTheSimilarity(nums1, nums2) {
    let frequencyMap = {};
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        frequencyMap[nums1[i]] = (frequencyMap[nums1[i]] || 0) + 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (frequencyMap[nums2[i]]) {
            result.push(nums2[i]);
            delete frequencyMap[nums2[i]];
        }
    }

    return result;
}

// Test Cases 

// Test case 1: Common elements in both arrays
console.log(checkTheSimilarity([7, 8, 9], [7, 9, 10, 11])); // Expected output: [7, 9]

// Test case 2: No common elements
console.log(checkTheSimilarity([1, 2, 3], [7, 9, 10, 11])); // Expected output: []

// Test case 3: All elements are common
console.log(checkTheSimilarity([7, 9, 10, 11], [7, 9, 10, 11])); // Expected output: [7, 9, 10, 11]

// Test case 4: Partial overlap
console.log(checkTheSimilarity([7, 9, 10, 12], [1, 9, 10, 11])); // Expected output: [9, 10]

// Test case 5: One array is empty
console.log(checkTheSimilarity([], [1, 2, 3])); // Expected output: []
console.log(checkTheSimilarity([4, 5, 6], [])); // Expected output: []

// Test case 6: Both arrays are empty
console.log(checkTheSimilarity([], [])); // Expected output: []

// Test case 7: Duplicates in one or both arrays (should not affect the result)
console.log(checkTheSimilarity([1, 1, 2, 2, 3, 3], [2, 2, 3, 4, 4])); // Expected output: [2, 3]

// Test case 8: Arrays with negative numbers and zero
console.log(checkTheSimilarity([-1, 0, 1, 2], [0, -1, 3, 4])); // Expected output: [0, -1]

// Test case 9: Large numbers in the arrays
console.log(checkTheSimilarity([1000000, 2000000, 3000000], [3000000, 4000000, 5000000])); // Expected output: [3000000]
