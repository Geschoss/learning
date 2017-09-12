'use strict'

const sortArray = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

const binarySearch = (array, value) => {
    let low = 0;
    let guess = 0;
    let high = array.length - 1;
    let mid = 0;

    while (low <= high) {
        //просто интересно за сколько шагов
        console.log('tick');
        //
        mid = Math.round((low + high) / 2) | 0;
        console.log('mid', mid);
        guess = array[mid];
        if (guess === value) {
            return mid;
        } else if (guess > value) {
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(sortArray, 11));

const selectionSrt = arr => {
    const newArray = arr;
    let smallestIdx;
    let tmp;
    for(let i = 0, length = arr.length; i < length - 1; i++) {
        smallestIdx = i;
        for (let j = i + 1; j < length; j++) {
            if( newArray[j] < newArray[smallestIdx] ) {
                smallestIdx = j;
            }
        }
        tmp = newArray[i];
        newArray[i] = newArray[smallestIdx];
        newArray[smallestIdx] = tmp;
    }
    return newArray;
}

console.log(selectionSrt(sortArray));
