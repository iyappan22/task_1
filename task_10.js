var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    Answer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    Answer: '1985'
    },
    {
    question: 'What city were you born in?',
    Answer: 'NYC'
    }
   ]
   function chksecurityQuestions(securityQuestions,question,ans) {
   var answer1 = false;
    for(var i in securityQuestions){
        if(securityQuestions[i].question == ques ){
            if(securityQuestions[i].Answer === ans ){
                answer1 = true;
            }
        }
    }
    return answer1;
   }
   //Test case1:
    var ques = 'What was your first pet’s name?';
    var ans =  'FlufferNutter';
    var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status);
   //Test case2:
    var ques = 'What was your first pet’s name?';
    var ans  =  'DufferNutter';
    var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status); 