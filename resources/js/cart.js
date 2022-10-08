//import { hola, badgeCart2 } from './cookies.js';
//console.log(hola);
//badgeCart2();

import Cookies from 'js-cookie';

const cartTable = document.getElementById('cart-table');

function templateCart(product) {
  var tpl = `<td>${product[1]}</td>
            <td><img src="${product[2]}" class="img-thumbnail" alt="${product[1]}"></td>`;

  if (product[4] && Number(product[4])>0){
    tpl = tpl + `<th>
                  <div class="d-grid">
                    <span class="fw-light text-decoration-line-tdrough">$${(product[3] / (1 - product[4] / 100)).toFixed(2)}</span>
                    <span class="text-danger">-${product[4]}%</span>
                    $${Number(product[3]).toFixed(2)}
                  </div>
                </th>`;
  }else{
    tpl = tpl + `<th>$${Number(product[3]).toFixed(2)}</th>`;
  }

  tpl = tpl + `<td>${product[5]}</td>
            <th>$${(Number(product[3])*Number(product[5])).toFixed(2)}</th>
            <td><button type="button" data-id="${product[0]}" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>`;

  return tpl;
}

function templateCartTotal(total) {
  let tpl = `<td colspan="3"></td>
            <th class="h5 table-group-divider"><strong>Total</strong></th>
            <th class="table-group-divider">$${total.toFixed(2)}</th>
            <td class="table-group-divider">
              <div class="d-inline-grid">
                <button type="button" id="" class="btn btn-primary my-1"><i class="bi bi-cart"></i> Comprar</button>
                <button type="button" id="" class="btn btn-danger my-1"><i class="bi bi-trash"></i> Borrar Todo</button>
              </div>
            </td>`;

  return tpl;
}

let cart = Cookies.get('cart');
if (cart && cart != null) {
  let total = 0;
  let compras = cart.split(';');
  compras.forEach(compra => {
    const compraDiv = compra.split(',');
    total = total + (Number(compraDiv[3]).toFixed(2) * Number(compraDiv[5]).toFixed(2));

    const tr = document.createElement('tr');
    tr.innerHTML = templateCart(compraDiv);

    cartTable.appendChild(tr);

  });
  
  const tr = document.createElement('tr');
  tr.style.borderBottomStyle = 'hidden';
  tr.innerHTML = templateCartTotal(total);
  
  cartTable.appendChild(tr);
  
}else{
  const tr = document.createElement('tr');
  tr.innerHTML = '<td colspan="6" class="h2 py-5">El Carrito esta vacio...</td>';

  cartTable.appendChild(tr);
}


