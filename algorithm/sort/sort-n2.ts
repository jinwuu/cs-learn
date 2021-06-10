// O(n^2)

// 冒泡
function bubbleSort(arr) {
  for (let i = 0, l = arr.length - 1, sortBorder = l; i < l; i++) {
    let exchanged = false
    let lastExchangeIndex = 0
    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        exchanged = true
        lastExchangeIndex = j
      }
    }
    if (!exchanged)
      break
    sortBorder = lastExchangeIndex
  }
  return arr
}

// 插入
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let p = i
    let temp = arr[p]
    for (let j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[p = j]
    }
    if (p !== i)
      arr[p] = temp
  }
  return arr
}

// 希尔
function shellSort(arr) {
  let h = Math.pow(2, ~~Math.log2(arr.length + 2) - 1) - 1 // Math.pow(2, k) - 1
  while (h >= 1) {
    for (let i = h; i < arr.length; i++) {
      let p = i
      let temp = arr[p]
      for (let j = i - h; j >= 0 && arr[j] > temp; j -= h) {
        arr[j + h] = arr[p = j]
      }
      if (i !== p)
        arr[p] = temp
    }
    h = (h + 1) / 2 - 1
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
    if (i !== minIndex)
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
