// Step 1: Create an array of random integers
let numbers = [5, 12, 8, 130, 44, 23, 6, 7];

// Step 2: Create the filterArray function
function filterArray(arr, callback) {
    // Step 4: Filter the array using the callback
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// Step 3: Define the callback function to check if an element is even
function isEven(num) {
    return num % 2 === 0;
}

// Step 6: Display the original array and the filtered array
console.log("Original Array: " + numbers);
let evenNumbers = filterArray(numbers, isEven);
console.log("Filtered Array (Even Numbers): " + evenNumbers);

// You can also create another callback for odd numbers
function isOdd(num) {
    return num % 2 !== 0;
}

let oddNumbers = filterArray(numbers, isOdd);
console.log("Filtered Array (Odd Numbers): " + oddNumbers);
