"use strict"
function User(firstName,lastName) {
  let date = new Date();
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = function(){
        
      return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 
    };
}

function UserList(){

    this.users = [];

    this.addUser = function(regUser){
      
      this.users.push(new User(regUser[0],regUser[1]));
    }

    this.getAllUsers =  function (){
      return this.users;
    }
}

function output(users){
  button1.insertAdjacentHTML("afterEnd", `<table border="2px" bordercolor="gray"><tbody><tr><td>Номер п/п</td><td>Имя</td><td>Фамилия</td><td>Дата регистрации</td></tr></tbody><tbody id="table"></tbody></table>`);
  let n = users.length;
  for (let i = 0; i<n; i++){
    let allUsers = "<tr><td>" + (i + 1) + "</td><td>" + users[i].firstName + "</td><td>" + users[i].lastName + "</td><td>" + users[i].regDate() + "</td></tr>";
    table.insertAdjacentHTML("beforeEnd", allUsers);
  }
}

function start (){
  var elem = document.getElementById("table");
  if (elem !== null){
    elem.parentNode.parentNode.removeChild(elem.parentNode);
  }
  
  let list = new UserList();
  while (true){
    let regUser = prompt("Введите имя и фамилию через пробел, для регистрации");
    if (regUser == null){
      if (list.users.length == 0) {
      alert("Вы не ввели ни одного пользователя");
      break;
      } else {
        output(list.getAllUsers());
        break;
      }
         
    } else if(regUser.trim() == ""){
      alert("поле не может быть пустым");
    } else {
      regUser = regUser.trim();
      regUser = regUser.replace(/\s+/g,' ');
      regUser = regUser.split(" ");
      if(regUser[1]){
        list.addUser(regUser);
      } else {
        alert("Необходимо указать фамилию");
      }
    }
  }
}

button1.addEventListener("click",start);