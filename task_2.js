function alphabetizeString(str) {
    // Convert the string to an array of characters
    let charArray = str.split('');
    // Sort the array of characters in alphabetical order
    let sortedArray = charArray.sort();
    // Join the sorted array back into a string
    let sortedStr = sortedArray.join('');
    // Return the sorted string
    return sortedStr;
}

// Example string and output
let exampleString = 'webmaster';
console.log(alphabetizeString(exampleString)); // Expected Output: 'abeemrstw'
