<<<<<<< HEAD
// Задача 1

function month(time) {
  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let i = months[time.getMonth()];
  return i;
}

function day(time) {
  let days = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  let i = days[time.getDay() - 1];
  return i;
}

function hour(time) {
  let h = time.getHours();
  if (h == 0 || (h >= 5 && h <= 20)) {
    h = h + " часов ";
  } else if (h == 1 || h == 21) {
    h = h + " час ";
  } else {
    h = h + " часа ";
  }
  return h;
}

function minsec(word, time) {
  let end = ["", "а", "ы", "ы", "ы", "", "", "", "", ""];
  let k;
  if (word == "минут") {
    k = time.getMinutes();
  } else if (word == "секунд") {
    k = time.getSeconds();
  } else {
    k = "необходимо передать значение секунд или минут";
  }
  let key;
  if ((k >= 11) & (k <= 14)) {
    key = "";
  } else {
    key = end[k % 10];
  }
  return k + " " + word + key;
}

function tickTak() {
  let time = new Date();
  console.log(
    "Сегодня " +
    time.getDate() +
    " " +
    month(time) +
    " " +
    time.getFullYear() +
    " года, " +
    day(time) +
    ", " +
    hour(time) +
    minsec("минут", time) +
    " " +
    minsec("секунд", time)
  );
}

function timeInterval() {
  setInterval(tickTak, 1000);
  button1.removeEventListener("click", timeInterval);
}

// Задача 2

function checkPass(login, password) {
  let base = ["Лёха ,admin , admin", "Вова, vova , vovapass", "Вася, vasya , vasyapass", "Петя, petya , petyapass", "Сэнсэй, teacher , superuser"];
}


function authenticator() {
  let popitki = 3;


  while (true) {
    let login = prompt("Введите логин");

    if (login == null) {
      alert("Не очень-то и хотелось");
      break;
    } else if (val.trim() == "") {
      alert("Строка не может быть пустой");
    } else {
      let pass = prompt("Введите пароль");
      if (pass == null) {
        alert("Не очень-то и хотелось");
        break;
      } else if (val.trim() == "") {
        alert("Строка не может быть пустой");
      } else {
        checkPass(login, pass);

=======
function task1(firstVal, secondVal) {
  let result;
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
  for (let i = firstVal; i < secondVal; i++) {
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
>>>>>>> parent of 8c8b4ad... lesson3
      }
      while (popitki > 0);
      break;
    }
<<<<<<< HEAD
  }
}


// Ивенты на кнопках
button1.addEventListener("click", timeInterval);
button2.addEventListener("click", authenticator);
=======
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
>>>>>>> parent of 8c8b4ad... lesson3
