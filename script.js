let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let mobil1 = document.getElementById('mobil1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.4 + 'px';
    leaf.style.top = value * -.3 + 'px';
    leaf.style.left = value * .1 + 'px';
    mobil1.style.top = value * -.2 + 'px';
    mobil1.style.left = value * 1.2 + 'px';
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY > offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};


let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});

//loaded text
window.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('loaded');
});