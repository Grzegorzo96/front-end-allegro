function formatPrice(price) {
    if (price.currency == "PLN") {
        return price.amount.replace(".", ",") + " zł"; 
    } else if (price.currency == "USD") {
        return "$ " + price.amount.replace(".", ",");
    } else if (price.currency == "EUR") {
        return "€ " + price.amount.replace(".", ",");
    } else {
        return "Wrong format."
    }
    //12 zl
    //$12
    //eur 12
}

function renderProduct(product){
    return `
    <div class="product">
        <img class="product_image" src="${product.image.url}">
        <div class="product_info">
            <h2 class="product_title">
                ${product.name}
            </h2>
            <div>${formatPrice(product.price)}</div>
            <div class="product_description">
                ${product.description.text}
            </div>
        </div>
    </div>
    `;
}