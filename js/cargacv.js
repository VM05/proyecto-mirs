const curriculumBtn = document.querySelector('#curriculum');

curriculumBtn.addEventListener('change', cambiarLabel);

function cambiarLabel(){
    let textoFinal;
    let fileName = curriculumBtn.files[0].name;
    if(fileName.length > 7){
        
         textoFinal = fileName.slice(0, 7) +' ...';
        
    }
    let labelName = document.querySelector('.boton-carga-cv');
    labelName.innerText = textoFinal;
    labelName.style.background = '#FF5200';
    labelName.style.color = '#fff';
}

