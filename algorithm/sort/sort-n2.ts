// O(n^2)

// 冒泡
function bubbleSort(arr) {
  const l = arr.length - 1
  for (let i = 0; i < l; i++) {
    let exchanged = false
    for (let j = 0; j < l - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        exchanged = true
      }
    }
    if (!exchanged)
      break
  }
  return arr
}

// 插入
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let p = i
    let temp = arr[p]
    for (let j = i - 1; j >= 0 && arr[j] > temp; j--) {
      p = j
      arr[j + 1] = arr[j]
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
