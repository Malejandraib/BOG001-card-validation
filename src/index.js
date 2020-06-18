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
  //Se obtienen los elementos vacios de enmascarado y donde verifica el valor
  var var1=document.querySelector('.verif')
  var var2=document.querySelector('.num') //div de html
  //Se obtiene el valor y el elemento donde esta y estará el holder name
  var holder = document.querySelector('.holder-name').value;
  var var3 = document.querySelector('.name-holder')
  //Se obtiene el valor y el elemento donde esta y estará el la fecha de vencimiento
  var date = document.querySelector('.date').value;
  var var4 = document.querySelector('.expiration-date')

  //Se asigna el valor de is valid a el elemento var 1 y se muestra el display
  var1.textContent ='This card number seems to be ' + validator.isValid(numberInput) + '!';
  var1.style.display="block";
  
  //Se asigna el valor de maskify a el elemento var 2 
  var2.textContent = validator.maskify(numberInput) ;

  //Se asigna el valor de holder
  var3.textContent= holder;
  //Se asigna el valor de date
  var4.textContent=date;

  
} 
