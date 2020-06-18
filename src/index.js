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
  var var1=document.querySelector('.verif')
  var var2=document.querySelector('.num') //span de html
  var holder = document.querySelector('.holder-name').value;
  var var3 = document.querySelector('.name-holder')

  var date = document.querySelector('.date').value;
  var var4 = document.querySelector('.expiration-date')

  
  var1.textContent ='This card number seems to be ' + validator.isValid(numberInput) + '!';
  var1.style.display="block";
  
  
  var2.textContent = validator.maskify(numberInput) ;

  var3.textContent= holder;
  var4.textContent=date;


  
  
} 
