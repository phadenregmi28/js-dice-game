let roll = document.querySelector("#roll");
let totalResult = document.querySelector("#result");
let showRolls = document.querySelector("#showRoll");
let lists = document.querySelector("#lists");
roll.addEventListener("click", function () {
  
    let dieRolls = [];
  
  let userInput = document.querySelector("#num").value;
  let num = 0;
  let total = 0;
  while (num < userInput) {
    let x = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(x);
    total += dieRolls[num];
    num += 1;
  }
  totalResult.innerHTML = total;
  showRolls.addEventListener("click", function () {
    str = "<ol>";
    dieRolls.forEach(function (die) {
      str += "<li>" + die + "</li>";
    });
    str += "</ol>";
    lists.innerHTML = str;
  });
});
 let reset = document.querySelector("#resets");
reset.addEventListener("click",function() {
    totalResult.innerHTML = 0;
    lists.innerHTML = 0;
    userInput.value = 0;
    document.querySelector("#num").value = 0;
});