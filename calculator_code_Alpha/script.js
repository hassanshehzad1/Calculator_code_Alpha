let userInput = document.querySelector("#userInput");
let displayInput = document.querySelector("#displayInput");
let buttons = document.querySelectorAll(".each_col");

// Now itertaing the buttons

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    userInput.removeAttribute("disabled");

    // getting the value
    let buttonValue = button.innerHTML;
    console.log(buttonValue);
    if (buttonValue == "AC") {
      clearScreen();
    } else {
      if (buttonValue == "=") {
        if (userInput == "") {
          alert("please fill the value");
        } else {
          let finalValue = userInput.value;
          displayInfo(finalValue);
        }
      } else {
        userInput.value += buttonValue;
      }
    }
  });
});

const displayInfo = (value) => {
  console.log(value);
  displayInput.removeAttribute("disabled");

  let x = eval(value);
  displayInput.value = x;
};

// clear screen
function clearScreen() {
  userInput.value = "";
  displayInput.value = "";
}
let img = document.querySelector(".img");
let theme = document.querySelector(".theme");
let calculatorConatiner = document.querySelector(".calculator_conatiner");
theme.addEventListener("click", (event) => {
  calculatorConatiner.classList.toggle("dark_theme");
  if (img.alt == "moon") {
    img.alt = "sun";
    img.src = "sun.png";
  } else {
    img.alt = "moon";
    img.src = "moon.png";
  }
});
