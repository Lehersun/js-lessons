// Задача
document.querySelector("#button1").addEventListener("click", (e) => {

  function generateRandomDigit() {
    let digit = Math.floor(Math.random() * 100);
    return digit;
  }

  let popitki = 10;
  let i = generateRandomDigit();


  do {
    let val = prompt("Я загадал число от 0 до 100. Отгадаете?(у Вас осталось " + popitki + " попыток)");
    console.log(i);

    if (val == null) {
      alert("Хорошо поиграли");
      break;
    } else if (isNaN(val)) {
      alert("Это не число, попробуйте снова");
    } else if (!val.trim()) {
      alert("Строка не может быть пустой");
    } else {
      if (parseInt(val) < i) {
        alert("Больше!");
      } else if (parseInt(val) > i) {
        alert("Меньше!");
      } else {
        alert("Как ты догадался, что я загадал " + i + "?");
        let newGame = confirm("Сыграем еще разок?");
        if (newGame == true) {
          i = generateRandomDigit();
          popitki = 11;
        } else {
          break
        }
      }
    }
    popitki--;
  } while (popitki > 0);
  alert("Хорошо поиграли");
});