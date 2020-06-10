// Seleccionar formulario y guardarlo en una variable
var paymentForm = document.querySelector('#payment-form');

function maskify(creditCardNumber){
 let lastDig=creditCardNumber.slice(-4)
 let masked = lastDig.padStart(16,"#");
 alert(masked);
 return masked;
}


/**
 * Agregar evento al formulario
 * Cuando se hace click en el boton Pay
 * El evento submit es lanzado y ejecuta
 * nuestra funcion
 */
paymentForm.addEventListener('submit', onSubmit);

/**
 * Nuestra función es llamada cuando se llama
 * el anterior evento.
 */
function onSubmit(event) {
  // Se detiene el comportamiento por defecto con preventDefault
  event.preventDefault();

/**
 * Se busca el elemento input de la pagina y se selecciona
 * el atributo value
 */
  var numberInput = document.querySelector('#tc-number').value;

  maskify(numberInput);
  alert(validator(numberInput));
}
