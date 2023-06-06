let array = [3, 5, 7];

function sumOfSquares(arr) {
    return arr.reduce((total, number, index) => {
        console.log(`Index: ${index}`);
        console.log(`Number: ${number}`);
        return total + number * number;
    }, 0)
}
console.log(sumOfSquares(array));