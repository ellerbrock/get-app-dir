import { expect } from 'chai'
import getAppDir from '../src/index'

describe('Test for npm module get-app-dir', function () {
  it('getAppDir should return a string', function () {
    expect(getAppDir).to.be.a('string')
  })
})
