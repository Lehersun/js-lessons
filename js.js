$(document).ready(function () {

  $("form").css("display", "none");
  $(".top-block").html("JS lesson 2");

  $(".bottom__item1").html("Задание 1");
  $(".bottom__item2").html("Задание 2");
  $(".bottom__item3").html("Задание 3");

  function delEventListner() {
    $("body").off("click");
  }

  function digitMask() {
    let inputField = $(".top-block__input");
    inputField.bind("change keyup input click", function () {
      if (this.value.match(/[^0-9.-\s]/g)) {
        this.value = this.value.replace(/[^0-9.-\s]/g, "");
      }
    });
  }

  function digitMask2() {
    let inputField = $(".top-block__input");
    inputField.bind("change keyup input click", function () {
      if (this.value.match(/[^0-9\s]/g)) {
        this.value = this.value.replace(/[^0-9\s]/g, "");
      }
    });
  }

  function task1() {
    if (firstVal == secondVal) {
      result = "они равны!";
    } else if (firstVal < secondVal) {
      result = "первое число меньше второго!";
    } else {
      result = "первое число больше второго!";
    }
  }

  function task2() {
    let years = [];
    result = 0;
    for (let i = firstVal; i < secondVal; i++) {
      if ((i % 4) == 0) {
        if ((i % 100) !== 0) {
          years.push(i);
          result++;
        } else if ((i % 400) == 0) {
          years.push(i);
          result++;
        }
      }
    }
    console.log(years);

  }

  function error1() {
    let hasError = $(".top-block__input-error").length;
    if (hasError == 0) {
      $("form").append(`<div class="error">введите корректное значение</div>`);
      $(".top-block__input").addClass("top-block__input-error");
    }
  }

  function error2() {
    let hasError = $(".top-block__input-error").length;
    if (hasError == 0) {
      $("form").append(`<div class="error">второй год не может быть меньше первого</div>`);
      $(".top-block__input").addClass("top-block__input-error");
    }
  }

  function removeError() {
    $(".error").remove();
    $(".top-block__input").removeClass("top-block__input-error");
  }

  function getBack() {
    $("button").html("Назад");
    $("body").on("click", "button", function () {
      window.location.reload()
    });
  }


  let firstVal;
  let secondVal;
  let result;



  $("body").on("click", ".bottom-block", function () {

    let clickedBut = $(this).text();


    // Задание 1

    if (clickedBut == "Задание 1") {
      delEventListner();
      $(".top-block").html("Введите первое число");
      $(".bottom").append(`<button class="bottom__btn">Далее</button>`)
      $("form").css("display", "block");
      $(".bottom-block").css("display", "none");
      digitMask();

      $("body").on("click", "button", function () {
        firstVal = +$("input").val();
        if (!firstVal) {
          error1()
        } else {
          removeError();
          delEventListner();
          $(".top-block").html("Введите второе число");
          $("input").val("");
          $("body").on("click", "button", function () {
            secondVal = +$(".top-block__input").val();
            if (!secondVal) {
              error1()
            } else {
              delEventListner();
              task1();
              $(".top-block").html("Вы ввели числа " + firstVal + " и " + secondVal + " и я Вас уверяю " + result);
              $("form").css("display", "none");
              getBack()
            }
          });
        }
      });
    }

    // Задание 2
    else if (clickedBut == "Задание 2") {
      $(".top-block").html("C какого года считаем высокосные года?");
      $("form").css("display", "block");
      $(".bottom-block").css("display", "none");
      $(".bottom").append(`<button class="bottom__btn">Далее</button>`)
      digitMask2();
      $("body").on("click", "button", function () {
        firstVal = $("input").val();
        if (!firstVal) {
          error1()
        } else {
          removeError();
          delEventListner();
          $(".top-block").html("И до какого года?");
          $("input").val("");
          $("body").on("click", "button", function () {
            secondVal = $(".top-block__input").val();
            if (!secondVal) {
              error1()
            } else if (secondVal < firstVal) {
              error2()
            } else {
              delEventListner();
              task2();
              $(".top-block").html("Всего получилось " + result + " и все они выведены в консоль");
              $("form").css("display", "none");
              getBack()
            }
          });
        }
      });
    }

    // Задание 3
    else {
      $(".top-block").html("Введите какое-нибудь число");
      $("form").css("display", "block");
      $(".bottom-block").css("display", "none");
      $(".bottom").append(`<button class="bottom__btn">Далее</button>`)
      $(".bottom").append(`<button class="bottom__btn1">Хватит</button>`)
      result = 0;

      $("body").on("click", ".bottom__btn", function () {
        let inputVal = parseInt($(".top-block__input").val());
        $(".top-block__input").val("");
        if (inputVal) {
          result = result + inputVal;
        }
      });

      $("body").on("click", ".bottom__btn1", function () {
        delEventListner();
        $("form").css("display", "none");
        $(".bottom__btn").css("display", "none");
        $(".top-block").html("Сумма всех введенных чисел равна  " + result);
        getBack()
      });
    }
  });
});