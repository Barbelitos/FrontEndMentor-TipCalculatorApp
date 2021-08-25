// Input values variables
const bill = document.querySelector(".bill");
const percentageButton = document.querySelectorAll(".percentage-button");
const customPercentage = document.querySelector(".percentage-field");
const people = document.querySelector(".people");
const resetButton = document.querySelector(".reset-button");

// Results variables
const tipPerson = document.querySelector(".tip-person");
const totalPerson = document.querySelector(".total-person");

// Errors variables
const billError = document.querySelector(".bill-error");
const peopleError = document.querySelector(".people-error");

// Counters
let tipPercentage = 0;
let mealAmount = 0;
let peopleNumber = 1;

// Percentage buttons
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
      tipPercentage = percentage.value;
      percentage.classList.remove("unselected");
      percentage.classList.add("selected");
    }
    customPercentage.value = "";
    calculateValues();
  });
});

// Custom percentage input
customPercentage.addEventListener("input", () => {
  if (customPercentage.value >= 0) {
    percentageButton.forEach((event) => {
      event.classList.remove("selected");
    });
    tipPercentage = customPercentage.value;
    calculateValues();
  }
});

// Bill and Number of people errors
bill.addEventListener("input", () => {
  mealAmount = Number(bill.value);
  if (mealAmount < 0 && mealAmount != "") {
    bill.classList.add("error");
    billError.classList.add("show-error");
  } else {
    bill.classList.remove("error");
    billError.classList.remove("show-error");
    calculateValues();
  }
});

people.addEventListener("input", () => {
  peopleNumber = people.value;
  if (peopleNumber <= 0 && peopleNumber != "") {
    people.classList.add("error");
    peopleError.classList.add("show-error");
  } else {
    people.classList.remove("error");
    peopleError.classList.remove("show-error");
    calculateValues();
  }
});

// Reset Button
resetButton.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  customPercentage.value = "";

  percentageButton.forEach((event) => {
    event.classList.remove("selected");
    event.classList.add("unselected");
  });

  // Reset results
  tipPerson.innerHTML = "$0.00";
  totalPerson.innerHTML = "$0.00";
});

// Function to calculate values
function calculateValues() {
  if (mealAmount >= 0 && peopleNumber >= 1) {
    let tipAmount = (tipPercentage * mealAmount) / 100;
    let total = mealAmount + tipAmount;

    //Display the results
    tipPerson.innerHTML = `$${(tipAmount / peopleNumber).toFixed(2)}`;
    totalPerson.innerHTML = `$${(total / peopleNumber).toFixed(2)}`;
  }
}
