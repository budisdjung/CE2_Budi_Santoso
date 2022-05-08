const array = [31, 9, 54, 11, 43, 6, 67] // the bracket [] is array , inside the bracket is data [integer, string, boleans, etc]

function maxMin(array) { //array here is parameter
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    return `max: ${max}, min: ${min}` // contoh penulisan string dengan variabel
};

console.log(maxMin(array))