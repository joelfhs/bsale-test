# Proyecto Carrito de Compras

El siguiente proyecto se basa en una aplicación tipo carrito de compra con el cual se simula una tienda online, misma que se nutre de data proporcionada por el cliente a través de su base de datos. Es así, que con el objetivo de cumplir con los requerimientos proporcionados se han utilizado diferentes tecnologías para construir el front y back del sistema

### Para el Front-end

- **Boostrap 5.x:** se ha utilizado dicho framework con el objetivo de lograr tanto un diseño responsive como una experiencia de usuario agradable.

- **Sweet alert 2:** al ser una librería pensada para utilizarse junto a JavaScript Vanilla resulta perfecta para el ejercicio realizado. Con sweet alert 2 el objetivo consistía en mostrar alertas y diálogos de confirmación con un diseño bonito.

- **Fetch:** Se está utilizando el método Fetch de JavaScript Vanilla para consumir un API.

### Para el Back-end

- **Laravel 9.x:** se ha utilizado dicho framework con el objetivo de realizar todo el back de la aplicación.

- **Cookies:** se ha utilizado con el objetivo de almacenar en el navegador del usuario información relacionada a los productos agregados al carrito de compras y de ésta manera se logra consultar la actividad previa del navegador para recuperar los datos de los productos elegidos por el usuario.

## ¿Cómo llegan los datos?

Para poder obtener los datos necesariamente se requiere de data ya que dentro de ella llegan las colecciones de los objetos


## Rutas del API V1:

### GET Lista Categorías
```
GET /v1/categories retornara las categorías
```
### GET Recurso Categoría
```
GET /v1/categories/:id retornara una categoría específica
```

### GET Lista Productos
```
GET /v1/products retornara los productos
```
### GET Recurso Producto
```
GET /v1/products/:id retornara un producto especifico
```
### GET Lista Productos por Busqueda Nombres
```
GET /v1/products/search/:palabra retornara los productos que conicidan con la(s) palabra(s)
```
### GET Lista Productos por Categoría
```
GET /v1/products/by-category/:id retornara los productos por categoría especifica
```

### Estructura JSON del Resource para productos

Al realizar una petición HTTP, el servicio retornará un JSON con la siguiente estructura:

```
{
"data": [
  {
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": {
      "id": 1,
      "name": "bebida energetica"
    }
  }
]
}
```

- **id:** identificador único del producto (Integer)
- **name:** nombre del producto y de la categoría a la que pertenece el producto (String)
- **image:** imagen del producto(String)
- **price:** precio del producto (Float)
- **discount:** descuento que se le ha aplicado al precio actual del producto(Integer)
- **category:** información relacionada a la categoría a la que pertenece el producto
- **category.id:** identificador único de la categoría a la que pertenece el producto (Integer)
- **category.name:** nombre de la categoría a la que pertenece el producto (String)

### Estructura JSON del Resource para Categorías

Al realizar una petición HTTP, el servicio retornará un JSON con la siguiente estructura:

```
{
"data": [
  {
    "id": 1,
    "name": "bebida energetica"
  }
]
}
```

- **id:** identificador único de la categoría a la que pertenece el producto (Integer)
- **name:** nombre de la categoría a la que pertenece el producto (String)


## Rutas de la Pagina:

### GET Lista Productos
```
GET /productos
```
### GET Lista Productos por Busqueda Nombres
```
GET /productos/buscar/:palabra
```
### GET Lista Productos por Categoría
```
GET /categorias/:id
```
