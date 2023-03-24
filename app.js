async function getQuestion() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=23&type=multiple");
    const historyDatajson = await response.json();
    let historyData = historyDatajson.results;
    console.log(historyData);

    let correctAnswers = [];
    let incorrectAnswers = [];
    let questions = [];

    //counters below
    let counter1 = 0;

    let counter2 = 1;

    let counter3 = 2;


    for(let i = 0; i < historyData.length; i++) {

        correctAnswers.push(historyData[i].correct_answer);
        incorrectAnswers.push([...historyData[i].incorrect_answers]);
        questions.push(historyData[i].question);
    }
    const currentQuestion = document.querySelector("#question");
    currentQuestion.textContent = questions[counter1];
    
    const answer1 = document.querySelector("#btn-1");
    answer1.setAttribute("value" , correctAnswers[counter1]);

    const answer2 = document.querySelector("#btn-2");
    answer2.setAttribute("value" , incorrectAnswers[counter1][0]);
    
    console.log(incorrectAnswers);

    const answer3 = document.querySelector("#btn-3");
    answer3.setAttribute("value" , incorrectAnswers[counter2][1]);
    console.log(incorrectAnswers);

    let answer1at = answer1.getAttribute("value");
    let answer2at = answer2.getAttribute("value");
    let answer3at = answer3.getAttribute("value");


    const answer4 = document.querySelector("#btn-4");
    answer4.setAttribute("value" , incorrectAnswers[counter3][2]);
    let answer4at = answer4.getAttribute("value");
    //console.log(answer4at)

    answer1.addEventListener('click', function () { if (answer1at === correctAnswers[0]) { alert("Correct Answer!") }})

    answer2.addEventListener('click', function () { if (answer2at === incorrectAnswers[counter1][0]) { alert("This is the incorrect answer") } })

    answer3.addEventListener('click', function () { if (answer3at === incorrectAnswers[counter2][1]) { alert("This is the incorrect answer") } })

    answer4.addEventListener('click', function () { if (answer4at === incorrectAnswers[counter3][2]) { alert("This is the incorrect answer") } })

    console.log(incorrectAnswers[counter1][0]);

//this call back function/event listener will iincrease counts and 
//change the questions and answers when clicked

const submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", function() {
    counter1 ++; 
    counter2 ++; 
    counter3 ++;
    currentQuestion.textContent = questions[counter1];
    answer1.setAttribute("value" , correctAnswers[counter1]);
    answer2.setAttribute("value" , incorrectAnswers[counter1][0]);
    answer3.setAttribute("value" , incorrectAnswers[counter2][1]);
    answer4.setAttribute("value" , incorrectAnswers[counter3][2]);
    answer1at = answer1.getAttribute("value");
    answer2at = answer2.getAttribute("value");
    answer3at = answer3.getAttribute("value");
    answer4at = answer4.getAttribute("value");

})


    return historyData;

}




getQuestion();
