import { SortFn } from './test'

const fn: SortFn = (arr) => {
  let comparisions = 0
  let swaps = 0
  let accesses = 0

  const _newArr: number[] = []

  for (let i=0; i<arr.length; i++) {
    accesses++
    let min = arr[i]
    for (let j=i+1; j<arr.length; j++) {
      accesses++
      comparisions++
      if (arr[j] < min) {
        accesses++
        min = arr[j]
      }
    }

    // ! there is no swapping here.
    // ! swapping = insertion into new array
    // ! swaps is always of spacecomplexity 0(n)
    swaps++
    accesses++
    _newArr[i] = min
  }

  return { comparisions, swaps, accesses }
}

export default fn