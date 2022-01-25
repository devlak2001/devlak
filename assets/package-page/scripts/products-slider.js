window.addEventListener("load",function(){
    (() => {
        var slideIndex = 1;
    var myTimer;
    var indicators = document.querySelectorAll(".portfolio .product-slider-indicator .slide-indicator");
    let slideshowContainer = document.querySelector(".portfolio .product-image-slider");;
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);

    for(let i = 0; i < indicators.length; i++){
        indicators[i].onclick = () => {
            currentSlide(i+1);
        }
    }


    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    // NEXT AND PREVIOUS CONTROL
    function plusSlides(n){
        clearInterval(myTimer);
        if (n < 0){
        showSlides(slideIndex -= 1);
        } else {
        showSlides(slideIndex += 1); 
        }
        
        //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
        
        if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
        } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
        }
    }
    
    //Controls the current slide and resets interval if needed
    function currentSlide(n){
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
        showSlides(slideIndex = n);
    }
    
    function showSlides(n){
        let j;
        var slides = slideshowContainer.querySelectorAll('.product-image');
        console.log(slideIndex);
        console.log(indicators)
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (j = 0; j < slides.length; j++) {
            slides[j].style.opacity = "0";
        }
        for (j = 0; j < indicators.length; j++) {
            indicators[j].classList.remove("active");
        }
        slides[slideIndex-1].style.opacity = "1";
        indicators[slideIndex-1].classList.add('active');
    }
    
    let pause = () => {
        clearInterval(myTimer);
    }
    
    let resume = () =>{
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
    }

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
    })();
});