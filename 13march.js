//1.Count the occurrences
function wordCount(str) {
    // Split the input string into words
    const words = str.split(/\s+/);
  
    // Create a Map to store word counts
    const wordMap = new Map();
  
    // Iterate through the words
    words.forEach(word => {
      // Convert the word to lowercase to ensure case-insensitive counting
      const lowercaseWord = word.toLowerCase();
  
      // If the word already exists in the map, increment its count
      if (wordMap.has(lowercaseWord)) {
        wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
      } else {
        // If the word doesn't exist in the map, add it with a count of 1
        wordMap.set(lowercaseWord, 1);
      }
    });
  
    return wordMap;
  }
  
  // Example usage:
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const result = wordCount(text);
  console.log(result);


  //2. Only unique items are allowed
  function removeDuplicates(nums) {
    // Create a Set from the array, which automatically removes duplicates
    const uniqueSet = new Set(nums);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    
    return uniqueArray;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 2, 3, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

  

  //3. Swap the values
  function swapValues(x, y) {
    // Destructure the variables into an array and swap their positions
    [x, y] = [y, x];
    
    // Return an array with the swapped values
    return [x, y];
  }
  
  // Example usage:
  let a = 5;
  let b = 10;
  console.log("Before swap:", a, b); // Output: Before swap: 5 10
  
  // Call the function to swap the values
  [a, b] = swapValues(a, b);
  console.log("After swap:", a, b); // Output: After swap: 10 5

  

  //4. Access random elements
  function extractElements(arr) {
    // Destructure the array into variables representing the first, second, and last elements
    const [first, second, ...rest] = arr.reverse(); // Reverse the array to easily extract the last element
    
    // Return an array with the first, second, and last elements
    return [first, second, rest.reverse()[0]];
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  const extractedElements = extractElements(array);
  console.log(extractedElements); // Output: [1, 2, 5]

  



  //5. Min and Max values
  function findMaxAndMin(arr) {
    // Use the spread operator to pass array elements as arguments to Math.max() and Math.min()
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    // Return an object with properties max and min
    return { max, min };
  }
  
  // Example usage:
  const Numbers = [5, 2, 7, 1, 9];
  const Result = findMaxAndMin(numbers);
  console.log(result); // Output: { max: 9, min: 1 }

  



//6. Nested Objects
function extractNameAndStreet(person) {
    // Destructure the nested address object to extract the street property
    const { name, address: { street } } = person;
    
    // Return an object with the extracted name and street properties
    return { name, street };
  }
  
  // Example usage:
  const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "BB, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  const result1 = extractNameAndStreet(person);
  console.log(result1); // Output: { name: "Mithun", street: "BB, Block B, Industrial Area." }
  