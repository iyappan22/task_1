var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr1) {
    var newObject = {};
    var key = arr[0];
    newObject[key] = arr[arr.length-1];
 
 return newObject;
}
console.log(transformFirstAndLast(arr))