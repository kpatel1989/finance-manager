const FEDERAL_TAX_BRACKET = [
    [15, 46605],
    [20.5, 46603],
    [26, 51281],
    [29, 61353],
    [33, Number.POSITIVE_INFINITY]
]
const PROVICIAL_TAX_BRACKET = {
    "ON": [
        [5.05, 42960],
        [9.15, 42963],
        [11.16, 64077],
        [12.16, 70000],
        [13.16 , Number.POSITIVE_INFINITY]
    ]
}

module.exports = { FEDERAL_TAX_BRACKET, PROVICIAL_TAX_BRACKET };