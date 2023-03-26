async function getQuestion() {
    const response = await fetch("https://opentdb.com/api.php?amount=50&category=23&type=multiple");
    //https://opentdb.com/api.php?amount=10&category=23&type=multiple
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
    
    //refactoring of answer inputs 
    /* --- PLAN ---
    Queryselect all button elements using the added 'button' class,
    then this will create an array of nodes.

    The currect answers is assigned based on the button input 'value'
    which is set using the setAtrribute value.

    this needs top be randomized so i think I could use the random method
    to index over the array in this case and based if the chosen button,
    I could assigned the correct answer to this button and the incorrect to the rest 
    The others so to say can be selected by indexing using random number 
    generator but excluding x (which will be assigned the correct answer number index),
    I call this plan 'picker'.

    picker psuedo breakdown- 

    random number generator generates 3 numbers ans sets the name attribute
    of three buttons to incorrect (these will be the incorrect value), then the other button
    without a value will be assigned the correct answer.
    
    this will have to be in both functions as the submit button will reset te code so to say.
    also I can check if the button has the correct or incorrect answer when clicked to 
    decide if the User selected the correct answer or not 
    */

    let result = [];
    let arr = [];
    let answer1 = document.querySelector("#btn-1");

    let answer2 = document.querySelector("#btn-2");

    let answer3 = document.querySelector("#btn-3");

    let answer4 = document.querySelector("#btn-4");

    //random number generator which will no call the same value twice
    function randomUniqueNum(range, outputCount) {

        for (let i = 1; i <= range; i++) {
          arr.push(i)
        }
      
      
        for (let i = 1; i <= outputCount; i++) {
          const random = Math.floor(Math.random() * (range - i));
          result.push(arr[random]);
          arr[random] = arr[range - i];
        }
        
        console.log(result);
        return result;

      }
      randomUniqueNum(4, 4);

      //now ive added logic below as the value 1 will predict the correct answer
      //the 0 index value will be equal to button one etc
      let logic = 0;
      if (result[0] === 1) {

        answer1.setAttribute("name", "correct");
        answer1.setAttribute("value" , correctAnswers[counter1]);
        logic++;


      }else {

        answer1.setAttribute("name", "incorrect");
        answer1.setAttribute("value" , incorrectAnswers[counter1][0]);

      }

      if (result[1] === 1) {

        answer2.setAttribute("name", "correct");
        answer2.setAttribute("value" , correctAnswers[counter1]);
        logic += 2;

      }else {

        answer2.setAttribute("name", "incorrect");
        answer2.setAttribute("value" , incorrectAnswers[counter1][1]);

      }

      if (result[2] === 1) {

        answer3.setAttribute("name", "correct");
        answer3.setAttribute("value" , correctAnswers[counter1]);

      }else if (result[2] !== 1 && logic === 1) {

        answer3.setAttribute("name", "incorrect");
        answer3.setAttribute("value" , incorrectAnswers[counter1][0]);

      }else if (result[2] !== 1 && logic === 2) {

        answer3.setAttribute("name", "incorrect");
        answer3.setAttribute("value" , incorrectAnswers[counter1][1]);

      }else {

        answer3.setAttribute("name", "incorrect");
        answer3.setAttribute("value" , incorrectAnswers[counter1][2]);


      }
      

      if (result[3] === 1) {

        answer4.setAttribute("name", "correct");
        answer4.setAttribute("value" , correctAnswers[counter1]);

      }else {

        answer4.setAttribute("name", "incorrect");
        answer4.setAttribute("value" , incorrectAnswers[counter1][2]);

      }



    let answer1at = answer1.getAttribute("name");
    let answer2at = answer2.getAttribute("name");
    let answer3at = answer3.getAttribute("name");
    let answer4at = answer4.getAttribute("name");

//----------------------------------------------

    answer1.addEventListener('click', function () { if (answer1at === "correct") { alert("Correct Answer!") }else{
      alert("This is the incorrect answer, try again!")
    }
  
  })

    answer2.addEventListener('click', function () { if (answer2at === "correct") { alert("Correct Answer!") }else{
      alert("This is the incorrect answer, try again!")
    } })

    answer3.addEventListener('click', function () { if (answer3at === "correct") { alert("Correct Answer!") }else{
      alert("This is the incorrect answer, try again!")
    } })

    answer4.addEventListener('click', function () { if (answer4at === "correct") { alert("Correct Answer!") }else{
      alert("This is the incorrect answer, try again!")
    } })

//this call back function/event listener will iincrease the counts and 
//change the questions and answers when clicked

const submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", function() {
    counter1 ++; 
    counter2 ++; 
    counter3 ++;
    currentQuestion.textContent = questions[counter1];
    result = [];
    arr = [];
    answer1 = document.querySelector("#btn-1");

    answer2 = document.querySelector("#btn-2");

    answer3 = document.querySelector("#btn-3");

    answer4 = document.querySelector("#btn-4");

      randomUniqueNum(4, 4);

      //now ive added logic below as the value 1 will predict the correct answer
      //the 0 index value will be equal to button one etc
      logic = 0;
      if (result[0] === 1) {

        answer1.setAttribute("name", "correct");
        answer1.setAttribute("value" , correctAnswers[counter1]);
        logic++;


      }else {

        answer1.setAttribute("name", "incorrect");
        answer1.setAttribute("value" , incorrectAnswers[counter1][0]);

      }

      if (result[1] === 1) {

        answer2.setAttribute("name", "correct");
        answer2.setAttribute("value" , correctAnswers[counter1]);
        logic += 2;

      }else {

        answer2.setAttribute("name", "incorrect");
        answer2.setAttribute("value" , incorrectAnswers[counter1][1]);

      }

      if (result[2] === 1) {

        answer3.setAttribute("name", "correct");
        answer3.setAttribute("value" , correctAnswers[counter1]);

      }else if (result[2] !== 1 && logic === 1) {

        answer3.setAttribute("name", "incorrect");
        answer3.setAttribute("value" , incorrectAnswers[counter1][0]);

      }else if (result[2] !== 1 && logic === 2) {

        answer3.setAttribute("name", "incorrect");
        answer3.setAttribute("value" , incorrectAnswers[counter1][1]);

      }else {

        answer3.setAttribute("name", "incorrect");
        answer3.setAttribute("value" , incorrectAnswers[counter1][2]);


      }
      

      if (result[3] === 1) {

        answer4.setAttribute("name", "correct");
        answer4.setAttribute("value" , correctAnswers[counter1]);

      }else {

        answer4.setAttribute("name", "incorrect");
        answer4.setAttribute("value" , incorrectAnswers[counter1][2]);

      }
    
    
    
    
    answer1at = answer1.getAttribute("value");
    answer2at = answer2.getAttribute("value");
    answer3at = answer3.getAttribute("value");
    answer4at = answer4.getAttribute("value");
    answer1at = answer1.getAttribute("name");
    answer2at = answer2.getAttribute("name");
    answer3at = answer3.getAttribute("name");
    answer4at = answer4.getAttribute("name");

})
    console.log(counter1);

    return historyData;

}




getQuestion();