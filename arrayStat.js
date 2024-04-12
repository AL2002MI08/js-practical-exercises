// // functioon called arrayStats that returns an object containing various statistics about the array.

// The returned object should have the following properties:
// sum: The sum of all numbers in the array.
// average: The average of all numbers in the array (rounded to two decimal places).
// min: The minimum value in the array.
// max: The maximum value in the array.

function stats(arr){
    if(arr.length === 0){
      return {
        sum: 0,
        average: 0,
        min: undefined,
        max: undefined
      };

    };
    const sum = arr.reduce((acc,value) => acc + value, 0)
    const average = (sum / arr.length).toFixed(2);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        sum,
        average,
        min,
        max
    }
}

console.log(stats([1, 2, 3, 4, 5]))