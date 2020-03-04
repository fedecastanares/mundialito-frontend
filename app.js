
document.addEventListener('DOMContentLoaded', () =>{

    document.getElementsByClassName('blog-post')[1].classList.add('parallax');

    
    const eventos = document.getElementsByClassName('sp-event-blocks');
    for ( let i = 0 ; i < eventos.length ; i++) {
    	eventos.item(i).classList.add('eventos');
    }

    

    //parallax();

    const titulos = document.getElementsByClassName('sp-table-caption');
    for ( let i = 0 ; i < titulos.length ; i++ ){

        if (titulos.item(i).textContent == 'Amarillas'){
            titulos.item(i).classList.add("titulo-amarillas");
            titulos.item(i).innerHTML += '<i class="sp-icon-card tarjeta" style="color:#f4d014 !important"></i>' 

        } else if ( titulos.item(i).textContent == 'Rojas') {
            titulos.item(i).classList.add("titulo-rojas");
            titulos.item(i).innerHTML += '<i class="sp-icon-card tarjeta" style="color:#d4000f !important"></i>' 


        } else if ( titulos.item(i).textContent.substr(0,10) == 'Goleadores' ){
            titulos.item(i).classList.add("titulo-goleadores");
            titulos.item(i).innerHTML += '<i class="sp-icon-soccerball tarjeta" style="color:#222222 !important"></i>'

        } else if ( titulos.item(i).textContent == 'Suspensiones') {
            titulos.item(i).classList.add("titulo-rojas");
        }
        
        else {
            if( path === "futbol-5") {
                titulos.item(i).classList.add("titulo-f5");
                titulos.item(i).innerHTML += '<img class="tarjeta" src="http://mundialitouy.com/wp-content/themes/hestia/assets/img/trophy-solid.svg" alt="">'
                const links = document.getElementsByTagName('a');
                for ( let i = 0 ; i < links.length ; i++ ) {
                    if ( links.item(i).href.substr(0, 31) == "http://mundialitouy.com/player/") {
                        links.item(i).classList.add("jugador-f5");
            }} 

            } else if (path === "futbol-8") {
                titulos.item(i).classList.add("titulo-f8");
                titulos.item(i).innerHTML += '<img class="tarjeta" src="http://mundialitouy.com/wp-content/themes/hestia/assets/img/trophy-solid.svg" alt="">'
                const links = document.getElementsByTagName('a');
                for ( let i = 0 ; i < links.length ; i++ ) {          
                    if ( links.item(i).href.substr(0, 31) == "http://mundialitouy.com/player/") {
                        links.item(i).classList.add("jugador-f8");
            } 
            }
        
    }}}



    const partidos = document.getElementsByClassName('dataTables_wrapper');
    //console.log(partidos);


})

        // trophy-solid.svg


        /* falta terminar
        const contenido = document.getElementsByClassName('blog-post');
        console.log(contenido);
        contenido.item(1).innerHTML = '<figure class="wp-block-image"><a href="http://mundialitouy.com/futbol-5/"><img src="http://mundialitouy.com/wp-content/uploads/2019/08/Futbol-5-2.png" alt="" class="wp-image-1636"/></a></figure>';
        contenido.item(1).innerHTML += '<figure class="wp-block-image"><a href="http://mundialitouy.com/futbol-8/"><img src="http://mundialitouy.com/wp-content/uploads/2019/08/Futbol-8-1.png" alt="" class="wp-image-1680"/></a></figure>'; */



const contenidoUI = document.getElementById('contenido');
let path = window.location.pathname.split('/')[1];
const tablaGoleadores = document.getElementById('goleadores-ganadores');
const header = document.getElementsByClassName('title-logo-wrapper');
const logos = '<a id="logo-f5" href="http://mundialitouy.com/futbol-5"><img src="http://mundialitouy.com/wp-content/themes/hestia/assets/img/f5.svg" alt="logo mundialito futbol 5 zona futbol"></a> <a id="logo-f8" href="http://mundialitouy.com/futbol-8"><img src="http://mundialitouy.com/wp-content/themes/hestia/assets/img/f8.svg" alt="logo mundialito futbol 8 los ceibos"></a>'

if (path === 'prueba') {
    header.item(0).innerHTML += logos;
}