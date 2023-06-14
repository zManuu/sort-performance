import selectionsort from './selectionsort'
import bubblesort from './bubblesort'
import insertionsort from './insertionsort'

type SortFn = (arr: number[]) => {
  comparisions: number
  swaps: number
  accesses: number
}

const testSortFn = (name: string, sortFn: SortFn) => {
  const testData = {
    'best case, small array': Array.from(Array(Math.round(Math.random() * 899 + 100)).keys()),
    'avarage case, small array': Array.from(Array(Math.round(Math.random() * 899 + 100)).keys()).map(() => Math.round(Math.random() * 899 + 100)),
    'worst case, small array': Array.from(Array(Math.round(Math.random() * 899 + 100)).keys()).reverse(),
    'best case, big array': Array.from(Array(Math.round(Math.random() * 89999 + 10000)).keys()),
    'avarage case, big array': Array.from(Array(Math.round(Math.random() * 89999 + 10000)).keys()).map(() => Math.round(Math.random() * 899 + 100)),
    'worst case, big array': Array.from(Array(Math.round(Math.random() * 89999 + 10000)).keys()).reverse(),
  }

  for (const key of Object.keys(testData)) {
    const value: number[] = testData[key]
    const sortStats = sortFn(value)
    const sortStatsString = `\u001b[1;46m${sortStats.accesses.toLocaleString()}\u001b[0m \u001b[1;45m${sortStats.comparisions.toLocaleString()}\u001b[0m \u001b[1;44m${sortStats.swaps.toLocaleString()}\u001b[0m`
    console.log(`[${name}] ${key}: ${sortStatsString}`)
  }

}

const testSortFns = (sortFns: Map<string, SortFn>) => {
  console.log('\u001b[1;46maccesses\u001b[0m \u001b[1;45mcomparisions\u001b[0m \u001b[1;44mswaps\u001b[0m')
  sortFns.forEach((value, key) => {
    testSortFn(key, value)
    console.log('\n')
  })
}

testSortFns(new Map<string, SortFn>([
  ['selectionsort', selectionsort],
  ['bubblesort', bubblesort],
  ['insertionsort', insertionsort]
]))

export {
  SortFn
}