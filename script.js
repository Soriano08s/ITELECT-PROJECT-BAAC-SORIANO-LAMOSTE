const quizContainer = document.querySelector(".quiz-container");
const menuContainer = document.querySelector(".container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");


const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let numberOfQuestions = 5;
let quizCategory = "html";
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswerCount = 0;

// Display Quiz and result
const showQuizResult = () => {
  quizContainer.style.display = "none";
  resultContainer.style.display= "block";

  const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great Effort!`;
  document.querySelector(".result-message").innerHTML = resultText;
}


//Clear and reset timer
const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
}


const startTimer = () =>{
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;

    if (currentTime <= 0){
      clearInterval(timer);
      highlightCorrectAnswer();
      nextQuestionBtn.style.visibility = "visible";
      quizContainer.querySelector(".quiz-timer").style.background ="#c31402";

      // Disable all answer options after one option is selected
      answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    }
  }, 1000);
}


const getRandomQuestion = () => {
  const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase
  ()).questions || [];

  // Show the results if all questions have been used
  if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)){
    return showQuizResult();
  }


  // Filter out already asked quesions and choose a random one
  const availableQuestion = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index))
  const randomQuestion = categoryQuestions[Math.floor(Math.random() * availableQuestion.length)]
  
  questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  return randomQuestion;
}

// Highlight the correct answer option and add icon
const highlightCorrectAnswer = () =>{
  const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
  correctOption.classList.add("correct");
  const icontHTML = `<span class="material-symbols-rounded">check</span>`;
  correctOption.insertAdjacentHTML("beforeend", icontHTML);
}


// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
  clearInterval(timer);

  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' :'incorrect');
  !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;

  // Insert icon based on correctness
  const icontHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check' : 'close'}</span>`;
  option.insertAdjacentHTML("beforeend", icontHTML);

  // Disable all answer options after one option is selected
  answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

  nextQuestionBtn.style.visibility = "visible";
}


// Render the current question and its options in the quiz
const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if(!currentQuestion) return;
  
  resetTimer();
  startTimer();

  // Update the UI
  answerOptions.innerHTML ="";
  nextQuestionBtn.style.visibility = "hidden";
  quizContainer.querySelector(".quiz-timer").style.background ="gray";
  document.querySelector(".question-text").textContent = currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;




  // Create Option <li> elements and append them, and Add event
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li")
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.appendChild(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
  
}


const startQuiz = () => {

  menuContainer.style.display="none";
  quizContainer.style.display="block";

  quizCategory = menuContainer.querySelector(".category-option.active").textContent;

  numberOfQuestions = parseInt(menuContainer.querySelector(".question-option.active").textContent);

  renderQuestion();
}


document.querySelectorAll(".category-option, .question-option").forEach(option => {
  option.addEventListener("click", () => {
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});


const resetQuiz = () => {
  resetTimer();
  correctAnswerCount = 0;
  questionsIndexHistory.length = 0;
  menuContainer.style.display="block";
  resultContainer.style.display="none";
}


renderQuestion();

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click",resetQuiz);
document.querySelector(".start-quiz").addEventListener("click",startQuiz);