// O(nlogn)

// 快排
function quickSort(arr) {
  sort(0, arr.length - 1)
  return arr
  function sort(left, right) {
    if (left >= right) return
    let [i, j, pivot] = [left, right, arr[left]]
    while (i !== j) {
      while (i < j && arr[j] >= pivot) {
        j--
      }
      [arr[i], arr[j]] = [arr[j], arr[i]]

      while (i < j && arr[i] <= pivot) {
        i++
      }
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    sort(i + 1, right)
    sort(left, i - 1)
  }
}
