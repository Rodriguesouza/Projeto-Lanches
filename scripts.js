const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilterVegan = document.querySelector(".filter-vegan")


function formarCurrency (value) { 
  const newValue = value.toLocaleString('pt-BR', 
{ style: 'currency',
 currency: 'BRL' });

 return newValue

}

function showAll(productsArray) {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi += `

        <li>
            <img src= ${product.src}>
            <p> ${product.name}</p>
            <p class="item-price">R$ ${ formarCurrency(product.price)}</p>

        </li>
        
       `;
  });

  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, //dar 10% de desconto
  }));

  showAll(newPrices);
}

function sumAllItems() {
  const sumAlls = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  console.log(sumAlls);

  list.innerHTML = `
    <li>

    <p>  O valor total dos itens é: R$ ${formarCurrency(sumAlls)} <b> Reias </b> </p> 
    
    </li>
    
    `
}

function filterVegan () {
  const filterJustVegan = menuOptions.filter ((product) => product.vegan)

    showAll (filterJustVegan)
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonFilterVegan.addEventListener("click", filterVegan)
