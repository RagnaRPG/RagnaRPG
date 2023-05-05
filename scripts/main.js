function magnusMostrar()  {
    const girar = document.querySelectorAll('.material-symbols-outlined')
    if (magnusStory.style.display == 'grid') {
        magnusStory.style.display = 'none'
        girar[0].removeAttribute('id')
    } else {
        magnusStory.style.display = 'grid'
        girar[0].setAttribute('id', 'aoContrario')
    }
    
}
       
function pegasoMostrar() {
    const girar = document.querySelectorAll('.material-symbols-outlined')
    if (pegasoStory.style.display == 'grid') {
        pegasoStory.style.display = 'none'
        girar[1].removeAttribute('id')
        
    } else {
        pegasoStory.style.display = 'grid'
        girar[1].setAttribute('id', 'aoContrario')
    }
}
