const FEDERAL_TAX_BRACKET = [
    [15, 48535],
    [20.5, 48534],
    [26, 53404],
    [29, 63895],
    [33, Number.POSITIVE_INFINITY]
]
const PROVICIAL_TAX_BRACKET = {
    "NL" : [
        [8.7, 37929],
        [14.5, 37929],
        [15.8, 59574],
        [17.3, 54172],
        [18.3, Number.POSITIVE_INFINITY]
    ],
    "PEI" : [
        [9.8, 31984],
        [13.8, 31984],
        [16.7, Number.POSITIVE_INFINITY]
    ],
    "ON": [
        [5.05, 44740],
        [9.15, 44742],
        [11.16, 60518],
        [12.16, 70000],
        [13.16 , Number.POSITIVE_INFINITY]
    ]
}

module.exports = { FEDERAL_TAX_BRACKET, PROVICIAL_TAX_BRACKET };