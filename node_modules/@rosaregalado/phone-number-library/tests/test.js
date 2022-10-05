const phoneFormat = require('../src/index')
const num = phoneFormat('5101234567')

test('number format', () => {
  expect(num).toBe('(510) 123-4567')
})

