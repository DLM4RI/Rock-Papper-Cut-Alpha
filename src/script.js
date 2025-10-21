
let pantalla_Usr = document.getElementById("pantalla_User")
let eleccion = "Tijeras"
console.log("User: " + eleccion)
const pc = ["Tijeras", "Papel", "piedra" ]
const memoria = [0,1,2,0,1,2,0,1,2,1]

function juego () {
      
      console.log("User: " + eleccion)
      let eleccion_pc1 = (parseInt(Math.random()*10))
      console.log("PC eleccion: " + pc[memoria[eleccion_pc1]])
      let eleccion_pc = pc[memoria[eleccion_pc1]]

      if( eleccion_pc == eleccion ) {
         console.log("Empate")

      } else {

         if ( eleccion == pc[0] && eleccion_pc != pc[2]) {
            console.log("Ganaste")
         } else if (eleccion == pc[1] && eleccion_pc != pc[0]  ){
            console.log("Ganaste")
         } else if (eleccion == pc[2] && eleccion_pc != pc[1]){
            console.log("Ganaste")
         } else{
            console.log("perdiste")
         
         }
         return
      }
}



function ejecucion (elemento) {

    switch (elemento) {
        case "piedra" : {
           eleccion =  "piedra"
           console.log("User: " + eleccion)
           pantalla_Usr.style.transform = "translateY(-35%)" ;
           break
        }

        case "Papel" : {
           eleccion =  "Papel"
           console.log("User: " + eleccion)
           pantalla_Usr.style.transform = "translateY(-70%)" ;
           break
        }
        default : {
            eleccion = "Tijeras"
            console.log("User: " + eleccion)
            pantalla_Usr.style.transform = "translateY(0%)";
            break
        }
        
      

        }

        return
    }

