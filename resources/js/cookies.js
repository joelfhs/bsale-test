import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

//Contador badge del Carrito
export function badgeCart() {
  const spanBadgeCart = document.getElementById('badge-cart');
  let cart = Cookies.get('cart');
  let countCart;
  if (cart && cart != null) {
    countCart = cart.split(';').length;
  } else {
    countCart = 0;
  }
  spanBadgeCart.innerText = countCart;
}

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 6000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

//Eventos de los Botones de Borrar Producto del Carrito
export function removeCartButtonEvents() {
  const buttons = document.querySelectorAll('button.button-remove-cart');
  buttons.forEach(button => {
    button.addEventListener('click', () => {

      Swal.fire({
        title: '¿Estas Seguro de Eliminar este Producto?',
        //text: '',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {

          let compraId = button.getAttribute('data-id');
          let newCompras;
          let cart = Cookies.get('cart');
          if (cart && cart != null) {
            let compras = cart.split(';');
            newCompras = compras.map(compra => {
              let compraDiv = compra.split(',');
              if (compraDiv[0] != compraId) {
                return compra;
              }
            });
            //Omite los arrays undefined
            newCompras = newCompras.filter(element => element != undefined);

            Cookies.remove('cart');
            Cookies.set('cart', newCompras.join(';'), { expires: 7 });

            Toast.fire({
              icon: 'success',
              title: 'Producto Eliminado...'
            });
          }else{
            Toast.fire({
              icon: 'error',
              title: 'El Carrito ya esta Vacio...'
            });
          }
          
          setTimeout(function () {
            location.reload();
          }, 6000);

        }
      });

    });
  });
}

//Eventos de los Botones de Agregar Producto
export function addCartButtonEvents() {
  let buttons = document.querySelectorAll('button.button-add-cart');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      let sender = event.currentTarget || event.target;

      //const newCompra = [ "id", "name", "image", "price", "discount", "quantity" ];
      let newCompra = [
        sender.getAttribute('data-id'),
        sender.parentElement.querySelector('.card-body h5.card-title').innerText,
        sender.parentElement.querySelector('img').src,
        sender.parentElement.querySelector('.card-body span.h5 strong').innerText.slice(1),
        sender.parentElement.querySelector('.card-body small') ? sender.parentElement.querySelector('.card-body small.discount').innerText.slice(2).replace('%', '') : '0',
        1
      ];

      let cart = Cookies.get('cart');
      if (cart && cart != null) {
        //console.log('existe la cookie', cart);
        let compras = cart.split(';');
        let newCompras = compras.map(compra => {
          let compraDiv = compra.split(',');
          if (compraDiv[0] == newCompra[0]) {
            compraDiv[5] = Number(compraDiv[5]) + 1;
            compra = compraDiv.join(',');
            Toast.fire({
              icon: 'success',
              title: 'Producto sumado al Carrito...'
            });
          }
          return compra;
        });
        if (compras.join(';') === newCompras.join(';')) {
          newCompras.push(newCompra.join(','));
          Toast.fire({
            icon: 'success',
            title: 'Producto agregado al Carrito...'
          });
        }
        Cookies.remove('cart');
        Cookies.set('cart', newCompras.join(';'), { expires: 7 });
      } else {
        //console.log('no existe la cookie');
        Cookies.set('cart', newCompra.join(','), { expires: 7 });
        Toast.fire({
          icon: 'success',
          title: 'Producto agregado al Carrito...'
        });
      }
      badgeCart();
    });
  });
}