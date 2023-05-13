var menu = document.getElementById('menu');
var close = document.getElementById('close');
var action = document.getElementById('action');

menu.addEventListener('click', function () {
    close.classList.add('active')
});

action.addEventListener('click', function () {
    close.classList.remove('active')
});