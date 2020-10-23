fetchProducts();
function fetchProducts() {
console.log("fetchProducts");
    fetch("http://jbdesign.me/kea/web/properties/wp-json/wp/v2/house")
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            dataReceived(data);
        })
}
function dataReceived(product) {
    product.forEach(showProduct)
}
function showProduct(myProduct) {
    console.log(myProduct)
    const temp = document.querySelector("#productTemplate").content;
    const myCopy = temp.cloneNode(true);
    myCopy.querySelector(".street_address").innerHTML = myProduct.street_address;
    myCopy.querySelector(".city_address").textContent = myProduct.city_address;
    myCopy.querySelector(".bed").textContent = myProduct.bed;
    myCopy.querySelector(".bath").textContent = myProduct.bath;
    myCopy.querySelector(".sq_feet").textContent = myProduct.sq_feet;

    const img = myCopy.querySelector(".product_image");
    img.setAttribute("src", myProduct.image.guid);
    const parentElem = document.querySelector("section");
    parentElem.appendChild(myCopy);
}
