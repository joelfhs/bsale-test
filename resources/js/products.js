import { templateProduct } from './templates.js';
import { badgeCart, addCartButtonEvents } from './cookies.js';

const divLouder = document.getElementById('louder');
const divProducts = document.getElementById('div-products');

//Obtener Productos del Api
async function getProducts(){
  badgeCart();
  const res = await fetch(urlFetch);
  return res;
}

getProducts().then(products => products.json()).then(productFormat => {
  if (productFormat.data.length > 0){
    productFormat.data.map(product => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = templateProduct(product);
      divProducts.appendChild(div);
    });      
  }else{
    const h2 = document.createElement('h2');
    h2.classList.add('p-4');
    h2.innerText = "No hay productos disponibles...";
    divProducts.parentNode.appendChild(h2);
  }
  if(divLouder){
    divLouder.style.display = 'none';
  }
  addCartButtonEvents();
})
.catch(function(err) {
    console.error(err);
});