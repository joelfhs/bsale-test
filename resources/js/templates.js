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