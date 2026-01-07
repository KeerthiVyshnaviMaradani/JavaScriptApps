// events.js
// click event on button
function buttonResult() {
    alert("Hi");
}
let btnVal = document.getElementById("demo");
btnVal.addEventListener("click", buttonResult);
// click event 
let buttonResult1 = () => {
    alert("Advance happy new year paulliiiii");

}
let btnVal1 = document.getElementById("keer");
btnVal1.addEventListener("click", buttonResult1);
//mouse over mouse out logic
let h2Val = document.getElementById("sample");
const mouseOver = () => {

    h2Val.style.color = "Blue";
}
const mouseOut = () => {
    h2Val.style.color = "Green";
}
h2Val.addEventListener("mouseover", mouseOver);
h2Val.addEventListener("mouseout", mouseOut);
//
// input display logic
let inputVal = document.getElementById("Keer");
let outputVal = document.getElementById("Keerthi");

inputVal.addEventListener("input", () => {
    outputVal.textContent = inputVal.value;
});
