function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        var currentValue = array[i];
        for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    return array;
}

export default insertionSort;