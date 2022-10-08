@extends('layouts/_layout')

@section('css')
  <style type="text/css">
    table tbody#cart-table img {
      max-width: 120px;
      /*max-height: 120px;*/
    }
    table tbody#cart-table tr {
      vertical-align: middle;
    }
    table tbody#cart-table div.d-inline-grid {
      display: inline-grid !important;
    }
  </style>
@endsection


@section('content')
	<h1>Carrito:</h1>
  <div class="container text-center table-responsive">

    <table class="table table-striped table-hover">
      <thead>
        <tr class="h5">
          <th scope="col">Producto</th>
          <th scope="col">Imagen</th>
          <th scope="col">Precio Unitario</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody id="cart-table" class="table-group-divider">

      </tbody>
    </table>

  </div>
@endsection


@section('js')
  <script type="text/javascript">
    
  </script>
  @vite(['resources/js/cart.js'])
@endsection