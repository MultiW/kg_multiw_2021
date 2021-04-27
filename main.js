/**
 * Convert a list of whole numbers into an array of strings representing the phonetic equivalent of 
 * the whole numbers.
 * @param {number[]|string[]} intList List of **whole numbers**
 * @returns {string[]} List of words corresponding to integers in intList
 */
function intToWords(intList) {
    const digitMap = {
        "0": "Zero",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine"
    };

    wordsList = [];

    // iterate each whole number
    intList.forEach(intStr => {
        let word = ""

        // iterate each digit of the whole number
        for (let i = 0; i < intStr.length; i++) {
            let digit = intStr.charAt(i);

            if (!(digit in digitMap)) {
                throw `Unexpected character "${digit}" in input. Expected list of integers.`;
            }

            word += digitMap[digit];
        }

        wordsList.push(word);
    });

    return wordsList;
}

function main() {
    // Get int list from CLI arguments
    let intList = [];
    process.argv.forEach((arg, index) => {
        // Skip unrelated arguments, i.e. "node main.js"
        if (index < 2) {
            return
        }

        intList.push(arg);
    })

    // Convert to word list
    let wordsList = intToWords(intList);

    // Format word list for display
    console.log(wordsList.join(","))
}

// == Script Start ==
main()