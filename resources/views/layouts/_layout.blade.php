<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>{{ config('app.name') }}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      
      <!-- Styles -->
      <!--<link href="{{ asset('css/app.css') }}" rel="stylesheet">-->
      @yield('css')
      
  </head>
  <body>

    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand">{{ config('app.name') }}</a>

        <a class="text-white" href="" role="button">Productos</a>

        <a class="text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Categorias</a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Categorias:</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul id="ul-categories" class="navbar-nav justify-content-end flex-grow-1 pe-3">
          
            </ul>
          </div>
        </div>




        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>

        <button type="button" class="btn btn-info rounded-circle position-relative me-3">
          <i class="bi bi-cart"></i>
        </button>
      </div>
    </nav>

    <div class="container-fluid bg-light bg-gradient">
      <div class="row">
        <div class="col-10 col-md-8 p-5 align-self-center m-auto bg-white">
          @yield('content')
        </div>
      </div>
    </div>
      
    <!-- Scripts -->
    <!--<script src="{{ asset('js/app.js') }}" defer></script>-->
    @yield('js')
    @vite(['resources/js/app.js'])
      
  </body>
</html>