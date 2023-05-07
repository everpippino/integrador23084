const borrarBtn = document.getElementById("borrar");
const precioFinalP = document.getElementById("precioFinal")

const nombreInput = document.getElementById("name");
const apellidoInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const cantidadInput = document.getElementById("cantEntradas");
const selectElement = document.getElementById("descuento");

function calcularPrecioFinal(){
    precioFinalP.textContent = "Total a Pagar: $"   
 
    //en cantEntradas almaceno la cantidad de entradas que ingreso el usuario
    let cantEntradas = document.getElementById("cantEntradas").value
    
    //en desc almaceno el descuento que elijió el usuario
    let desc = document.getElementById("descuento").value
    
    //obtengo el descuento que hay que realizar
    let descFinal=(cantEntradas*1000)*desc/100
    
    //resto el descuento total del precio total 
    let precioFin=(cantEntradas*1000)-descFinal
    
    //coloco en el html el valor de las entradas - el descuento
    precioFinalP.textContent += precioFin
} 
borrarBtn.addEventListener("click", () => {
    
    nombreInput.value = "";
    apellidoInput.value = "";
    cantidadInput.value = "";
    emailInput.value = "";
    selectElement.selectedIndex = 0;
  });


