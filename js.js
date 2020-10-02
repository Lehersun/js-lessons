$(document).ready(function () {



  $(".top-block").html("Введите Ваше имя");
  $(".bottom__item1").css("display", "none");
  $(".bottom__item3").css("display", "none");
  $(".bottom__item2").css("display", "none");
  $(".bottom__item2").addClass("next-button");

  $(".bottom").append(`<button class="bottom__btn bottom-block">Далее</button>`)



  // МАСКА для ввода
  let inputname = $(".top-block__input-name");
  inputname.bind("change keyup input click", function () {
    if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
      this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, "");
    }
  });


  $(".bottom__btn").click(function () {
    let name = $(".top-block__input-name").val();
    if (!name.trim()) {
      if ($(".error").length == 0) {
        $("form").append(`<div class="error">Имя обязательно</div>`);
        $(".top-block__input-name").css("border", "3px solid red");

      }
    } else {
      $("button").remove();
      $(".bottom__item1").css("display", "block");
      $(".bottom__item3").css("display", "block");
      $(".bottom__item2").css("display", "block");


      $("form").remove();

      $(".top-block").html("Выбор сложности");
      $(".bottom__item1").html("Низкая");
      $(".bottom__item2").html("Средняя");
      $(".bottom__item3").html("Высокая");


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


      function reshaem() {
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
            $(".bottom").prepend(`<div class="back">Начать сначала</div>`);
            $(".back").click(function () {
              window.location.reload();
            });

            if (result == 1) {
              $(".top-block").text(
                name + " Вы набрали " + result + " балл из " + plus.length + " возможных"
              );
            } else if (result == 0) {
              $(".top-block").text(
                name + " Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
              );
            } else if ((result >= 2) & (result <= 4)) {
              $(".top-block").text(
                name + " Вы набрали " + result + " балла из " + plus.length + " возможных"
              );
            } else {
              $(".top-block").text(
                name + " Вы набрали " +
                result +
                " баллов из " +
                plus.length +
                " возможных"
              );
            }
          }
        });

      }

      $(".bottom-block").click(function () {
        p = $(this).html();
        $(".bottom-block").addClass("in-progress");
        $(".top").addClass("top__in-progress");

        if (p == "Средняя") {
          plus = midtask;
          plusotvet = midvar;
          right = midright;

          reshaem()

        } else if (p == "Низкая") {
          plus = easytask;
          plusotvet = easyvar;
          right = easyright;

          reshaem()

        } else if (p == "Высокая") {
          plus = hardtask;
          plusotvet = hardvar;
          right = hardright;
          reshaem()
        }
      });
    }
  });
});