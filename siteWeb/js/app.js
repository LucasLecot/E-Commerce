var active = 0;

var links = document.querySelectorAll('#product nav ul li a');
var divs = document.querySelectorAll('.product');
var title = document.querySelector(".serie");

for (var i = 0; i < links.length; i++) {
    addLinkToDiv(i);
}

function addLinkToDiv(index) {
    links[index].addEventListener('click', function () {

        links[active].classList.remove('active-links');
        divs[active].classList.remove('active');

        title.innerHTML = links[index].innerText;
        links[index].classList.add('active-links');
        divs[index].classList.add('active');

        active = index;

    });
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}