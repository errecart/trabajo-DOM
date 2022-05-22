// class cuenta {
//     constructor(usuario, contrasenia) {
//         this.usuario = usuario;
//         this.contrasenia = contrasenia;
//         this.miembros = [];
//     }
//     agregarMiembros(miembro) {
//         this.miembros.push(miembro);
//     }
// }

// class miembro {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
// }


// // Cuenta =======================================================================

// const usuario = prompt("ingrese nombre de usuario")
// const contrasenia = prompt("ingrese contrasenia")


// const cuentaP = new cuenta(usuario, contrasenia)

// console.log(cuentaP);


// // Usuario ======================================================================


// let opcion = prompt("ingrese Y para agregar Miembro y enter para salir ")

// while (opcion == "Y") {
//     const nombre = prompt("ingrese nombre")
//     const miembroCreada = new cuenta (nombre);
//     cuentaP.agregarMiembros(miembroCreada);
//     opcion = prompt("ingrese Y para agregar Miembro y enter para salir")
// }

// console.log(cuentaP.miembros)

// DOM ========================================================================

let navTrabajo = document.getElementById("navB");
let nav1 = document.createElement("nav");
navTrabajo.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;

// =====================
let explicacion = document.createElement("div");
explicacion.innerHTML = "<p>   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati nihil voluptatum mollitia quae corporis tempora commodi deleniti minima sed aut adipisci, molestiae error harum tempore? Assumenda eos tenetur nulla.   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati nihil voluptatum mollitia quae corporis tempora commodi deleniti minima sed aut adipisci, molestiae error harum tempore? Assumenda eos tenetur nulla.   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum obcaecati nihil voluptatum mollitia quae corporis tempora commodi deleniti minima sed aut adipisci, molestiae error harum tempore? Assumenda eos tenetur nulla.</p>";
document.body.append(explicacion);

// =====================
let foot = document.getElementById("footerF");
let footer1 = document.createElement("footer");
foot.innerHTML = `        
<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
</p>

</svg>
<div class="reds">
<a href="https://www.instagram.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#fd0061" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
</a>
<a href="https://www.facebook.com/" target="_blanck">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
</a>

<a href="">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44"
        height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
</a>
</div>`

// ==========================================================================
function contenidoForm() {
  let usuario = document.getElementById("usaurio").value
  document.getElementById("info").innerText =
    `Bienvenido/a ${usuario}`
}
//  juego2=================================================================


let boton = document.getElementById("submit");
boton.onclick = () => {
  let resultadoA = document.getElementById("question1");
  if (resultadoA == "A") {
    let pregunta1 = document.getElementsByClassName("oP1");
    document.getElementsByClassName("oP1").value = `Sos un ${pregunta1}`
  } else if (resultadoA == "B") {
    let pregunta1 = document.getElementsByClassName("oP2");
    document.getElementsByClassName("oP2").value = `Sos un ${pregunta1}`
  } else if (resultadoA == "C") {
    let pregunta1 = document.getElementsByClassName("oP3");
    document.getElementsByClassName("oP3").value = `Sos un ${pregunta1}`
  } else if (resultadoA == "D") {
    let pregunta1 = document.getElementsByClassName("oP4");
    document.getElementsByClassName("oP4").value = `Sos un ${pregunta1}`
  } else if (resultadoA == "E") {
    let pregunta1 = document.getElementsByClassName("oP5");
    document.getElementsByClassName("oP5").value = `Sos un ${pregunta1}`
  }
}

let boton1 = document.getElementById("submit");
boton1.onclick = () => {
  let resultadoB = document.getElementById("question2");
  if (resultadoB == "+") {
    let pregunta2 = document.getElementsByClassName("oP6");
    document.getElementsByClassName("oP2").value = `Sos un ${pregunta2}`
  } else if (resultadoB == "/") {
    let pregunta1 = document.getElementsByClassName("oP7");
    document.getElementsByClassName("oP2").value = `Sos un ${pregunta2}`
  } else if (resultadoB == "-") {
    let pregunta1 = document.getElementsByClassName("oP8");
    document.getElementsByClassName("oP3").value = `Sos un ${pregunta2}`
  } else if (resultadoB == "*") {
    let pregunta1 = document.getElementsByClassName("oP9");
    document.getElementsByClassName("oP4").value = `Sos un ${pregunta2}`
  }
}

// Juego ==================================================================

// const listaJugadores = [];
// let jugadores = parseInt(prompt("Ingresar Numero de Jugadores"));
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaJugadores.push(entrada.toUpperCase());
//    console.log(listaJugadores);
// }while(listaJugadores.length != jugadores)

// let pregunta1 = prompt("Que animal sos?: opcion A,B,C o D");
// if (pregunta1 = "A") {
//     alert("Sos un Perro")
// } else if (pregunta1 = "B") {
//     alert("Sos un Gato")
// } else if (pregunta1 = "C") {
//     alert("Sos un Hamster")
// } else if (pregunta1 = "D") {
//     alert("Sos un Loro")
// } else if (pregunta1 !== "A" || "B" || "C" || "D") {
//     alert("elija una de las 4 opciones")
// }
// let pregunta2 = parseInt(prompt("Que lugar te gusta mas?: elija un numero del 1 al 100"));
// if (pregunta2 <= 25) {
//     alert("tu lugar favorito es la Playa")
// } else if (pregunta2 > 25 && pregunta2 <= 50) {
//     alert("tu lugar favorito es la Montania")
// } else if (pregunta2 > 50 && pregunta2 <= 75) {
//     alert(" tu lugar favorito es el Desierto")
// } else if (pregunta2 > 75 && pregunta2 <= 100) {
//     alert(" tu lugar favorito es la Ciudad")
// }

// let pregunta3 = prompt("Festividad favorita?,elija  uno de los simbolos +,-,/,*")
// while (pregunta3 != Number) {
//     switch (pregunta3) {
//         case "+":
//             alert("Navidad");
//             break;
//         case "-":
//             alert("Halloween");
//             break;
//         case "/":
//             alert("Carnaval");
//             break;
//         case "*":
//             alert("Año Nuevo");
//             break;
//     }
//     break;
// }