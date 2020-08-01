var myQuestions = [
    {
        question: "HTML stands for?",

    options : [
      "Hyper Text Markup Language",
      "HyperText Markup Language",
     " Text Markup Language",
     "Hyper Text Language",
    ],
    correctAnswer: "HyperText Markup Language",
},
{
        question: "P tag is used for?",
      
    options : [
      "Citation",
      "BreakLine",
     "Heading",
     "Paragraph",
    ],
    correctAnswer: "Paragraph",
},
{
        question: " Name of course in which you enrolled?",
        
    options : [
      "Web and Mobile hybrid Application",
      "Graphic Designing",
     "Python Programming",
     "Cloud Computing",
    ],
    correctAnswer: "Web and Mobile hybrid Application",
},

]
function submitform(){
    var submitform = document.getElementById("exampleInputEmail1").value;
    var Email = document.getElementById("exampleInputPassword1").value
    
    location.href = "quiz.html";
} 


function showQuestion(e) {
var question = document.getElementById("question")
    question.innerHTML = myQuestions[e].question;

var btn = document.getElementsByClassName("btn");
for ( var i = 0; i < btn.length; i++ ){
btn[i].innerHTML = myQuestions[e].options[i];
}

}
var questionCount = 0;
var score = 0;


function next(){
    
questionCount++;
check(questionCount)
    showQuestion(questionCount)
    removeActiveClass()
}


var questionCount = 0;
function back(){
    questionCount--;
    check(questionCount)
    showQuestion(questionCount)
    removeActiveClass()
}

function putActiveClass(e){
    removeActiveClass()
       this.classList.add("active");
}

function removeActiveClass(){
    var btn = document.getElementsByClassName("btn")
    for ( var i = 0; i < putActiveClass.length; i++ ){
       btn[i].classList.remove("active");
}
}

function check(e){

    var user_answer = document.getElementsByClassName("btn");
   
if(    user_answer === myQuestions[0].correctAnswer){ ;
    


score += 10
alert("your score is " + score)
}
else{

    alert("your answer is wrong")
}


}
