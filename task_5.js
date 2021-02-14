var object1 = {name:'ISRO', age: 35, role:'Scientist'};
var list = [];

function convertListToObject(obj) {
    // to conver object into array.
    var arr = Object.entries(object1)
    list.push(arr);
    console.log(list);
}
convertListToObject();