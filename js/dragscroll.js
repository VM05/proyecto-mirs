const [html] = document.getElementsByTagName('html');
const lang = html.getAttribute('lang');

let contenedorMap = document.querySelector('.informacion-contacto');

if (document.querySelector('.mapa-ubicaciones')) {
  muevete(120, 120);
  function muevete(coorX, coorY) {
    const elemento = document.querySelector('.dragscroll');
    setTimeout(() => {
      elemento.scrollTop = coorY;
      setTimeout(() => {
        elemento.scrollLeft = coorX;
      }, 100);
    }, 100);
  }
}

let paisesInput = document.querySelectorAll("input[name='paises']");
paisesInput.forEach((pais) => {
  pais.addEventListener('change', () => {
    let alemania;

    if (lang.toLowerCase() === 'es-cl') {
      alemania = 'Alemania';
    } else {
      alemania = 'Germany';
    }
    let paisInfo = document.querySelectorAll('.pais-info');
    paisInfo.forEach((infoPais) => infoPais.classList.remove('pais-info-activo'));
    let paisesPoints = document.querySelectorAll('.paises-points');
    paisesPoints.forEach((pais) => pais.classList.remove('span-pais-activo'));
    switch (pais.value) {
      case 'usa':
        let usaSpan = document.querySelector('.usa');
        let usaInfo = document.querySelector('.card-usa');
        usaSpan.classList.add('span-pais-activo');
        usaInfo.classList.add('pais-info-activo');
        muevete(50, 50);
        if (contenedorMap) {
          limpiarHTML();

          contenedorMap.innerHTML = `<div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386426.7334668077!2d-112.07769357155756!3d40.82886740470887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f50f9018283f%3A0xbeb4b252bad69767!2s222%20S%20Main%20St%2C%20Salt%20Lake%20City%2C%20UT%2084101%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1644495687297!5m2!1ses-419!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="texto-contacto-map">
                <h2>Salt Lake City, Utah </h2>
                

                <ul class="direccion-contacto"> 
                    <li><i class="fas fa-map-marker-alt"></i><a>222 South Main Street 5th Floor</a></li>
                    <li><i class="fas fa-phone-alt"></i><a href="tel:+18016525211">+1 801 652 5211</a></li>
                    <li><i class="fas fa-envelope"></i><a href="mailto:sales.usa@mirsrobotics.com">sales.usa@mirsrobotics.com/a></li>
                </ul>
            </div>`;
        }
        break;
      case 'chile':
        let chileSpan = document.querySelector('.chile');
        let chileInfo = document.querySelector('.card-chile');
        chileSpan.classList.add('span-pais-activo');
        chileInfo.classList.add('pais-info-activo');
        muevete(130, 130);
        if (contenedorMap) {
          limpiarHTML();

          contenedorMap.innerHTML = `<div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.072614625858!2d-70.56667038420335!3d-33.395269702069704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf66257023ad%3A0xb500645de44dd109!2sMirs!5e0!3m2!1ses-419!2scl!4v1637363054077!5m2!1ses-419!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="texto-contacto-map">
                    <h2>Santiago, Chile</h2>
                   
    
                    <ul class="direccion-contacto"> 
                        <li><i class="fas fa-map-marker-alt"></i><a>Av Presidente Kennedy 6660</a></li>
                        <li><i class="fas fa-phone-alt"></i><a href="tel:+56224811555">+56 2 2663 5700</a></li>
                        <li><i class="fas fa-envelope"></i><a href="mailto:sales.latam@mirsrobotics.com">sales.latam@mirsrobotics.com</a></li>
                    </ul>
                </div>`;
        }
        break;

      case 'peru':
        let peruSpan = document.querySelector('.peru');
        let peruInfo = document.querySelector('.card-peru');
        peruSpan.classList.add('span-pais-activo');
        peruInfo.classList.add('pais-info-activo');
        muevete(120, 120);
        if (contenedorMap) {
          limpiarHTML();

          contenedorMap.innerHTML = `<div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.5151048753744!2d-77.0408134953375!3d-12.11008442242131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c83d26bbcbb3%3A0x155215190b93450!2sJr.%20Arica%20831%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses-419!2scl!4v1644495581460!5m2!1ses-419!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="texto-contacto-map">
                <h2>Lima, Perú</h2>
               

                <ul class="direccion-contacto"> 
                    <li><i class="fas fa-map-marker-alt"></i><a>Calle Arica N°831 Miraflores</a></li>
                    <li><i class="fas fa-phone-alt"></i><a href="tel:+5117130494">+51 1 7130494</a></li>
                    <li><i class="fas fa-envelope"></i><a href="mailto:sales.latam@mirsrobotics.com">sales.latam@mirsrobotics.com</a></li>
                </ul>
            </div>`;
        }
        break;
      case 'alemania':
        let alemaniaInfo = document.querySelector('.card-alemania');
        let alemaniaSpan = document.querySelector('.alemania');
        alemaniaSpan.classList.add('span-pais-activo');
        alemaniaInfo.classList.add('pais-info-activo');
        muevete(400, 400);
        if (contenedorMap) {
          limpiarHTML();

          contenedorMap.innerHTML =
            `<div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19968.078376806367!2d12.386634885872475!3d51.274138744626974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6fa29bb744113%3A0x964e3adae7787cc!2sKirchstra%C3%9Fe%2040%2C%2004416%20Markkleeberg%2C%20Alemania!5e0!3m2!1ses-419!2scl!4v1644495861027!5m2!1ses-419!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="texto-contacto-map">
                <h2>` +
            alemania +
            `, Leipzig</h2>
               

                <ul class="direccion-contacto"> 
                   
                    <li><i class="fas fa-map-marker-alt"></i><a>Kirchstrasse 40, D-04416 Markkleeberg</a></li>
                    <li><i class="fas fa-phone-alt"></i><a href="tel:+4915207088392">+49 152 07088392</a></li>
                    <li><i class="fas fa-envelope"></i><a href="mailto:sales.eu@mirsrobotics.com">sales.eu@mirsrobotics.com</a></li>
                </ul>
            </div>`;
        }
        break;
      case 'australia':
        let australiaInfo = document.querySelector('.card-australia');
        let australiaSpan = document.querySelector('.australia');
        australiaSpan.classList.add('span-pais-activo');
        australiaInfo.classList.add('pais-info-activo');
        muevete(1000, 600);
        if (contenedorMap) {
          limpiarHTML();

          contenedorMap.innerHTML = `<div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.969126217356!2d151.24986471351838!3d-33.89044896706344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12adf188cc7b87%3A0x8d07c3e07807ef3!2sTower%202%2F101%20Grafton%20St%2C%20Bondi%20Junction%20NSW%202022%2C%20Australia!5e0!3m2!1ses-419!2scl!4v1644495950011!5m2!1ses-419!2scl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="texto-contacto-map">
                <h2>Sydney, Australia</h2>
                

                <ul class="direccion-contacto"> 
                   
                    <li><i class="fas fa-map-marker-alt"></i><a>Bondi Junction NSW 2022</a></li>
                    <li><i class="fas fa-phone-alt"></i><a href="tel:+61 2 80956441">+61 2 8095 6441</a></li>
                    <li><i class="fas fa-envelope"></i><a href="mailto:sales.aus@mirsrobotics.com ">sales.aus@mirsrobotics.com </a></li>
                </ul>
            </div>`;
        }
        break;
      default:
        break;
    }
  });
});

function limpiarHTML() {
  while (contenedorMap.firstChild) {
    contenedorMap.removeChild(contenedorMap.firstChild);
  }
}

$(document).ready(function () {
  $('span.paises-points').click(function () {
    var pais = $(this).data('pais');
    $('label[for="' + pais + '"]').click();
  });
});
