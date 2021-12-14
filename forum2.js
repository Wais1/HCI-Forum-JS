// Forum #2
const digitalDecipher = (eMessage, key) => {
    var subtracted = []
    key = Array.from(String(key), Number);      // Turn key into an array of int

    // Tracks and repeats the key's final words 
    var count = 0;
    const result = eMessage.map((currElement) => {
        if(count === key.length) count = 0;    // Reset count when it's full
        const number = currElement - key[count]   // Takes subtracted number and inserts into array of subtracted ints.
        subtracted.push(number)
        count++;
    });

    // Finally subtract the ints from the alphabet.
    var decodedMessage =''
    subtracted.map((curr, index) => {
        var letter = String.fromCharCode(curr+64);  // Convert each int to a letter. Add 64 to equate to the same letter.
        decodedMessage += letter                     // Add letter to array.
    })

    return decodedMessage
}

// Test 
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939))

// Test 2
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))

// Test 3
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100))