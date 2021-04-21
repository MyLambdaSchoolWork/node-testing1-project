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
  let car
  beforeEach(() => {
    car = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(car.drive(15)).toBe(15)
    expect(car.drive(20)).toBe(35)
  })
  test.todo('[16] driving the car uses gas')
  test.todo('[17] refueling allows to keep driving')
  test.todo('[18] adding fuel to a full tank has no effect')
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test.todo('[19] resolves true if passed an even number')
  test.todo('[20] resolves false if passed an odd number')
  test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
