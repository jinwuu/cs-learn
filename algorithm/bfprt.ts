// O(n)

// TOP-K
function findTopK(array, k) {
  let arr = JSON.parse(JSON.stringify(array))
  return bfprt(0, arr.length - 1)
  function bfprt(left, right) {
    const pivot = findPivot(left, right)
    let [i, j] = [left, right]
    while (i !== j) {
      while (i < j && arr[j] >= pivot) {
        j--
      }
      arr[i] = arr[j]
      while (i < j && arr[i] <= pivot) {
        i++
      }
      arr[j] = arr[i]
    }
    arr[i] = pivot
    if (i === k - 1) {
      return arr[i]
    } else {
      return i > k - 1 ? bfprt(left, i - 1) : bfprt(i + 1, right)
    }
  }
  function findPivot(left, right) {
    if (left >= right) return arr[left]
    const remainder = (right - left + 1) % 5
    let index = 0
    for (let i = left; i <= right - remainder; i += 5, index++) {
      insertSort(arr, i, i + 4)
      ;[arr[left + index], arr[i + 2]] = [arr[i + 2], arr[left + index]]
    }
    if (remainder) {
      const j = Math.floor((2 * right - remainder + 1) / 2)
      ;[arr[left + index], arr[j]] = [arr[j], arr[left + index]]
    }
    return findPivot(left, left + index)
  }
  function insertSort(list, left, right) {
    if (left >= right) return list
    for (let i = left + 1; i <= right; i++) {
      const temp = list[i]
      let index = i
      for (let j = i - 1; j >= left && list[j] > temp; j--) {
        list[j + 1] = list[j]
        index = j
      }
      if (index !== i)
        list[index] = temp
    }
    return list
  }
}
