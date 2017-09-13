console.log('start')
// get uniq from array
const numbers = [1,2,1,2,1,3,4,1];
const uniq = [...new Set(numbers)];
const uniq2 = Array.from(new Set(numbers));

console.log('uniq', uniq);
console.log('uniq2', uniq2);

// update an object in array by property
const initial = [ {id: 1, score: 1 }, {id: 2, score: 2 }, {id: 3, score: 4}];
const newValue = {id: 3, score: 3 };
const updated = initial.map(x => x.id === newValue.id ? newValue : x);
console.log(updated);

// remove object from array by property
const removedId = 3;
const without3 = initial.filter(x => x.id !== removedId);
console.log(without3);

//remove key from object
const fullObject = {
    foo: 'bar',
    useless: 1,
    usefull: 2
};

const {usfull, ...clean} = fullObject;
console.log(clean);

//merge an array of object
const data = [{a:1}, {b:2}, {x:3}];
const merged = data.reduce((acc, item) => ({ ...acc, ...item}), {});
console.log(merged);

//merge an array of object by property
const toMerge = [
    {id:1, value: 'a', },
    {id:2, value: 'b', },
    {id:3, value: 'c', },
    {id:1, score: 1, },
    {id:3, score: 2, },
];

const mergeByProperty = toMerge.reduce((result, obj) => ({
    ...result,
    [obj.id]: {
        ...result[obj.id],
        ...obj
    }
}), {})
console.log(mergeByProperty);


const toMergeByArrayIds = [1, 2,3 ]
const toMergeByArraya1 = [ {id: 1, something: 1}, {id: 2, something: 2} ]
const toMergeByArraya2 = [ {id: 1, else: 'fooo'}, {id: 2, else: 'bar'}, {id: 3, else: 'ky'} ]

const all = toMergeByArrayIds.map(id => ({
    ...toMergeByArraya1.filter( x => x.id === id)[0],
    ...toMergeByArraya2.filter( x => x.id === id)[0],
}))

console.log(all)

// flatten an array of arrays
const arrayOfArray = [ [1, 2], [3, 4], [5, 6] ]
const flattened = arrayOfArray.reduce((result, item) => [...result, ...item], [])
console.log(flattened)

//fromPairs
const pairs = [ ['a', 1], ['b', 2], ['c', 3] ]
const asObject = pairs.reduce((res, [key, value]) => ({...res, [key]: value}), {});
console.log(asObject)
const asObject2 = {...(new Map(pairs))}
console.log(asObject2)

// substract two sets
const s1 = [ 1, 2, 3, 4, 5 ]
const s2 = [ 2, 4 ]
const substract = s1.filter(x => s2.indexOf(x) < 0)
console.log(substract)

//grouping an array by count
const grouping = (array, groupSize) => {
    return array.reduce((acc, item, index)=> {
        index % groupSize === 0 ? acc.push([]) : null
        acc[acc.length - 1].push(item)
        return acc
    }, [])
}

const groupingWithFill = (array, groupSize, fillitem) => {
    return array.reduce((acc, item, index) => {
        index % groupSize === 0 ? acc.push(new Array(groupSize).fill(fillitem)) : null
        acc[acc.length - 1][index % groupSize] = item
        return acc
    }, [])
}

const groupingArray = [1, 2, 3, 4, 5]

console.log(grouping(groupingArray, 3))
// => [[1, 2, 3, 4], [5]]
console.log(groupingWithFill(groupingArray, 3, null))
// => [[1, 2, 3, 4], [5, null, null, null]]
