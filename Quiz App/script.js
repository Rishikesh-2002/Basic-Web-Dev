const questions=[
    {
        question: "What is the capital of India: ",
        answers:[
            {text:"New Delhi", correct: true},
            {text:"Kolkata", correct: false},
            {text:"Mumbai", correct: false},
            {text:"Bengaluru", correct: false},
        ]
    },
    {
        question: "Which is the largest animal in the world: ",
        answers:[
            {text:"Peacock", correct: false},
            {text:"Ostrich", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Elephant", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world: ",
        answers:[
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Africa", correct: false},
            {text:"Europe", correct: false},
        ]
    }
]

const questionElement=document.getElementById("question");
const answerBtns=document.getElementById("answer-buttons");
const nextbtn=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextbtn.innerHTML="Next";
    showQuestion();
}

function resetstate(){
    nextbtn.style.display="none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function showQuestion(){
    resetstate();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}

function selectanswer(e){
    const selectedbtn=e.target;
    const iscorrect= selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }

    Array.from(answerBtns.children).forEach(btn=>{
        if(btn.dataset.correct==="true"){
            btn.classList.add("correct");
        }
        btn.disabled=true;
    });
    nextbtn.style.display="block";
}

nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handlenextbutton();
    }
    else{
        startQuiz();
    }
});

function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}

function showscore(){
    resetstate();
    questionElement.innerHTML=`You score ${score} out of ${questions.length}`;
    nextbtn.innerHTML="Play again";
    nextbtn.style.display="block";
}

startQuiz();