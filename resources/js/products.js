//alert(urlFetch);

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
                          <small class="fw-light text-decoration-line-through mb-0">$${(product.price*(product.discount/100))}</small>
                        </div>`;
          }

            tpl = tpl + `<div class="d-inline">
                          <span class="text-primary h5"><strong>$${product.price}</strong></span>`;

            if(product.discount && product.discount>0){
              tpl = tpl + `<small class="text-danger"> -${product.discount}%</small>`;
            }

            tpl = tpl + `</div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary button-comprar button-add-cart" onclick="hola();" type="button"><i class="bi bi-cart-plus"></i> Comprar</button>
                </div>`;

      return tpl;
    }

//eliminar
    //function hola(){
    //  console.log('hola');
    //}


    const buttonSearch = document.getElementById('button-search');
    const divLouder = document.getElementById('louder');
    const divProducts = document.getElementById('div-products');

    buttonSearch.onclick = function() {
      const inputSearch = document.getElementById('input-search');
      if(inputSearch.value && inputSearch.value != ''){
        var url = "{{ route('products.search', ':src') }}";
        url = url.replace(':src', inputSearch.value);
        location.href = url;
      }else{
        alert('ingresa algo para buscar');
      }
    }

    function getProducts(){
      const res = fetch(urlFetch);
      return res;
    }

    getProducts().then(products => products.json()).then(productFormat => {
      if(divLouder){
        divLouder.style.display = 'none';
      }
      productFormat.data.map(product => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = templateProduct(product);
        divProducts.appendChild(div);
      });
    })
    .catch(function(err) {
        console.error(err);
    });