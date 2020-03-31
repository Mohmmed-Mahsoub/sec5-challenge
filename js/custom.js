var score = 0;

// A function constructor work as a machine to print whatever question and check the right answer

var Question = function(question, answers, correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
    this.showQuestion = function() {
        //print whatever question
        console.log(question);
        //print whatever answer
        for(var i=0; i < answers.length; i++) {
            console.log(answers[i]);
        }
    }
    //check the right answer
    
    this.checkAnswer = function() {
        
        if(document.querySelector('.show-case input').value == correctAns) {
            score = score + 1;
            console.log('Correct Answer');
            
        }else {
            console.log('Wrong Answer');
        }
        console.log('Your score is: ' + score);
    }
    
}

// here we put the questions include: the question itself, the answers and the correct answer

var allQuestions = [
    q1 = new Question(
        'Is Egypt a rich country??', //the question itself
        ['0: Yes','1: No'], //the answers
        0 //the correct answer
    ),
    q2 = new Question(
        'How many Americans are Egyptian?',
        ['0: 50 000','1: 110 000', '2: 140 000'],
        2
    ),
    q3 = new Question(
        'how many Egyptians?',
        ['0: 50 million','1: 92 million', '2: 120 million'],
        1
    )
]

// Generate a random number depends on the number of questions
 
var questionNum = Math.floor(Math.random() * allQuestions.length);

// Call showQuestion function on any one of the of questions

allQuestions[questionNum].showQuestion();

// Waiting for the answer number from the user then check if it's correct
document.querySelector('.show-case form').addEventListener('submit', function() {
    // preventDefault behiver for the form
    event.preventDefault();
    
    //check if the user wants to continue or not

    if(document.querySelector('.show-case input').value == 'exit') {
        document.querySelector('.show-case').style.display = 'none'
    } else {
        //check the right answer
        allQuestions[questionNum].checkAnswer();
        // Generate a random number depends on the number of questions
        questionNum = Math.floor(Math.random() * allQuestions.length);
        // Call showQuestion function for the next randon question
        allQuestions[questionNum].showQuestion();
    }
    //make the input empty after the user submits his answer
    document.querySelector('.show-case input').value = '';
    
});
