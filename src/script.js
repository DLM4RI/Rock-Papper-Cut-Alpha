
let pantalla_Usr = document.getElementById("pantalla_User")
let pantalla_Pc = document.getElementById("pantalla_PC")
let eleccion = "tijeras"
let boton_reinicio = document.getElementById("boton_reinicio")
let botones = document.querySelectorAll(".btn_PPT");
let msg = document.getElementById("msg");


const pc = ["tijeras", "papel", "piedra"]
const memoria = [0, 1, 2, 0, 1, 2, 0, 1, 2]
console.log("User: " + eleccion)
let ganador
let fondo = document.getElementById("fondo-bg")


function juego() {

   document.getElementById("iniciar").disabled = true

   botones.forEach(boton => boton.disabled = true)


   console.log("User: " + eleccion)
   let eleccion_pc1 = (parseInt(Math.random() * 10))
   console.log("PC eleccion: " + pc[memoria[eleccion_pc1]])
   let eleccion_pc = pc[memoria[eleccion_pc1]]

   switch (eleccion_pc) {
      case "tijeras": {
         pantalla_Pc.style.transform = "translateY(0%)";
         pantalla_Pc.classList.remove("pantalla_pc");
         break
      }
      case "papel": {
         pantalla_Pc.style.transform = "translateY(-70%)";
         pantalla_Pc.classList.remove("pantalla_pc")
         break
      }
      case "piedra": {
         pantalla_Pc.style.transform = "translateY(-35%)";
         pantalla_Pc.classList.remove("pantalla_pc")
         break
      }
   }


   if (eleccion_pc == eleccion) {
      console.log("Empate")
      msg.innerText = "Empate"
      fondo.style.backgroundColor = "#adadadff"

   } else {

      if (eleccion == pc[0] && eleccion_pc != pc[2]) {
         ganar()

      } else if (eleccion == pc[1] && eleccion_pc != pc[0]) {
         ganar()

      } else if (eleccion == pc[2] && eleccion_pc != pc[1]) {
         ganar()

      } else {
         perder()

      }

   }

   boton_reinicio.innerHTML = `<button id="reiniciar_btn" onclick="(reiniciar())" style="color: white; background-color: rgb(82, 82, 82); margin-top: 20px; " class="btn btn-lg boton_reinicio">Reiniciar</button>`               

}



function ejecucion(elemento) {

   

   switch (elemento) {
      case "piedra": {
         eleccion = "piedra"
         console.log("User: " + eleccion)
         pantalla_Usr.style.transform = "translateY(-35%)";
         break
      }

      case "papel": {
         eleccion = "papel"
         console.log("User: " + eleccion)
         pantalla_Usr.style.transform = "translateY(-70%)";
         break
      }
      default: {
         eleccion = "tijeras"
         console.log("User: " + eleccion)
         pantalla_Usr.style.transform = "translateY(0%)";
         break
      }
   }

}






function ganar () {
   console.log("Ganaste")
   fondo.style.backgroundColor = "#8fff68"
   ganador = " User "
   msg.innerText = "Ganardor : " + ganador

}


function perder () {
   console.log("perdiste")
   fondo.style.backgroundColor = "#ff6868ff"
   ganador = " PC "
   msg.innerText = "Ganardor : " + ganador

}









function reiniciar() {
   msg.innerText = "Elige tu opcion y prueba tu suerte...o ¿habilidad?"
   botones.forEach(boton => boton.disabled = false)
   document.getElementById("iniciar").disabled = false
   pantalla_Pc.classList.add("pantalla_pc");
   pantalla_Pc.style.transform = "translateY(0%)";
   fondo.style.backgroundColor = ""
   pantalla_Usr.style.transform = "translateY(0%)";
   boton_reinicio.innerHTML = ""
}