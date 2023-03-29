



function muevete(coorX, coorY){
    const elemento = document.querySelector('.dragscroll');
    setTimeout(() => {
        elemento.scrollTop = coorY;
    setTimeout(() => {
        elemento.scrollLeft = coorX;
    }, 100);
    }, 100);
    
    

} 


muevete(120,120);

let paisesInput = document.querySelectorAll("input[name='paises']");
paisesInput.forEach(pais => {
    pais.addEventListener('change',()=>{

        let paisInfo = document.querySelectorAll('.pais-info');
        paisInfo.forEach(infoPais => infoPais.classList.remove('pais-info-activo'));
        let paisesPoints = document.querySelectorAll('.paises-points');
            paisesPoints.forEach(pais => pais.classList.remove('span-pais-activo'))
        switch (pais.value) {
            case 'usa':
                let usaSpan = document.querySelector('.usa');
                let usaInfo = document.querySelector('.card-usa');
                usaSpan.classList.add('span-pais-activo');
                usaInfo.classList.add('pais-info-activo');
                muevete(50,50);
                break;
            case 'chile':
                let chileSpan = document.querySelector('.chile');
                let chileInfo = document.querySelector('.card-chile');
                    chileSpan.classList.add('span-pais-activo');
                    chileInfo.classList.add('pais-info-activo');
                    muevete(130,130);
                break;
            
            case 'peru':
                let peruSpan = document.querySelector('.peru');
                let peruInfo = document.querySelector('.card-peru');
                peruSpan.classList.add('span-pais-activo');
                peruInfo.classList.add('pais-info-activo');
                muevete(120,120);
                break;
            case 'alemania':
                let alemaniaInfo = document.querySelector('.card-alemania');
                let alemaniaSpan = document.querySelector('.alemania');
                alemaniaSpan.classList.add('span-pais-activo');
                alemaniaInfo.classList.add('pais-info-activo');
                muevete(400,400);
                break;
            case 'australia':
                let australiaInfo = document.querySelector('.card-australia');
                let australiaSpan = document.querySelector('.australia');
                australiaSpan.classList.add('span-pais-activo');
                australiaInfo.classList.add('pais-info-activo');
                muevete(1000,600);
                break;
            default:
                break;
        }

    })
});