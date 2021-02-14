var object = {name: 'RajiniKanth', age: 33, hasPets : false};
var arr = [];
function printAllValues(obj) {
    for(i in object){
        arr.push(object[i]);
    }
    console.log(arr);
}
   printAllValues();