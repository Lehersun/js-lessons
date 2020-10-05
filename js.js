function task1(firstVal, secondVal) {
  let result;
  firstVal = parseInt(firstVal);
  secondVal = parseInt(secondVal);

  if (firstVal == secondVal) {
    result = "они равны!";
  } else if (firstVal < secondVal) {
    result = "первое число меньше второго!";
  } else {
    result = "первое число больше второго!";
  }
  return result;
}

function task2(firstVal, secondVal) {
  let result;
  let years = [];
  result = 0;
  for (let i = firstVal; i <= secondVal; i++) {
    if (i % 4 == 0) {
      if (i % 100 !== 0) {
        years.push(i);
        result++;
      } else if (i % 400 == 0) {
        years.push(i);
        result++;
      }
    }
  }
  console.log(years);
  return result;
}
// Задача №1
document.querySelector("#button1").addEventListener("click", (e) => {
  let popitki = 10;
  do {
    let val1 = prompt("Введите первое число(у Вас осталось " + popitki + " попыток)");

    if (val1 == null) {
      alert("Прощай");
      break;
    } else if (isNaN(val1)) {
      alert("Это не число, попробуйте снова");
    } else if (!val1.trim()) {
      alert("Строка не может быть пустой");
    } else {
      do {
        let val2 = prompt("Введите второе число(у Вас осталось " + popitki + " попыток)");
        if (val2 == null) {
          alert("Прощай");
          break;
        } else if (isNaN(val2)) {
          alert("Это не число, попробуйте снова");
        } else if (!val2.trim()) {
          alert("Строка не может быть пустой");
        } else {
          let res = task1(val1, val2);
          alert("Вы ввели " + val1.trim() + " и " + val2.trim() + " и однозначно " + res);
          break;
        }
        popitki--;
      }
      while (popitki > 0);
      break;
    }
    popitki--;
  } while (popitki > 0);
});


// Задача №2

document.querySelector("#button2").addEventListener("click", (e) => {
  let popitki = 10;
  do {
    let val1 = prompt("Начнем вычислять високосные года. Введите год с когорого начинаем(у Вас осталось " + popitki + " попыток)");

    if (val1 == null) {
      alert("Прощай");
      break;
    } else if (isNaN(val1)) {
      alert("Это вообще не год или Вы словами решили написать?");
    } else if (!val1.trim()) {
      alert("Строка не может быть пустой");
    } else {
      do {
        let val2 = prompt("Введите год до которого будем считать(у Вас осталось " + popitki + " попыток)");
        if (val2 == null) {
          alert("Прощай");
          break;
        } else if (isNaN(val2)) {
          alert("Это вообще не год или Вы словами решили написать?");
        } else if (!val2.trim()) {
          alert("Строка не может быть пустой");
        } else if (val1 > val2) {
          alert("Второй год не может быть больше первого, попробуй сначала");
          break;
        } else {
          let res = task2(val1, val2);
          alert("Между " + val1.trim() + " и " + val2.trim() + " " + res + " високосных и все они выведены в консоль");
          break;
        }
        popitki--;
      }
      while (popitki > 0);
      break;
    }
    popitki--;
  } while (popitki > 0);
});

// Задача №3

document.querySelector("#button3").addEventListener("click", (e) => {
  let summa = 0;
  while (true) {
    let val = prompt("Уважаемый пользовать, введите что угодно, но лучше число");
    if (val !== null) {
      if (val.trim() !== "") {
        if (!isNaN(val)) {
          summa = summa + parseInt(val);
        }
      }
    } else {
      alert("Сумма всех введенных чисел равна " + summa);
      break;
    }
  }
});