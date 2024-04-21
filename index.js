// show the number that is pressed on the screen
const outcome = document.querySelector(".outcome");
function appendDisplay(input){
  outcome.innerText += input;
}

function clearDisplay(){
  outcome.innerText = "";
}

function calculate(){
  try{
    const result = eval(outcome.innerText);
    outcome.innerText = result;
  }
  catch(err){
    outcome.innerText = "ERROR";

    setTimeout(() => {
      outcome.innerText = "";
    }, 2500);
  }
}

function del(){
  outcome.innerText = outcome.innerText.slice(0, -1);
}