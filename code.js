//I used chatgpt to write this code as this problem looked interesting but I just didn't have the time to do it
function flip(array, n) {
    var temp = array;
    var subArray = array.slice(0, n).reverse(); //Get the first elements up to n and reverse them

    for (let i = 0; i < n; i++) { //Add them back into the array
        temp[i] = subArray[i];
    }
    return temp;
}

function pancakeSort(array) {
    var n = array.length;
    for (var size = n; size > 1; size--) {
        
        let maxIndex = 0;
        for (let i = 1; i < size; i++) { //Find the max element in the array
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }

        if (maxIndex !== 0) { //Send the max element to the top if its not already there
            flip(array, maxIndex + 1);
        }
        
        flip(array, size); //Now move the max element to end of the array
    }
    return array;
}
