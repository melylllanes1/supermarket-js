class Supermarket {
  constructor () {
    this._total = 0
    this._priceList = {
      "FR1": 3.11,
      "SR1": 5.00,
      "CF1": 11.23
    }
    this._basket = []
  }
  scan (code) {
    this._basket.push(code)
    this._total += this._priceList[code]
  }

  total () {
    return this._total
  }

  get basket () {
    return this._basket
  }
}

module.exports = Supermarket
