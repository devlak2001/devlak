(() => {
    let products = document.querySelectorAll('.product-list .product');
    console.log()
    for(let i = 0; i < products.length; i++)
        products[i].onclick = (e) => {
            let hiddenPart = products[i].querySelector('.hidden-part');
            let toggleButton = products[i].querySelector('.toggle-hidden');
            if(toggleButton.contains(e.target)){
                if(hiddenPart.classList.contains('active'))
                    toggleButton.innerHTML = 'View project details';
                else
                    toggleButton.innerHTML = 'Hide project details';
                hiddenPart.classList.toggle('active');
            }
        }
})();