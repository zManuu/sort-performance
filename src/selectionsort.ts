import { SortFn } from '.'

const fn: SortFn = (arr) => {
  let comparisions = 0
  let swaps = 0
  let accesses = 0

  for (let i=0; i<arr.length; i++) {
    let minIndex = i
    let min = arr[i]
    accesses++
    for (let j=i+1; j<arr.length; j++) {
      accesses++
      comparisions++
      if (arr[j] < min) {
        minIndex = j
        min = arr[j]
        accesses++
      }
    }

    arr[minIndex] = arr[i]
    arr[i] = min
    swaps++
  }

  return { comparisions, swaps, accesses }
}

export default fn