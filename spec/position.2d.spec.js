/* global describe it expect */

const Position2D = require('../position.2d')

describe('Position2D', () => {
  it('is a class', () => {
    const expected = 'function'
    const actual = typeof Position2D
    expect(actual).toEqual(expected)
  })

  it('object has default x and y values of 0', () => {
    const pos = new Position2D()
    const expected = 0
    expect(pos.x).toEqual(expected)
    expect(pos.y).toEqual(expected)
  })

  it('object has method "toArray()" that returns [x, y]', () => {
    const pos = new Position2D()
    const expectedArray = [0, 0]
    const expectedType = 'function'
    expect(typeof pos.toArray).toEqual(expectedType)
    expect(pos.toArray()).toEqual(expectedArray)
  })

  it('object has method "toArray()" that returns [x, y] when passed explicit values to constructor', () => {
    const pos = new Position2D(10, 20)
    const expectedArray = [10, 20]
    const expectedType = 'function'
    expect(typeof pos.toArray).toEqual(expectedType)
    expect(pos.toArray()).toEqual(expectedArray)
  })
})
