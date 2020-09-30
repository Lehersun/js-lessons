$(document).ready(function () {
  //массив с примерами
  let plus = [
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

  //массив с вариантами ответов
  let plusotvet = [
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
  //массив с правильными ответами
  let right = [
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

  let plusresult = []; //сюда записываем ответы пользователя
  let checklist = []; //здесь данные по сверке с ответами
  let result = 0; //Переменная для подсчета баллов
  let num = plus.length - 1; //длина масива с заданиями
  let str = 0;
  let col = 0;

  let primer = plus[str];
  $(".primer").html(primer + " = ?");

  // Записываем первый пример

  while (col <= 2) {
    otvet = plusotvet[str][col];
    $(".otvet" + (col + 1)).html(otvet);
    col++;
  }
  //Запускаем цикл по клику на ответ
  $(".otvet").click(function () {
    let choose = $(this).text();
    plusresult.push(choose);

    if (str < num) {
      str++;
      primer = plus[str];
      $(".primer").html(primer + " = ?");

      for (col = 0; col <= 2; col++) {
        otvet = plusotvet[str][col];
        $(".otvet" + (col + 1)).html(otvet);
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

      $(".otvet").remove();
      if (result == 1) {
        $(".primer").text(
          "Вы набрали " + result + " балл из " + plus.length + " возможных"
        );
      } else if (result == 0) {
        $(".primer").text(
          "Вы набрали " + result + " баллов из " + plus.length + " возможных"
        );
      } else if ((result >= 2) & (result <= 4)) {
        $(".primer").text(
          "Вы набрали " + result + " балла из " + plus.length + " возможных"
        );
      } else {
        $(".primer").text(
          "Вы набрали " + result + " баллов из " + plus.length + " возможных"
        );
      }
    }
  });
});
