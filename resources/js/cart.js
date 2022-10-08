import { templateCart, templateCartTotal } from './templates.js';
import { removeCartButtonEvents, Toast } from './cookies.js';
import Cookies from 'js-cookie';
//import Swal from 'sweetalert2';

const cartTable = document.getElementById('cart-table');

//Llenar la vista carrito
let cart = Cookies.get('cart');
if (cart && cart != null) {
  let total = 0;
  let compras = cart.split(';');
  
  compras.forEach(compra => {
    const compraDiv = compra.split(',');
    total = total + (Number(compraDiv[3]).toFixed(2) * Number(compraDiv[5]).toFixed(2));
    const tr = document.createElement('tr');
    tr.innerHTML = templateCart(compraDiv);
    cartTable.appendChild(tr);
  });
  
  const tr = document.createElement('tr');
  tr.style.borderBottomStyle = 'hidden';
  tr.innerHTML = templateCartTotal(total);
  cartTable.appendChild(tr);
}else{
  const tr = document.createElement('tr');
  tr.innerHTML = '<td colspan="6" class="h2 py-5">El Carrito esta vacio...</td>';
  cartTable.appendChild(tr);
}

removeCartButtonEvents();


//Buton Comprar
const buttonBuy = document.getElementById('button-buy');
if(buttonBuy){
  buttonBuy.addEventListener('click', (event) => {
    Swal.fire({
      title: 'Has Realizado la Compra',
      text: 'Gracias por revisar este Test equipo de Bsale!',
      icon: 'success',
    });
  });
}

//Boton Eliminar Todo
const buttonDelete = document.getElementById('button-delete');
if(buttonDelete){
  buttonDelete.addEventListener('click', (event) => {
    Swal.fire({
      title: '¿Estas Seguro de Eliminar todos los Producto?',
      //text: '',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('cart');
        Toast.fire({
          icon: 'success',
          title: 'Productos Eliminados...'
        });
        setTimeout(() => {
          location.reload();
        }, 6000);
      }
    });
  });
}