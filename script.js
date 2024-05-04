function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').innerHTML = '<i class="bi bi-list" style="font-size: 3.5vh;"></i>'
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').innerHTML = '<i class="bi bi-x-lg" style="font-size: 3.5vh;"></i>'
    }
}

// MODO LIGHT/DARK
const btnmodedark = document.getElementById("btnModeDark");
const themeSystem = localStorage.getItem("themeSystem") || "light"


btnmodedark.addEventListener('click', () => {
    let antigoTema = localStorage.getItem("themeSystem") || "light";
    let novoTema = antigoTema == "light" ? "dark" : "light";

    localStorage.setItem("themeSystem",novoTema)
    definirtema(novoTema)
})

function definirtema(tema){
    const icondark = '<i class="bi bi-moon-stars" style="font-size: 3vh;"></i>'
    const iconlight = '<i class="bi bi-brightness-high" style="font-size: 3vh;"></i>'
    document.documentElement.setAttribute("data-thema", tema)

    if (tema == 'light'){
        btnmodedark.innerHTML = icondark
    }else{
        btnmodedark.innerHTML = iconlight
    }
}

definirtema(themeSystem)

// HEADER DINAMICO

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let header = document.getElementById("main-header");

  if (currentScroll > lastScrollTop) {
    header.style.top = "-100px"; // Esconde o header ao rolar para baixo
  } else {
    header.style.top = "0"; // Mostra o header ao rolar para cima
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// MENU INTELIGENTE

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header ul li a[href="#' + id + '"]').classList.add('active');
    }
  });
};
