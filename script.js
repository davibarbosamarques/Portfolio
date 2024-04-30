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
