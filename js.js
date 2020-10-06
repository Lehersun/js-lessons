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
  let base = [{
    name: "Лёха",
    log: "admin",
    pass: "admin"
  }, {
    name: "Сэнсэй",
    log: "teacher",
    pass: "superuser"
  }, {
    name: "Вова",
    log: "vova",
    pass: "vovapass"
  }, {
    name: "Вася",
    log: "vasya",
    pass: "vasyapass"
  }, {
    name: "Петя",
    log: "petya",
    pass: "petyapass"
  }];
  let result = base.find(item => item.log == login);

  if (result == undefined) {
    result = false;
  } else {
    if (result.pass === password) {
      result = result.name;
    } else {
      result = false;
    }

  }
  return result
}


function authenticator() {
  let attempts = 3;
  let check = false;
  while (check == false) {
    if (attempts > 0) {
      let login = prompt("Введите логин");

      if (login == null) {
        alert("Не очень-то и хотелось");
        break;
      } else if (login.trim() == "") {
        alert("Строка не может быть пустой");
      } else {
        do {
          let pass = prompt("Введите пароль (осталось попыток: " + attempts + ")");
          if (pass == null) {
            alert("Попробуйте ввести логин заново (осталось попыток: " + attempts + ")");
            break;
          } else if (pass.trim() == "") {
            alert("Строка не может быть пустой");
          } else {

            check = checkPass(login, pass);

            if (check == false) {
              alert("Нет пользователя с таким логином и паролем");
              attempts--;
            } else if (check === "Сэнсэй") {
              alert("Спасибо за проверку задания, Учитель");
              break;


            } else {
              alert(check + ", добро пожаловать!")
              break;
            }
          }

        } while (attempts > 0);
      }
    } else {
      alert("У Вас больше не осталось попыток")
      break;
    }
  }



}


// Ивенты на кнопках
button1.addEventListener("click", timeInterval);
button2.addEventListener("click", authenticator);