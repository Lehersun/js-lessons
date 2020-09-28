var myName = prompt('Как Вас зовут?');
var myFamily = prompt('А Ваша фамилия?');
var myBirthYear = prompt('Введите Ваш год рождения');

var currentYear = 2020;
if (myBirthYear !== null && myName !== null && myFamily !== null) {


    if (myBirthYear.trim() && myName.trim() && myFamily.trim()) {
        var age = currentYear - myBirthYear;

        if (age < 30) {
            alert('Привет, ' + myName + ' ' + myFamily);
        } else if (age >= 30 && age < 45) {
            alert('Ку, ' + myName + ' ' + myFamily);
        } else {
            alert('Здравствуйте уважаемый, ' + myName + ' ' + myFamily);
        }

    } else alert('Вы не заполнили одно из полей, а я всего-то хотел подружиться' + `'(`);
} else alert('А я всего-то хотел подружиться');

console.log('myName =' + myName + 'myFamily =' + myFamily + 'myBirthYear =' + myBirthYear);

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "Имя: " + myName + ", " + "фамилия: " + myFamily + ", " + "год рождения: " + myBirthYear;
document.body.append(div);