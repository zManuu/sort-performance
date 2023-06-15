type SortFn = (arr: number[]) => {
  comparisions: number
  swaps: number
  accesses: number
}

const testSortFn = (name: string, sortFn: SortFn, tests: number[]) => {
  
  for (const test of tests) {
    const testData = {
      best: Array.from(Array(test).keys()),
      avarage: Array.from(Array(test).keys()).map(() => Math.round(Math.random() * 100_000)),
      worst: Array.from(Array(test).keys()).reverse()
    }
    
    for (const testDataKey of Object.keys(testData)) {
      const testDataValue: number[] = testData[testDataKey]
      const sortStats = sortFn(testDataValue)
      const sortStatsString = `\u001b[1;46m${sortStats.accesses.toLocaleString()}\u001b[0m \u001b[1;45m${sortStats.comparisions.toLocaleString()}\u001b[0m \u001b[1;44m${sortStats.swaps.toLocaleString()}\u001b[0m`
      console.log(`[${name}] ${testDataKey} case, ${test.toLocaleString()} elements: ${sortStatsString}`)
    }
  }

}

const testSortFns = (sortFns: Map<string, SortFn>, tests: number[]) => {
  console.log('\u001b[1;46maccesses\u001b[0m \u001b[1;45mcomparisions\u001b[0m \u001b[1;44mswaps/insertions\u001b[0m')
  sortFns.forEach((value, key) => {
    testSortFn(key, value, tests)
    console.log('\n')
  })
}

export {
  SortFn,
  testSortFns
}