


var numeroAlAzar;
var puntaje;


var imagenes = [
 "Anita.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth.jpg","Ruthz.jpg",
 "Sandia.jpg","Sandra.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Ruth", "Ruthz", 
 "Sandia", "San", 
 "Vian", "Zaz"];



function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

 function desplegarNuevaJugada(){
  var tamanoArreglo =nombres.length;

   if(tamanoArreglo>0){
    numeroAlAzar=enteroRandomEnRango(0,tamanoArreglo);
    var imagen='fotos/' + imagenes[numeroAlAzar];
    $('#imagenPersona').attr('src', imagen);
  }else{
    alert('Triunfastes')
  }
  
 };


 $(document).ready(function(){
    $('#btnClick').click(function() {
      var nombre=$('#inputNombre').val();
      console.log("El usuario escribio:" + nombre);
      $("#inputNombre").val("");//limpiar input

      var nombreAdivinar=nombres[numeroAlAzar]
       console.log("El nombre correcto es:" + nombreAdivinar);
       if (nombre===nombreAdivinar){

          // Quitar el elemento que ya no queremos usar: splice
          nombres.splice(numeroAlAzar,1)
          imagenes.splice(numeroAlAzar,1);

            // Puntaje
            puntaje=puntaje+5; //
            $('#puntaje').text(puntaje);
            console.log(puntaje);

            desplegarNuevaJugada();
       }
       else{
        alert("Error 500!")
       }

    });
    // Calcula el numero al azar cuando entra al html
    desplegarNuevaJugada();
 });




  





