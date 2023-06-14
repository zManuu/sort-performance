import { SortFn } from '.';

const fn: SortFn = (arr) => {
  let comparisions = 0
  let swaps = 0
  let accesses = 0

  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length; j++) {
      accesses += 2
      comparisions++
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        accesses += 4
        swaps++
      }
    }
  }

  return { comparisions, swaps, accesses }
}

export default fn