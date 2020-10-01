$(document).ready(function () {
  $(".top-block").html("Выбор сложности");
  $(".bottom__item1").html("Низкая");
  $(".bottom__item2").html("Средняя");
  $(".bottom__item3").html("Высокая");

  //массив с примерами
  // Задание для низкой сложности
  let easytask = [
    "1 + 1",
    "5 + 5",
    "10 + 17",
    "20 + 1",
    "1 - 0",
    "10 - 1",
    "20 - 20",
    "11 - 5",
  ];
  let easyvar = [
    ["2", "3", "1"],
    ["10", "11", "9"],
    ["27", "25", "28"],
    ["21", "23", "20"],
    ["1", "5", "2"],
    ["9", "10", "11"],
    ["0", "2", "3"],
    ["6", "10", "5"],
  ];

  let easyright = ["2", "10", "27", "21", "1", "9", "0", "6"];

  // Задание для средней сложности
  let midtask = [
    "100 * 1",
    "57 * 5",
    "209 * 50",
    "500 * 172",
    "1 + 1",
    "50 + 217",
    "500 + 247",
    "17 + 17",
    "100 - 1",
    "17 - 5",
    "1047 - 354",
    "1000000 - 5447",
  ];

  let midvar = [
    ["100", "99", "120"],
    ["282", "175", "285"],
    ["1450", "10450", "1300"],
    ["100000", "72000", "86000"],
    ["2", "5", "10"],
    ["263", "267", "285"],
    ["745", "753", "747"],
    ["31", "34", "47"],
    ["97", "100", "99"],
    ["12", "15", "20"],
    ["693", "700", "690"],
    ["999000", "995000", "994553"],
  ];

  let midright = [
    "100",
    "285",
    "10450",
    "86000",
    "2",
    "267",
    "747",
    "34",
    "99",
    "12",
    "693",
    "994553",
  ];
  // Задание для высокой сложности

  let hardtask = [
    "100 * 527",
    "52 * 275",
    "10000 * 57",
    "500 * 299",
    "800 + 10289",
    "1017 + 255",
    "249 + 999",
    "10198 + 909",
    "500 - 289",
    "999 - 912",
    "429 - 358",
    "999 - 99",
  ];

  let hardvar = [
    ["52700", "52800", "51000"],
    ["15300", "14300", "16300"],
    ["571000", "570000", "569000"],
    ["148500", "150500", "149500"],
    ["11090", "11091", "11089"],
    ["1272", "1273", "1271"],
    ["1248", "1247", "1249"],
    ["11108", "11107", "11109"],
    ["211", "212", "210"],
    ["87", "88", "89"],
    ["72", "73", "71"],
    ["901", "900", "899"],
  ];

  let hardright = [
    "52700",
    "14300",
    "570000",
    "149500",
    "11089",
    "1272",
    "1248",
    "11107",
    "211",
    "87",
    "71",
    "900",
  ];

  //массив для заданий
  let plus = [];
  //массив с вариантами ответов
  let plusotvet = [];
  //массив с правильными ответами
  let right = [];
  let plusresult = []; //сюда записываем ответы пользователя
  let checklist = []; //здесь данные по сверке с ответами
  let result = 0; //Переменная для подсчета баллов
  let num; //длина масива с заданиями
  let str;
  let col;
  let primer;

  $(".bottom-block").click(function () {
    p = $(this).html();
    $(".bottom-block").addClass("in-progress");
    $(".top").addClass("top__in-progress");

    if (p == "Средняя") {
      plus = midtask;
      plusotvet = midvar;
      right = midright;
      num = plus.length - 1; //длина масива с заданиями
      str = 0;
      col = 0;
      primer = plus[str];

      $(".top-block").html(primer + " = ?");
      // Записываем первый пример
      while (col <= 2) {
        otvet = plusotvet[str][col];
        $(".bottom__item" + (col + 1)).html(otvet);
        col++;
      }
      //Запускаем цикл по клику на ответ
      $(".bottom-block").click(function () {
        let choose = $(this).text();
        plusresult.push(choose);
        if (str < num) {
          str++;
          primer = plus[str];
          $(".top-block").html(primer + " = ?");
          for (col = 0; col <= 2; col++) {
            otvet = plusotvet[str][col];
            $(".bottom__item" + (col + 1)).html(otvet);
          }
        } else {
          //Проверка результата и вывод сообщения
          for (i = 0; i <= num; i++) {
            check = plusresult[i] == right[i];
            checklist.push(check);
          }
          for (i = 0; i <= num; i++) {
            if (checklist[i] == true) {
              result++;
            }
          }
          $(".bottom-block").remove();
          if (result == 1) {
            $(".top-block").text(
              "Вы набрали " + result + " балл из " + plus.length + " возможных"
            );
          } else if (result == 0) {
            $(".top-block").text(
              "Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
            );
          } else if ((result >= 2) & (result <= 4)) {
            $(".top-block").text(
              "Вы набрали " + result + " балла из " + plus.length + " возможных"
            );
          } else {
            $(".top-block").text(
              "Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
            );
          }
        }
      });
    } else if (p == "Низкая") {
      plus = easytask;
      plusotvet = easyvar;
      right = easyright;
      num = plus.length - 1; //длина масива с заданиями
      str = 0;
      col = 0;
      primer = plus[str];
      console.log(plus);
      $(".top-block").html(primer + " = ?");
      // Записываем первый пример
      while (col <= 2) {
        otvet = plusotvet[str][col];
        $(".bottom__item" + (col + 1)).html(otvet);
        col++;
      }
      //Запускаем цикл по клику на ответ
      $(".bottom-block").click(function () {
        let choose = $(this).text();
        plusresult.push(choose);
        if (str < num) {
          str++;
          primer = plus[str];
          $(".top-block").html(primer + " = ?");
          for (col = 0; col <= 2; col++) {
            otvet = plusotvet[str][col];
            $(".bottom__item" + (col + 1)).html(otvet);
          }
        } else {
          //Проверка результата и вывод сообщения
          for (i = 0; i <= num; i++) {
            check = plusresult[i] == right[i];
            checklist.push(check);
          }
          for (i = 0; i <= num; i++) {
            if (checklist[i] == true) {
              result++;
            }
          }
          $(".bottom-block").remove();
          if (result == 1) {
            $(".top-block").text(
              "Вы набрали " + result + " балл из " + plus.length + " возможных"
            );
          } else if (result == 0) {
            $(".top-block").text(
              "Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
            );
          } else if ((result >= 2) & (result <= 4)) {
            $(".top-block").text(
              "Вы набрали " + result + " балла из " + plus.length + " возможных"
            );
          } else {
            $(".top-block").text(
              "Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
            );
          }
        }
      });
    } else if (p == "Высокая") {
      plus = hardtask;
      plusotvet = hardvar;
      right = hardright;
      num = plus.length - 1; //длина масива с заданиями
      str = 0;
      col = 0;
      primer = plus[str];
      console.log(plus);
      $(".top-block").html(primer + " = ?");
      // Записываем первый пример
      while (col <= 2) {
        otvet = plusotvet[str][col];
        $(".bottom__item" + (col + 1)).html(otvet);
        col++;
      }
      //Запускаем цикл по клику на ответ
      $(".bottom-block").click(function () {
        let choose = $(this).text();
        plusresult.push(choose);
        if (str < num) {
          str++;
          primer = plus[str];
          $(".top-block").html(primer + " = ?");
          for (col = 0; col <= 2; col++) {
            otvet = plusotvet[str][col];
            $(".bottom__item" + (col + 1)).html(otvet);
          }
        } else {
          //Проверка результата и вывод сообщения
          for (i = 0; i <= num; i++) {
            check = plusresult[i] == right[i];
            checklist.push(check);
          }
          for (i = 0; i <= num; i++) {
            if (checklist[i] == true) {
              result++;
            }
          }
          $(".bottom-block").remove();
          if (result == 1) {
            $(".top-block").text(
              "Вы набрали " + result + " балл из " + plus.length + " возможных"
            );
          } else if (result == 0) {
            $(".top-block").text(
              "Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
            );
          } else if ((result >= 2) & (result <= 4)) {
            $(".top-block").text(
              "Вы набрали " + result + " балла из " + plus.length + " возможных"
            );
          } else {
            $(".top-block").text(
              "Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
            );
          }
        }
      });
    }
  });
});
