// O(logN)

// 对已经排好序的数组用二分查找
function dichotomyArr(arr, num) {
  return dichotomy(0, arr.length - 1)
  function dichotomy(left, right) {
    if (left >= right) return arr[left] === num ? left : -1
    const mid = Math.floor((left + right) / 2)
    return arr[mid] >= num ? dichotomy(left, mid) : dichotomy(mid + 1, right)
  }
}
