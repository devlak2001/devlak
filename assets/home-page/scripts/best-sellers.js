(() => {
    let bestSellersPopup = document.querySelector('.best-sellers .section-content .best-sellers-hover-popup');
let mouseOver = false;
let listItems = document.querySelectorAll('.best-sellers .section-content .col');
let slides = document.querySelectorAll(".best-sellers-hover-popup .image");

var bestSellerPopupRect;
document.querySelector('.best-sellers .section-content').onmouseover = (e) => {
    for(let i = 0; i < listItems.length; i++){
        if(listItems[i].contains(e.target))
        {
            for(let j = 0; j < slides.length; j++)
                slides[j].style.opacity = 0;
            console.log(listItems[i]);
            slides[i].style.opacity = 1;
        }
    }
    mouseOver = true;
    bestSellerPopupRect = document.querySelector('.best-sellers .section-content').getBoundingClientRect();
    bestSellersPopup.classList.add('active');

}



document.querySelector('.best-sellers .section-content').onmousemove = (e) => {
    if(!mouseOver) return;
    var x = parseInt(e.clientX - bestSellerPopupRect.left); //x position within the element.
    var y = parseInt(e.clientY - bestSellerPopupRect.top);

    console.log(bestSellerPopupRect.right);

    if(x > bestSellerPopupRect.right - 500){
        bestSellersPopup.style.left = bestSellerPopupRect.right - 520 + 'px';
    }
    else{
        bestSellersPopup.style.left = x + 10   + "px";
    }
    bestSellersPopup.classList.add('active');
    bestSellersPopup.style.top = y - 380 + "px";
}

document.querySelector('.best-sellers .section-content').onmouseleave = (e) => {
    mouseOver = false;
    bestSellersPopup.classList.remove('active');
}

document.onscroll = () => {
    mouseOver = false;
    bestSellersPopup.classList.remove('active');
}
})();