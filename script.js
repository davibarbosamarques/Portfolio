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
    const icondark = '<i class="bi bi-moon-stars"></i>'
    const iconlight = '<i class="bi bi-brightness-high"></i>'
    document.documentElement.setAttribute("data-thema", tema)

    if (tema == 'light'){
        btnmodedark.innerHTML = icondark
    }else{
        btnmodedark.innerHTML = iconlight
    }
}

definirtema(themeSystem)
