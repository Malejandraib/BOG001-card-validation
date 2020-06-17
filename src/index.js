import validator from './validator.js';


// Seleccionar formulario y guardarlo en una variable
var paymentForm = document.querySelector('#payment-form');

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
  var var1=document.getElementsByClassName('verif')
  var var2=document.getElementsByClassName('num') //span de html
  
  var1.textContent='this card number seems to be', validator.isValid(numberInput);
  
  console.log(var1)
  var2.textContent = validator.maskify(numberInput) ;
  console.log(var2)



  
 //alert("Here is the last four number of your card number "+ validator.maskify(numberInput));
  alert("This card number seems to be "+ validator.isValid(numberInput));
} 
