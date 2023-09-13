
function ATM() {
  
    var cantidadInput = document.getElementById("dinero").value;
    var cantidad = parseFloat(cantidadInput);
    var nombre = document.getElementById("nombre").value;
  
 
    if (!isNaN(cantidad)) {
  
      var denominaciones = [100, 50, 20, 10, 5, 1];
  
     
      var billetes = {};
  

      for (var i = 0; i < denominaciones.length; i++) {
        var denom = denominaciones[i];
        billetes[denom] = Math.floor(cantidad / denom);
        cantidad %= denom;
      }
  
    
      for (var i = 0; i < denominaciones.length; i++) {
        var denom = denominaciones[i];
        document.getElementById("alerta" + (i + 1)).innerHTML = "Billetes de " + denom + ": " + billetes[denom];
      }
  

      document.getElementById("saludo").innerHTML = "¡Hola, " + nombre + "! Tu retiro de $" + cantidadInput + " se ha completado.";
  

      document.getElementById("dinero").value = "";
      document.getElementById("nombre").value = "";
    } else {

      document.getElementById("saludo").innerHTML = "Por favor, ingresa una cantidad válida.";
    }
  }
  
  document.getElementById("sacar").addEventListener("click", ATM);
  