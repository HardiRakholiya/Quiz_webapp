const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progresstext = document.querySelector('#progresstext');
const scoretext = document.querySelector('#score');
const  progressbarfull = document.querySelector('#progressbarfull');

let currentquestion = {}
let acceptinganswers = true
let score = 0
let questioncounter =0;
let availablequestions = []

let questions = [

    {
        question : 'what is 2+2',
        choice1: '2',
        choice2: '3',
        choice3:'5',
        choice4: '4',
        answer: 4,

    },
    {
        question :'What is the full form of ALU?',
          choice1 :'Arithmetic Logic Unit',
         choice2 : 'Arithmetic Local Unit',
        choice3 : 'Advance Logical Unit',
         choice4 : 'None of these',
       answer : 1 ,

    },
    {
        question :'Tags consists of keywords enclosed within',
        choice1 :'Paranthesis ()',
       choice2 : 'Square brackets []',
      choice3 : 'Flower brackets {}',
       choice4 : 'Angled brackets <>',
     answer : 4 ,
    },
    {
        question :'Interpreter is preferred over a compiler is',
        choice1 :'During program development phase',
       choice2 : 'When storage space is to be minimized',
      choice3 : 'When efficient use of computer resources is the consideration',
       choice4 : 'All of these',
     answer : 1 ,
    },
    {
        question :'Which of the following is used for grouping of characters into tokens?',
        choice1 :'Scanner',
       choice2 : ' Code generator',
      choice3 : 'Code optimizer',
       choice4 : 'Parser',
     answer : 1,
    },
    {
        question :'Type checking is normally done during',
        choice1 :'Code optimization',
       choice2 : ' Syntax directed translation',
      choice3 : ' Lexical analysis',
       choice4 : 'Syntax analysis',
     answer : 2 ,
    },
    {
        question :'Back- patching is useful for handling',
        choice1 :'Forward references',
       choice2 : 'Backward references',
      choice3 : 'Conditional jumps',
       choice4 : 'Unconditional jumps',
     answer : 1 ,
    },
    {
        question :'A basic block can be analyzed by',
        choice1 :'Graph with cycles',
       choice2 : 'DAG',
      choice3 : 'Flow graph',
       choice4 : ' None of these',
     answer : 2,
    },
    {
        question :'The output of lexical analyzer is',
        choice1 :'Strings of characters',
       choice2 : 'A set of tokens',
      choice3 : 'Syntax tree',
       choice4 : ' A set of regular expressions',
     answer : 2 ,
    },
    {
        question :'Symbol table can be used for',
        choice1 :' Storage allocation',
       choice2 : 'Checking type compatibility',
      choice3 : 'Suppressing duplication of error messages',
       choice4 : ' All of these',
     answer : 4 ,
    },

   


]


const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;


startgame = () =>{
    questioncounter = 0
    score =0
    availablequestions = [...questions]
    getnewquestion()
}

getnewquestion = () =>{
    if(availablequestions.length === 0 || questioncounter > MAX_QUESTIONS){
        localStorage.setItem('mostrecentscore' , score)

        // const mostrecentscore = parseInt(localStorage.getItem('mostrecentscore')) || 0;
        // finalscore.innerText = mostrecentscore;



        return window.location.assign('./end.html')
    }

    questioncounter++
    progresstext.innerText = `question ${questioncounter} of ${MAX_QUESTIONS} `;
    progressbarfull.style.width = `${(questioncounter/MAX_QUESTIONS) * 100}% `


    const questionindex = Math.floor(Math.random() * availablequestions.length )
    currentquestion = availablequestions[questionindex]
    question.innerText = currentquestion.question





    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentquestion['choice'+ number]

    })

    availablequestions.splice(questionindex ,1)

    acceptinganswers = true

}

choices.forEach(choice =>{
   
choice.addEventListener('click', e =>{
   
 if(!acceptinganswers) return

 acceptinganswers = false
 const selectedchoice = e.target
 const selectedanswer = selectedchoice.dataset['number']


 let classtoapply = selectedanswer == currentquestion.answer ? 'correct' : 'incorrect'

 if(classtoapply ==='correct'){
    incrementscore(SCORE_POINTS)
 }


 selectedchoice.parentElement.classList.add(classtoapply)

 setTimeout(() => {
    selectedchoice.parentElement.classList.remove(classtoapply)

    getnewquestion()

 } , 100)
      
})


})



incrementscore = num =>{
    score +=num
    scoretext.innerText = score

}

startgame()

