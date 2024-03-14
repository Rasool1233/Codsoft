function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
