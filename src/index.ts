import { SortFn, testSortFns } from './test'
import selectionsort from './selectionsort'
import bubblesort from './bubblesort'
import insertionsort from './insertionsort'

const sortFunctions = new Map<string, SortFn>([
  ['selectionsort', selectionsort],
  ['bubblesort', bubblesort],
  ['insertionsort', insertionsort]
])

const sortTest = [ 10, 50, 100, 500, 1_000, 5_000, 10_000, 50_000 ]

testSortFns(sortFunctions, sortTest)