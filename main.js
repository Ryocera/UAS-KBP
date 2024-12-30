let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var startTimer;

//Pomodoro Timer
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

//Reset timer ke awal
reset.addEventListener('click', function(){
    wm.innerText = 10;
    ws.innerText = "00";

    bm.innerText = 1;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Timer
function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Jika timer ke 0 maka akan kereset
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 10;
        ws.innerText = "00";

        bm.innerText = 1;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}
//To do List
addToDoButton.addEventListener('click', function() {
    // Buat elemen wrapper untuk setiap item to-do
    var toDoItem = document.createElement('div');
    toDoItem.classList.add('todo-item');

    // Buat checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todo-checkbox');

    // Buat elemen teks
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;

    // Buat tombol delete
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';

    // Tambahkan event untuk checkbox
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            paragraph.style.textDecoration = "line-through";
        } else {
            paragraph.style.textDecoration = "none";
        }
    });

    // Tambahkan event untuk tombol delete
    deleteButton.addEventListener('click', function() {
        toDoContainer.removeChild(toDoItem);
    });

    // Gabungkan checkbox, teks, dan tombol delete ke dalam elemen wrapper
    toDoItem.appendChild(checkbox);
    toDoItem.appendChild(paragraph);
    toDoItem.appendChild(deleteButton);

    // Tambahkan item ke container
    toDoContainer.appendChild(toDoItem);

    // Kosongkan input setelah menambahkan
    inputField.value = "";
});
