// Method 1
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr = [5, 3, 23, 5, 3, 2, 78, 65, 34];
console.log("Largest Element in an Array", findMax(arr));

// Method 2
let arr2 = [5, 3, 23, 5, 3, 2, 78, 65, 34];
let max2 = Math.max(...arr2);

console.log("Largest Element in an Array", max2);

// Method 3

const arr3 = [5, 3, 23, 5, 3, 2, 78, 65, 34];
const max3 = arr3.reduce(
  (acc, curr) => {
    return curr > acc ? curr : acc;
  },
  [arr[0]]
);

console.log("Largest Element in an Array", max3);
