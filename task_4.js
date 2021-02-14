var object = {name: 'RajiniKanth', age: 33, hasPets : false};
var arr = [];
function printAllkeys(obj) {
    for(i in object){
        arr.push(i);
    }
    console.log(arr);
}
   printAllkeys();