var mapIndexed = R.addIndex(R.map);
const mapWithIndex = mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
console.log('mapIndex: ')
