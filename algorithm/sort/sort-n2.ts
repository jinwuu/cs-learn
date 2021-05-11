// O(n^2)

// 冒泡
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      [arr[i], arr[j]] = [Math.min(arr[i], arr[j]), Math.max(arr[i], arr[j])]
    }
  }
  return arr
}

// 插入
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let p = i
    let temp = arr[p]
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        p = j
        arr[j + 1] = arr[j]
      }
    }
    arr[p] = temp
  }
  return arr
}

// 选择
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
