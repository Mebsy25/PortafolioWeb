let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("csharp");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function descargarPDF() {
    var nombreArchivo = "RenatoAlfaro-CV.pdf";
    var urlPDF = "Imagenes/" + nombreArchivo;

    var enlace = document.createElement("a");
    enlace.href = urlPDF;
    enlace.download = nombreArchivo;
    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementsByName('nombre')[0].value;
    var telefono = document.getElementsByName('telefono')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var tema = document.getElementsByName('tema')[0].value;
    var mensaje = document.getElementsByName('mensaje')[0].value;

    if (!nombre || !email  || !mensaje || !tema || !telefono) {
        alert('Por favor, completa todos los campos');
        return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert('Por favor, introduce un email válido');
        return;
    }
    
    this.submit();
});

function sendMail() {
    var nombre = document.getElementsByName('nombre')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var mensaje = document.getElementsByName('mensaje')[0].value;
    var telefono = document.getElementsByName('telefono')[0].value;
    var tema = document.getElementsByName('tema')[0].value;
    if (nombre !== ""
        && email !== ""
        && mensaje !== "") {
        var json_object = {
            'nombre': nombre,
            'email': email,
            'mensaje': mensaje,
            'telefono': telefono,
            'tema': tema
        };
        fetch('https://w3cmz5xs6d.execute-api.us-east-2.amazonaws.com/api/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json_object)
        })
        .then(function(response) {
            if (response.ok) {
                document.getElementsByName('nombre')[0].value = "";
                document.getElementsByName('email')[0].value = "";
                document.getElementsByName('mensaje')[0].value = "";
                document.getElementsByName('telefono')[0].value = "";
                document.getElementsByName('tema')[0].value = "";

                console.log('Tu comentario fue enviado correctamente.');
                //toastr.success('Tu comentario fue enviado correctamente.', { timeOut: 5000 });
            } else {
                console.log('Tuvimos un problema al recibir su solicitud, Favor de volver a intentar en unos minutos.');
                //toastr.error('Tuvimos un problema al recibir su solicitud, Favor de volver a intentar en unos minutos.');
            }
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
    }
}