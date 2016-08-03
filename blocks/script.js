'use strict'

var ToDoItem = function(name) {
  this.id = toDoCount;
  this.status = false;
  this.name = name;
}

var toDoCount = 0;
var array = [];

$(".myToDo").append("<input type='text' class='myToDo__textInput' placeholder='Новая задача...'>");
$(".myToDo").append("<button class='myToDo__buttonAdd'>Add</button>");
$(".myToDo").append("<br>");
$(".myToDo").append("<ul class='myToDoList'></ul>");
var input = $('.myToDo__textInput')[0];
$(".myToDo__buttonAdd").click(function(){
  if($(".myToDo__textInput").val()){
    var li = $("<li class='myToDoList__item'>");
    $(".myToDoList").append(li);
    li.append("<input type='checkbox' class='myToDoList__itemSelect' id='"+toDoCount+"' onclick='checking(this)'>");
    li.append("<label for='"+toDoCount+"' class='myToDoList__itemText'>"+input.value+"</label>");
    var toDoItem = new ToDoItem(input.value);
    array.push(toDoItem);
    li.append("<button class='myToDo__buttonDel' onclick='deleting(this)'>Delete</button>");

    input.value = '';
    toDoCount++;

  } else {
    alert("Input anything, please");
  };
});

function deleting(param){
  for (var i = array.length - 1; i >= 0; i--) {
    if ($(param).parent().children()[0].id == array[i].id) {
      array.splice(i,1);
    };
  };
    console.log(array);
  $(param).parent().remove();
};

function checking(param){
  if(param.checked){
    $(param).parent().attr('class', 'myToDoList__item myToDoList__item_done');
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].id == param.id) {
        array[i].status = true;
      };
    };
    console.log(array);
  } else {
    $(param).parent().attr('class', 'myToDoList__item');
    for (var i = array.length - 1; i >= 0; i--) {
      if(array[i].id == param.id) {
        array[i].status = false;
      };
    };
    console.log(array);
  };
};