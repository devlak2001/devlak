(() => {
    let products = document.querySelectorAll('.page-content .cart-list .product');
    for(let i = 0; i <products.length; i++)
        products[i].onclick = (e) => {
            console.log(products[i]);
            (() => {
                let additions = products[i].querySelectorAll('.additional li');
                console.log(additions);
                for(let i = 0; i < additions.length; i++){
                    if(additions[i].contains(e.target)){
                        (() => {
                            additions[i].classList.toggle('remove');
                        })();
                    }
                }
            })();
            (() => {
                let numberOfProducts = parseInt(products[i].querySelector('.product-counter .counter .number').innerHTML);
                let counterNumber = products[i].querySelector('.product-counter .counter .number');
                console.log(counterNumber);
                let decreaseButton = products[i].querySelector('.product-counter .counter .decrease');
                let increaseButton = products[i].querySelector('.product-counter .counter .increase');
                if(decreaseButton.contains(e.target)){
                    if(numberOfProducts > 1){
                        numberOfProducts--;
                        counterNumber.innerHTML = numberOfProducts;
                        totalPrice();
                    }
                }
                if(increaseButton.contains(e.target)){
                    console.log(numberOfProducts);
                    numberOfProducts++;
                    counterNumber.innerHTML = numberOfProducts;
                    totalPrice();
                }
            })();
            (() => {
                let deleteButton = products[i].querySelector('.delete-icon');
                if(deleteButton.contains(e.target)){
                    products[i].parentElement.removeChild(products[i]);
                    totalPrice();
                }
            })();
        }
})();


function totalPrice(){
    let totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    let prices = document.querySelectorAll('.page-content .cart-list .product .price');
    let counters = document.querySelectorAll('.page-content .cart-list .product .number')
    console.log(prices);
    for(let i = 0; i < prices.length; i++)
        totalPrice += parseInt(prices[i].innerHTML) * parseInt(counters[i].innerHTML);
    totalPriceElement.innerHTML = `${totalPrice}$`;
}

totalPrice();