"use strict"
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

let burger = document.getElementById('burder'),
    list = document.getElementById('list'),
    lang = document.getElementById('lang'),
    body = document.getElementById('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('exit');
    list.classList.toggle('move');
    lang.classList.toggle('move2');
    body.classList.toggle('overflow');
})