var restart = document.querySelector("#b");
var squares = document.querySelectorAll("td");
var typed = document.querySelector(".typed");
var start = document.querySelector("#b1");

function typing() {
    typed.typed({
        strings: ["karthik dasari","a programmer","a developer"],
        typeSpeed:100,
        loop:true,
    });
}

function clear() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent='';
    }
}

restart.addEventListener('click',clear);
start.addEventListener('click',typing);

function change() {
    if (this.textContent==='') {
        this.textContent='X';
    }
    else if(this.textContent==='X'){
        this.textContent='O';
    }
    else{
        this.textContent='';
    }
} 

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',change);
    
}