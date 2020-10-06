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

      }
    }
  }
}


// Ивенты на кнопках
button1.addEventListener("click", timeInterval);
button2.addEventListener("click", authenticator);