const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    // Checking if the given input is array or not.
    if (!Array.isArray(arr)) {
      return reject("Given input is not an array.");
    }

    // If input is array then filter and map the array to remove items other than string and make string to lowercase.
    const outputArray = arr
      .filter((item) => typeof item === "string")
      .map((item) => item.toLowerCase());
    resolve(outputArray);
  });

};


// Testing the solution:
const mixedArray = ['Pizza', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.error(error));
