// Input values
const bill = document.querySelector(".bill");
const percentageButton = document.querySelectorAll(".percentage-button");
const customPercentage = document.querySelector(".percentage-field");
const people = document.querySelector(".people");

//Results
const tipPerson = document.querySelector(".tip-person");
const totalPerson = document.querySelector(".total-person");

percentageButton.forEach((percentage) => {
  percentage.addEventListener("click", () => {
    if (percentage.classList.contains("selected")) {
      percentage.classList.remove("selected");
      percentage.classList.add("unselected");
    } else {
      percentageButton.forEach((e) => {
        e.classList.remove("selected");
      });
      percentage.classList.remove("unselected");
      percentage.classList.add("selected");
    }
  });
});
