const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num > n) {
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    } else {
      currentSubarray.push(num);
      currentSum += num;
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Test Cases
const testCases = [
  { arr: [], n: 5, expected: [] },
  { arr: [10], n: 5, expected: [[10]] },
  { arr: [-1, -2, -3], n: 5, expected: [[-1, -2, -3]] },
  { arr: [1, 2, -1, 3, -2, 4], n: 5, expected: [[1, 2, -1], [3, -2], [4]] },
  { arr: [1, 2, 3, 4, 5], n: 5, expected: [[1, 2], [3], [4], [5]] },
];

testCases.forEach(({ arr, n, expected }, index) => {
  const result = divide(arr, n);
  console.log(`Test Case ${index + 1}:`, JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed");
});


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
