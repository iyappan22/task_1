//step 1.create a request variable.
var request = new XMLHttpRequest();

//step2. create a connection
request.open('get','https://restcountries.eu/rest/v2/all',true);

//step3. send conection.
request.send();

//step4 process and load the respones.
request.onload = function(){
    var data = JSON.parse(this.response);
   //task 1 : print the countries flag 
    console.log(data);
    var population = 0;
    for(i in data){
        population += data[i].population;
    }
    console.log(population);
}