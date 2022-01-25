(() => {
    const counters = document.querySelectorAll('header .counter');
    const speed = 700;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 0);
            }else{
            counter.innerText = value;
            }
        
    }
    
    animate();
    });
})();