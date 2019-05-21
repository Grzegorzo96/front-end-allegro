const listingElement = document.querySelector('#listing');
console.log(listingElement);
const response = getProductList();

// const fn = () => {
//     return 'asd';
// }

// const fn = () => 'asd';
// const fn = (foo) => 'asd' + foo;
//function(product){} to jest to samo co (product) =>
//const productsHtml = 
// response.products
//     .map((product) => renderProduct(product))
//     .forEach((productHtml) => {
//         listingElement.innerHTML += productHtml;
//     });
response.products
    .map(renderProduct)
    .forEach((productHtml) => {
        listingElement.innerHTML += productHtml;
    });
