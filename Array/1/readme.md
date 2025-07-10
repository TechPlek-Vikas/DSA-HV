# Largest Element in an Array
## Solution 1 : (Recursive Approach (Less efficient, but possible)

```js
function findLargestElement(arr, index = 0, currentMax = -Infinity) {
  if (index >= arr.length) return currentMax;
  if (arr[index] > currentMax) currentMax = arr[index];
  return findLargestElement(arr, index + 1, currentMax);
}
```

Notes :

- ⚠️ Stack Overflow Risk: If the array is too large (e.g., 1,000,000 elements), the recursive solution will crash with a **RangeError: Maximum call stack size exceeded**.

- Stack Limit: JavaScript engines typically throw a "Maximum call stack size exceeded" error around **10,000-30,000** recursive calls.

## ⚠️ Why `RangeError: Maximum call stack size exceeded` Happens

The `RangeError: Maximum call stack size exceeded` occurs because JavaScript has a **limited call stack size**, and your recursive function exceeds it when processing very large arrays (typically **>10,000–30,000 elements**, depending on the JS engine).

### 🔍 Why This Happens

- **Recursion Depth**: Each recursive call adds a new frame to the call stack.
- **Stack Limit**: Most browsers or Node.js environments crash at around **10,000–30,000** nested calls.
- **Your Code**: If `arr.length` exceeds the stack limit, it throws this error.

> 💡 **Tip:** Use an iterative solution for large datasets to avoid this issue.
