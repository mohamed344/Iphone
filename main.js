let gold = document.getElementById('gold');
let cyan = document.getElementById('cyan');
let gray = document.getElementById('gray');
let white = document.getElementById('white');
let red = document.getElementById('red');
let button = document.getElementById('button');

let image = document.getElementById('image');
let container = document.querySelector('.container');


function phones(phone){
    image.src = phone;
}
function colors(color){
    console.log(color)
    container.style.background = color;
}





