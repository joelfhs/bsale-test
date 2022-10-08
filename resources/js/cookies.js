import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

/*export function badgeCart2() {
  const spanBadgeCart = document.getElementById('badge-cart');
  var cart = Cookies.get('cart');
  var countCart;
  if (cart && cart != null) {
    countCart = cart.split(';').length;
  } else {
    countCart = 0;
  }
  spanBadgeCart.innerText = countCart;
}*/

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

//Botones Borrar Producto del Carrito
export function removeCartButtonEvents() {
  const buttons = document.querySelectorAll('button.button-remove-cart');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {

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