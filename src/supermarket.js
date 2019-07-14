class Supermarket {
  constructor () {
    this._total = 0
    this._priceList = {
      "FR1": 3.11,
      "SR1": 5.00,
      "CF1": 11.23
    }
    this._basket = {}
  }
  scan (code) {
    isNaN(this._basket[code]) ? this._basket[code] = 1 : this._basket[code] += 1
    this._total += this._priceList[code]
  }

  total () {
    return this._total - this.discount()
  }

  discount () {
    let discount = 0.00

    for (var key in this._basket) {
      if (key === "FR1") {
        let quantity = this._basket[key] // move this above?
        if (quantity % 2 === 0) {
          discount += (quantity * this._priceList[key]) / 2
        }
      } else if (key === "SR1") {
        let quantity = this._basket[key]
        if (quantity >= 3) {
          let normalTotal = quantity * this._priceList[key]
          let discountedTotal = quantity * 4.50
          discount += normalTotal - discountedTotal
        }
      }
    }
    return discount
  }

  get basket () {
    return this._basket
  }

  isEven (number) {
    return number % 2
  }
}

module.exports = Supermarket
