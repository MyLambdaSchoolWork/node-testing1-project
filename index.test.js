const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test.todo('[2] returns a copy, leaving the original object intact')
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test.todo('[3] returns an object with the properties trimmed')
  test('[3] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  // test.todo('[4] the object returned is the exact same one we passed in')
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  // test.todo('[5] returns the largest number in an array of objects { integer: 2 }')
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [ { integer: 2 }, { integer: 35 }, { integer: 600 }, { integer: -99 } ]
    const expected = { integer: 600 }
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  const initial = 23
  let counter
  beforeEach(() => {
    counter = new utils.Counter(initial) // each test must start with a fresh couter
  })
  // test.todo('[6] the FIRST CALL of counter.countDown returns the initial count')
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(initial)
  })
  // test.todo('[7] the SECOND CALL of counter.countDown returns the initial count minus one')
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(initial - 1)
  })
  // test.todo('[8] the count eventually reaches zero but does not go below zero')
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    while(counter.countDown() > 1){} // eslint-disable-line
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).toBe(0)
  }, 1000)
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  function callSeasonNTimes(n){
    for(let i = 1; i < n; i++) // starts at 1 because the return calls .next()
      seasons.next()
    return seasons.next()
  }

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(callSeasonNTimes(1)).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(callSeasonNTimes(2)).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(callSeasonNTimes(3)).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(callSeasonNTimes(4)).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(callSeasonNTimes(5)).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(callSeasonNTimes(40)).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  const tankSize = 20
  const mpg = 30
  let car
  beforeEach(() => {
    car = new utils.Car('focus', tankSize, mpg) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(car.drive(15)).toBe(15)
    expect(car.drive(20)).toBe(35)
  })
  test('[16] driving the car uses gas', () => {
    expect(car.tank).toBe(tankSize)
    car.drive(10)
    expect(car.tank).toBe(tankSize - 10/mpg)
  })
  test('[16.5] can\'t drive more than tank * mpg', () => {
    car.drive(tankSize*mpg/2)
    car.drive(tankSize*mpg)
    expect(car.tank).toBe(0)
    expect(car.odometer).toBe(tankSize*mpg)
  })
  test('[17] adding fuel works', () => {
    car.drive(tankSize*mpg/2)
    expect(car.refuel(5)).toBe((tankSize/2 + 5)*mpg)
    expect(car.tank).toBe(tankSize/2 + 5)
  })
  test('[18] can\'t overfill tank', () => {
    expect(car.refuel(10)).toBe(tankSize*mpg)
    expect(car.tank).toBe(tankSize)
    car.drive(10)
    expect(car.refuel(10000)).toBe(tankSize*mpg)
    expect(car.tank).toBe(tankSize)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    expect(await utils.isEvenNumberAsync(10)).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    expect(await utils.isEvenNumberAsync(9)).toBe(false)
  })
  test('[21] rejects an error with the message "x is not a number" if passed a non-number type', async () => {
    expect(await utils.isEvenNumberAsync([]).catch(err => err)).toBe('object is not a number')
  })
  test('[22] rejects an error with the message "NaN is not a number" if passed NaN', async () => {
    expect(await utils.isEvenNumberAsync(NaN).catch(err => err)).toBe('NaN is not a number')
  })
})
