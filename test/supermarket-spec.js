/* eslint-disable no-undef */

var assert = require("assert")
var Supermarket = require("../src/supermarket")

describe("Supermarket", function () {
  describe("#scan", function () {
    it("charges 3.11 for Fruit tea", function () {
      var sut = new Supermarket()
      sut.scan("FR1")
      assert.strictEqual(sut.total(), 3.11)
    })

    it("charges 5.00 for Strawberries (SR1)", function () {
      var sut = new Supermarket()
      sut.scan("SR1")
      assert.strictEqual(sut.total(), 5.00)
    })

    it("adds the item to the basket", function () {
      var sut = new Supermarket()
      sut.scan("CF1")
      assert.deepStrictEqual(sut.basket, { "CF1": 1 })
    })
  })
})
