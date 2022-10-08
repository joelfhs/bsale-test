//Template de los Productos
export function templateProduct(product) {
  const ruta = urlShowCategory.replace(':idCategory', product.category.id);
  const imgNoDisponible = "https://www.timandorra.com/wp-content/uploads/2016/11/Imagen-no-disponible.png";

  let tpl = `<div class="card">
                <img src="${product.image ? product.image : imgNoDisponible}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <div class="row align-items-center">
                    <div class="col">
                        <a href="${ruta}">${product.category.name.charAt(0).toUpperCase() + product.category.name.slice(1)}</a>
                    </div>
                    <div class="col">`;

  if (product.discount && product.discount > 0) {
    tpl = tpl + `<div>
                    <small class="fw-light text-decoration-line-through mb-0">$${(product.price / (1 - product.discount / 100)).toFixed(2)}</small>
                  </div>`;
  }

  tpl = tpl + `<div class="d-inline">
                  <span class="text-primary h5"><strong>$${product.price}</strong></span>`;

  if (product.discount && product.discount > 0) {
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

//Template de los Productos del Carrito
export function templateCart(product) {
  let tpl = `<td>${product[1]}</td>
            <td><img src="${product[2]}" class="img-thumbnail" alt="${product[1]}"></td>`;

  if (product[4] && Number(product[4]) > 0) {
    tpl = tpl + `<th>
                  <div class="d-grid">
                    <span class="fw-light text-decoration-line-tdrough">$${(product[3] / (1 - product[4] / 100)).toFixed(2)}</span>
                    <span class="text-danger">-${product[4]}%</span>
                    $${Number(product[3]).toFixed(2)}
                  </div>
                </th>`;
  } else {
    tpl = tpl + `<th>$${Number(product[3]).toFixed(2)}</th>`;
  }

  tpl = tpl + `<td>${product[5]}</td>
            <th>$${(Number(product[3]) * Number(product[5])).toFixed(2)}</th>
            <td><button type="button" data-id="${product[0]}" class="btn btn-danger button-remove-cart"><i class="bi bi-trash"></i></button></td>`;

  return tpl;
}

//Template del Total y los Botones de Accion del Carrito
export function templateCartTotal(total) {
  let tpl = `<td colspan="3"></td>
            <th class="h5 table-group-divider"><strong>Total</strong></th>
            <th class="table-group-divider">$${total.toFixed(2)}</th>
            <td class="table-group-divider">
              <div class="d-inline-grid">
                <button type="button" id="button-buy" class="btn btn-primary my-1"><i class="bi bi-cart"></i> Comprar</button>
                <button type="button" id="button-delete" class="btn btn-danger my-1"><i class="bi bi-trash"></i> Borrar Todo</button>
              </div>
            </td>`;

  return tpl;
}