@extends('layouts/_layout')

@section('css')
  <style type="text/css">
  </style>
@endsection


@section('content')
	<h1>Productos con {{ ucfirst($search) }}:</h1>

  <div id="louder" class="text-center p-5">
    <div class="spinner-border text-primary" style="width: 6rem; height: 6rem;" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
  </div>

  <div class="container text-center">
    <div id="div-products" class="row row-cols-2 g-2 row-cols-lg-4 g-lg-2 align-items-center">

    </div>
  </div>
@endsection

@section('js')
  <script type="text/javascript">
    var urlFetch = "{{ route('api.v1.products.search', $search) }}";
  </script>
@endsection