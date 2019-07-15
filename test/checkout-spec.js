/* eslint-disable no-undef */

var assert = require("assert")
var Checkout = require("../src/checkout")

describe("Checkout", function () {
  describe("#scan", function () {
    it("charges 3.11 for Fruit tea", function () {
      var sut = new Checkout()
      sut.scan("FR1")
      assert.strictEqual(sut.total(), 3.11)
    })

    it("charges 5.00 for Strawberries (SR1)", function () {
      var sut = new Checkout()
      sut.scan("SR1")
      assert.strictEqual(sut.total(), 5.00)
    })

    it("adds the item to the basket", function () {
      var sut = new Checkout()
      sut.scan("CF1")
      assert.deepStrictEqual(sut.basket, { "CF1": 1 })
    })

    it("increments the quantity count when the same item is added again to the basket", function () {
      var sut = new Checkout()
      sut.scan("CF1")
      sut.scan("CF1")
      assert.deepStrictEqual(sut.basket, { "CF1": 2 })
    })
  })

  describe("#total", function () {
    it("discounts 3.11 for every 2 FR1s added", function () {
      var sut = new Checkout()
      sut.scan("FR1")
      sut.scan("FR1")
      assert.strictEqual(sut.total(), 3.11)
      sut.scan("FR1")
      sut.scan("FR1")
      assert.strictEqual(sut.total(), 6.22)
    })

    it("drops the price of SR1 to 4.50 when buying 3 or more", function () {
      let sut = new Checkout()
      sut.scan("SR1")
      sut.scan("SR1")
      assert.strictEqual(sut.total(), 10)
      sut.scan("SR1")
      assert.strictEqual(sut.total(), (4.50 * 3))
    })
  })
})
