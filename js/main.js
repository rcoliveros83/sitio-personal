let parallax = document.querySelector('.fondo-portafolio');

function scroll_Parallax(){

    let scrollTop = document.documentElement.scrollTop;

    parallax.style.transform = 'translateY(' + scrollTop * -0.5 + 'px)';
}

window.addEventListener('scroll', scroll_Parallax);