const FEDERAL_TAX_BRACKET = [
    [15, 47630, 0],
    [20.5, 95259, 7145],
    [26, 147667, 16908],
    [29, 210371, 30535],
    [33, Number.POSITIVE_INFINITY, 48719]
]
const PROVICIAL_TAX_BRACKET = {
    "ON": [
        [5.05, 43906, 0],
        [9.15, 87813, 2217],
        [11.16, 150000, 6235],
        [12.16, 220000, 13175],
        [13.16 , Number.POSITIVE_INFINITY, 21687]
    ]
}

module.exports = { FEDERAL_TAX_BRACKET, PROVICIAL_TAX_BRACKET };