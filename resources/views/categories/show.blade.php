@extends('layouts/_layout')

@section('css')
  <style type="text/css">
  </style>
@endsection


@section('content')
	<h1>{{ ucfirst($category->name) }}:</h1>

  <div class="container text-center">
    <div id="div-products" class="row row-cols-2 g-2 row-cols-lg-4 g-lg-2 align-items-center">

    </div>
  </div>
@endsection

@section('js')
  <script type="text/javascript">
    function templateProduct(product){
      return `<div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-truncate">${product.name}</h5>
                  <div class="d-inline">
                    <span class="float-start text-primary align-middle">$${product.id}</span>
                    <button type="button" class="btn btn-primary rounded-circle float-end align-middle">
                      <i class="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>`;
    }

    const divProducts = document.getElementById('div-products');
    console.log(divProducts);

    function getProducts(){
      const res = fetch("{{ route('api.v1.products.by-category', $category->id) }}");
      return res;
    }

    getProducts().then(products => products.json()).then(productFormat => {
      productFormat.data.map(product => {
        //console.log(product);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = templateProduct(product);
        divProducts.appendChild(div);
      });
    });

  </script>
@endsection