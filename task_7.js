var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    let newObject = {};
    for(let i in arr){
        var key = arr[i][0];
        newObject[key] = arr[i][1];
    }
    return newObject;
}
console.log(fromListToObject(array));