(() => {
    let pageContent = document.querySelector('.page-content');
    let sidebar = document.querySelector('.page-content .side-bar');
    let left = pageContent.getBoundingClientRect().left + parseInt(getComputedStyle(pageContent).getPropertyValue('padding-left'));
    let y = pageContent.getBoundingClientRect().top ;
    console.log(left);
    window.addEventListener('scroll', () => {
        if(window.innerWidth > 999){
            y = pageContent.getBoundingClientRect().top;
        if(scrollY >= y + scrollY - 66){
            sidebar.classList.add('sticky');
            sidebar.style.left = left + 'px'; 
        }
        else{
            sidebar.classList.remove('sticky');
            sidebar.style.left = '0px'; 
        }
        if(pageContent.getBoundingClientRect().height + y - sidebar.getBoundingClientRect().height < 0){
            sidebar.classList.remove('sticky');
        }
        }
    })
    window.addEventListener('resize', () => {
        if(window.innerWidth > 999){
            left = pageContent.getBoundingClientRect().left + parseInt(getComputedStyle(pageContent).getPropertyValue('padding-left'));
        console.log(left);
        y = pageContent.getBoundingClientRect().top;
        if(scrollY >= y + scrollY - 66){
            sidebar.classList.add('sticky');
            sidebar.style.left = left + 'px'; 
        }
        else{
            sidebar.classList.remove('sticky');
            sidebar.style.left = '0px'; 
        }
        if(pageContent.getBoundingClientRect().height + y - sidebar.getBoundingClientRect().height < 0){
            sidebar.classList.remove('sticky');
            
        }
        }
    })
})();

(() => {
    let businessSideBarLinks = document.querySelectorAll('.page-content .side-bar li a');
    for(let i = 0; i < businessSideBarLinks.length; i++)
        businessSideBarLinks[i].onclick = (e) => {
            e.preventDefault();
            businessSideBarLinks.forEach(function(element) {
                element.classList.remove("active");
            });
            businessSideBarLinks[i].classList.add('active');
        }
})();