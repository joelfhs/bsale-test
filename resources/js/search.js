import { Toast } from './cookies.js';

//Click en el Boton del Buscardor
const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener('click', () => {
  buscar();
});

//Enter del Buscador
const inputSearch = document.getElementById('input-search');
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    buscar();
    //console.log('focus', document.activeElement === inputSearch);
  }
});

//Buscar
function buscar() {
  if (inputSearch.value && inputSearch.value != '') {
    const url = urlSearchProduct.replace(':searchProduct', inputSearch.value);
    location.href = url;
  } else {
    Toast.fire({
      icon: 'warning',
      title: 'Debes Ingresar un texto para buscar...'
    });
    inputSearch.focus();
  }
}