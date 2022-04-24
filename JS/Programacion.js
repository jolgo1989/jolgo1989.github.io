
//PROGRMACION EN MENU RESPONSIVO
    var btnAbrirMenu = document.getElementById("btnAbrirMenu"),
    btnCerrarMenu = document.getElementById("btnCerrarMenu"),
    menuResponsive = document.getElementById("barra_Menu"),
    enlaces = document.getElementById("enlaces");

            //CLIC PARA ABRIR
    btnAbrirMenu.addEventListener("click", function ( )
    {
        menuResponsive.classList.add("active");
    });

            //CLIC PARA CERRAR
    btnCerrarMenu.addEventListener("click", function ( )
    {
        menuResponsive.classList.remove("active");
    });




//CERRAR MENU CON ELEMENTOS DE ENLACES
    enlaces.addEventListener("click", function ( )
    {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });




//SLIDER DE PRODUCTOS
    var contenedor = document.querySelector(".slider"),
        btnIzquierda = document.getElementById("btnIzquierda"),
        btnDerecha = document.getElementById("btnDerecha");

            //EVENTO PARA BOTON DERECHO
    btnDerecha.addEventListener("click", function( )
    {
        contenedor.scrollLeft += contenedor.offsetWidth;
    });

            //EVENTO PARA BOTON IZQUIERDO
    btnIzquierda.addEventListener("click", function( )
    {
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });




//VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

function validar(e)
{
    var inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        inputComentarios = document.getElementById("comentarios"),
        alertaError = document.getElementById("alertaError"),
        alertaExito = document.getElementById("alertaExito");

        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComentarios.value == 0)
        {
            e.preventDefault( );
            alertaError.classList.remove("ocultarAlertas");
            alertaError.classList.add("show");

            setTimeout(function( )
            {
                alertaError.classList.remove("show");
                alertaError.classList.add("ocultarAlertas");
            }, 2000);
        }
        
        else
        {
            e.preventDefault( );
            alertaExito.classList.remove("ocultarAlertas");
            alertaExito.classList.add("show");

            setTimeout(function( )
            {
                alertaExito.classList.remove("show");
                alertaExito.classList.add("ocultarAlertas");
            }, 2000);
            inputNombre.value = " ";
            inputEmail.value = " ";
            inputComentarios.value = " ";
        }
}

            //EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar)




//BOTON PARA IR HACIA ARRIBA
var btnTop = document.getElementById("btnTopPage");
    
    //DETECTAR SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function()
{
    var scroll = document.documentElement.scrollTop,
        pantallaCompleta = document.documentElement.offsetHeight,
        tamañoPantalla = document.documentElement.clientHeight;
    
    if (scroll > 100)
    {
        btnTop.classList.add("show");
    }
    else
    {
        btnTop.classList.remove("show");
    }

    //MODIFICAR BOTON PARA IR HACIA ARRIBA CUANDO SE LLEGA AL FINAL
    if (pantallaCompleta ==  (scroll + tamañoPantalla) )
    {
        btnTop.classList.add("scrollFinal");
    }
    else
    {
        btnTop.classList.remove("scrollFinal");
    }
});




//DETECTAR EVENTO CLIC EN EL BOTON ARA IR HACIA ARRIBA
btnTop.addEventListener("click", function( )
{
    window.scrollTo(0,0);
});




//DETECTAR EVENTO CLIC EN EL LOGO
var logo = document.getElementById("logo");

logo.addEventListener("click", function( )
{
    window.scrollTo(0,0);
});



