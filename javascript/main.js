// Input values
const bill = document.querySelector(".bill");
const percentageButton = document.querySelectorAll(".percentage-button");
const customPercentage = document.querySelector(".percentage-field");
const people = document.querySelector(".people");

//Results
const tipPerson = document.querySelector(".tip-person");
const totalPerson = document.querySelector(".total-person");

let tipPercentage = 0;
let mealAmount = 0;
let peopleNumber = 1;

percentageButton.forEach((percentage) => {
  percentage.addEventListener("click", () => {
    if (percentage.classList.contains("selected")) {
      tipPercentage = 0;
      percentage.classList.remove("selected");
      percentage.classList.add("unselected");
    } else {
      percentageButton.forEach((event) => {
        event.classList.remove("selected");
      });
      tipPercentage = percentage.value; // is giving UNDEFINED -- WHY?
      percentage.classList.remove("unselected");
      percentage.classList.add("selected");
      console.log(tipPercentage);
    }
    customPercentage.value = "";
  });
});

customPercentage.addEventListener("input", () => {
  if (customPercentage.value >= 0) {
    percentageButton.forEach((event) => {
      event.classList.remove("selected");
    });
    tipPercentage = customPercentage.value;
  }
});
