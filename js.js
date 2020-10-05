// Задача
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

setInterval(tickTak, 1000);
