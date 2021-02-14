var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    
   for(i in array){
       var myobject = {};
       for(j in array[i]){
           var key = array[i][j][0];
           myobject[key] = array[i][j][1];
           
       }
       tranformEmployeeList.push(myobject);
   }
    
    return tranformEmployeeList;
   }
   console.log(transformEmployeeData());