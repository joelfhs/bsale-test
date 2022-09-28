function templateProduct(product){
      const ruta = urlShowCategory.replace(':idCategory', product.category.id);
      const imgNoDisponible = "https://www.timandorra.com/wp-content/uploads/2016/11/Imagen-no-disponible.png";
      
      var tpl = `<div class="card">
                  <img src="${product.image ? product.image : imgNoDisponible}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="row align-items-center">
                      <div class="col">
                          <a href="${ruta}">${product.category.name.charAt(0).toUpperCase()+product.category.name.slice(1)}</a>
                      </div>
                      <div class="col">`;

          if(product.discount && product.discount>0){
            tpl = tpl + `<div>
                          <small class="fw-light text-decoration-line-through mb-0">$${product.price/(1-product.discount/100)}</small>
                        </div>`;
          }

            tpl = tpl + `<div class="d-inline">
                          <span class="text-primary h5"><strong>$${product.price}</strong></span>`;

            if(product.discount && product.discount>0){
              tpl = tpl + `<small class="text-danger discount"> -${product.discount}%</small>`;
            }

            tpl = tpl + `</div>
                      </div>
                    </div>
                  </div>
                  <button data-id="${product.id}" class="btn btn-primary button-add-cart" type="button"><i class="bi bi-cart-plus"></i> Comprar</button>
                </div>`;

      return tpl;
    }

    const buttonSearch = document.getElementById('button-search');
    const divLouder = document.getElementById('louder');
    const divProducts = document.getElementById('div-products');
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });


    buttonSearch.onclick = function() {
      const inputSearch = document.getElementById('input-search');
      if(inputSearch.value && inputSearch.value != ''){
        const url = urlSearchProduct.replace(':searchProduct', inputSearch.value);
        location.href = url;
      }else{
        Toast.fire({
          icon: 'warning',
          title: 'Debes Ingresar un texto para buscar...'
        });
      }
    }

    async function getProducts(){
      badgeCart();
      const res = await fetch(urlFetch);
      return res;
    }

    getProducts().then(products => products.json()).then(productFormat => {
      productFormat.data.map(product => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = templateProduct(product);
        divProducts.appendChild(div);
      });      
      if(divLouder){
        divLouder.style.display = 'none';
      }
      buttonEvents();
    })
    .catch(function(err) {
        console.error(err);
    });



function buttonEvents(){
  var buttons = document.querySelectorAll('button.button-add-cart');
  for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    var sender = event.currentTarget ||  event.target;

    const compra = [
      sender.getAttribute('data-id'),
      sender.parentElement.querySelector('.card-body h5.card-title').innerText,
      sender.parentElement.querySelector('img').src,
      sender.parentElement.querySelector('.card-body span.h5 strong').innerText.slice(1),
      sender.parentElement.querySelector('.card-body small') ? sender.parentElement.querySelector('.card-body small.discount').innerText.slice(2).replace('%','') : '0',
      1
    ];
    /*const compra = [
      "id",
      "name",
      "image",
      "price",
      "discount",
      "quantity"
    ];*/
    
    var cart = Cookies.get('cart');
    if(cart && cart!=null){
      //console.log('existe la cookie', cart);
      var compras = cart.split(';');
      compras.push(compra.join(','));
      Cookies.remove('cart');
      Cookies.set('cart', compras.join(';'), { expires: 7 });
      
      /*compras.map(compra => {
        var compraSet = compra.split(',');
        //console.log(compraSet[0], compra[0]);
        if(compraSet[0] == compra[0]){
          console.log('entra');
          compras[0] = compra;
          console.log(compras);
          Cookies.remove('cart');
          Cookies.set('cart', compras.join(';'), { expires: 7 });
        }else{
          compras.push(compra.join(','));
          Cookies.remove('cart');
          Cookies.set('cart', compras.join(';'), { expires: 7 });
        }
      });*/
    }else{
      //console.log('no existe la cookie');
      Cookies.set('cart', compra.join(','), { expires: 7 });
    }

    badgeCart();

  });
  }
}



function badgeCart(){
  const spanBadgeCart = document.getElementById('badge-cart');
  var cart = Cookies.get('cart');
  var countCart;
  if(cart && cart!=null){
    countCart = cart.split(';').length;
  }else{
    countCart = 0;
  }
  spanBadgeCart.innerText = countCart;
}
