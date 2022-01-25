(() => {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('.cards-slider')) {
            // Slider dragging
            const slider = document.querySelector('.you-might-like  .cards-slider');
            let sliderIndicatorElements = document.querySelectorAll('.you-might-like .cards-slider-indicator .slide-indicator');
            let sliderItems = document.querySelectorAll('.you-might-like .cards-slider .card');
            let isDown = false;
            let startX;
            let scrollLeft;
            let currentItemsIndex = [];

            for(let i = 0; i < sliderIndicatorElements.length; i++){
                sliderIndicatorElements[i].onclick = () => {
                    console.log()
                    slider.scroll({
                        top: 0,
                        left: sliderItems[i].offsetLeft,
                        behavior: 'smooth'
                    });
                }
            }
            
    
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                cancelMomentumTracking();
            });
    
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });
    
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
                beginMomentumTracking();
            });
    
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                currentItemsIndex = [];
                const x = e.pageX - slider.offsetLeft;
                console.log(slider.offsetLeft);
                const walk = (x - startX); //scroll-fast
                var prevScrollLeft = slider.scrollLeft;
                slider.scrollLeft = scrollLeft - walk;
                velX = slider.scrollLeft - prevScrollLeft;
                
                sliderItems.forEach((el, index) => {
                    if((parseInt(el.offsetLeft - slider.scrollLeft) < parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 60) &&
                    (parseInt(el.offsetLeft - slider.scrollLeft) > -parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 60))
                        currentItemsIndex.push(index);
                });
                if(currentItemsIndex.length > 0){
                    sliderIndicatorElements[currentItemsIndex[0]].classList.add('active');
                }else{
                    sliderIndicatorElements.forEach((el, index) => {
                        if(index != currentItemsIndex[0])
                        el.classList.remove('active');
                    });
                }
                
            });
    
            // Momentum 
            var velX = 0;
            var momentumID;
    
            slider.addEventListener('scroll', () => {
                currentItemsIndex = [];
                console.log('scroll');
                sliderItems.forEach((el, index) => {
                    if((parseInt(el.offsetLeft - slider.scrollLeft) < parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 50) &&
                    (parseInt(el.offsetLeft - slider.scrollLeft) > -parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 50))
                        currentItemsIndex.push(index);
                });
                if(currentItemsIndex.length > 0){
                    sliderIndicatorElements[currentItemsIndex[0]].classList.add('active');
                }else{
                    sliderIndicatorElements.forEach((el, index) => {
                        if(index != currentItemsIndex[0])
                        el.classList.remove('active');
                    });
                }
            });
    
            slider.addEventListener('wheel', (e) => {
                cancelMomentumTracking();
            });
    
            function beginMomentumTracking() {
                cancelMomentumTracking();
                momentumID = requestAnimationFrame(momentumLoop);
                sliderItems.forEach((el, index) => {
                    if((parseInt(el.offsetLeft - slider.scrollLeft) < parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 60) &&
                    (parseInt(el.offsetLeft - slider.scrollLeft) > -parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 60))
                        currentItemsIndex.push(index);
                });
                if(currentItemsIndex.length > 0){
                    sliderIndicatorElements[currentItemsIndex[0]].classList.add('active');
                }else{
    
                    sliderIndicatorElements.forEach((el, index) => {
                        el.classList.remove('active');
                    });
                }
            }
    
            function cancelMomentumTracking() {
                cancelAnimationFrame(momentumID);
            }
    
            function momentumLoop() {
                slider.scrollLeft += velX * 2;
                velX *= 0.95;
                if (Math.abs(velX) > 0.5) {
                    momentumID = requestAnimationFrame(momentumLoop);
                }
                currentItemsIndex = [];
                sliderItems.forEach((el, index) => {
                    if((parseInt(el.offsetLeft - slider.scrollLeft) < parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 60) &&
                    (parseInt(el.offsetLeft - slider.scrollLeft) > -parseInt(getComputedStyle(el).getPropertyValue('width')) / 2 + 60))
                        currentItemsIndex.push(index);
                });
                if(currentItemsIndex.length > 0){
                    sliderIndicatorElements[currentItemsIndex[0]].classList.add('active');
                }else{
    
                    sliderIndicatorElements.forEach((el, index) => {
                        el.classList.remove('active');
                    });
                }
                
            }
    
            // Scroll
            const scrollContainer = document.querySelector(".business .cards-slider-inner");       
        }
    });
})();