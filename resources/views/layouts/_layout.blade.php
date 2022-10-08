<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>{{ config('app.name') }}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
      
      <!-- Styles -->
      <style type="text/css">
        div.card > button.button-add-cart {
          border-top-left-radius: initial;
          border-top-right-radius: initial;
        }
        ul#ul-categories > li > a.nav-link {
          color: black;
        }
      </style>
      <!--<link href="{{ asset('css/app.css') }}" rel="stylesheet">-->
      @yield('css')
      
  </head>
  <body>

    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand">{{ config('app.name') }}</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="{{ route('products.index') }}">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Categorias</a>
            </li>
          </ul>
        
          <div class="mx-lg-4">
            <div class="input-group">
              <input id="input-search" type="search" class="form-control" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="button-search">
              <button class="btn btn-outline-info" type="button" id="button-search"><i class="bi bi-search"></i></button>
            </div>
          </div>
        </div>
<!--type="button"-->
        <a role="button" href="{{ route('products.cart') }}" class="btn btn-info btn-lg rounded-circle position-relative me-4 my-2">
          <i class="bi bi-cart"></i>
          <span id="badge-cart" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <span class="visually-hidden">unread messages</span>
          </span>
        </a>

      </div>
    </nav>

    <!--SideNav-->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Categorias:</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul id="ul-categories" class="navbar-nav justify-content-end flex-grow-1 pe-3">
          @foreach($categories as $category)
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="{{ route('categories.show', $category->id) }}">{{ $category->name }}</a>
            </li>
          @endforeach
        </ul>
      </div>
    </div>

    <!--Contenido-->
    <div class="container-fluid bg-light bg-gradient">
      <div class="row">
        <div class="col-10 col-md-8 p-5 align-self-center m-auto bg-white">
          @yield('content')
        </div>
      </div>
    </div>
      
    <!-- Scripts -->
    <script type="text/javascript">
      var urlShowCategory = "{{ route('categories.show', ':idCategory') }}";
      var urlSearchProduct = "{{ route('products.search', ':searchProduct') }}";
    </script>
    <!--<script src="{{ asset('js/app.js') }}" defer></script>-->
    @yield('js')
    @vite(['resources/js/app.js','resources/js/search.js'])
    
  </body>
</html>