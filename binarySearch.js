function binarySearch(array, value) {
    let start = 0;
    let end = array.length -1;
    let index = Math.floor( ( array.length / 2 ) );
    while (array[index] !== value && start <= end) {
        if (value > array[index]) start = index + 1;
        else end = index - 1;
        index = start + Math.floor( ( end - start ) / 2 );
    }
    return array[index] === value ? index : -1;
}

export default binarySearch;