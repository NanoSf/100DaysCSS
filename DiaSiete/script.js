const lupa = document.querySelector('.lupa');

lupa.addEventListener('click', () =>{
    const barraBus = document.querySelector('.barra-busqueda');

    if(barraBus.classList.contains('barra-activa')){
        barraBus.classList.remove('barra-activa');
        return;
    }
    barraBus.classList.add('barra-activa');
});

const icono = document.querySelector('.icon');

icono.addEventListener('click', () =>{
    const center = document.querySelector('.center');
    const opt = document.querySelector('.opciones');

    if(center.classList.contains('menu-activa')){
        center.classList.remove('menu-activa');
        opt.classList.remove('icono-activa');
        return;
    }
    center.classList.add('menu-activa');
    opt.classList.add('icono-activa');
    
});