var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catfriends:[
    
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight : 8,
    furcolor : 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   //Add height and weight to Fluffy
  cat.weight = 8;
  cat.furcolor ='white';
   console.log(cat);
   //Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name = 'fluffyy';
   console.log(cat);
   //List all the activities of Fluffyy’s catFriends.
   var a = cat.catfriends;
   for(i in a){
       console.log(a[i].activities);
       }
   //Print the catFriends names.
   for(j in a){
       console.log(a[j].name);
       } 
   //Print the total weight of catFriends
   var weight = 0;
   for(k in a){
    weight+= +a[k].weight;
    } 
    console.log(weight);
    //Print the total activities of all cats (op:6)
    console.log(cat.activities);
    var a = cat.catfriends;
   for(i in a){
       console.log(a[i].activities);
       }
    //Add 2 more activities to bar & foo cats
    for(i in a){
        a[i].activities.push('jump','stare');
        }
    console.log(cat);
    //Update the fur color of bar
    for(i in a){
        if(a[i].name == 'bar'){
            a[i].furcolor ='blue';
        }
    }
    console.log(cat);