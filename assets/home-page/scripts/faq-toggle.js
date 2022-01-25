(() => {
    let toggleButtons = Array.from(document.querySelectorAll('.faq .visible-part'));
    let toggleButtonsArrows = Array.from(document.querySelectorAll('.faq .visible-part img'))
    console.log(toggleButtons);
    console.log(toggleButtons[0].nextElementSibling);
    for(let i = 0; i < toggleButtons.length; i++){
        toggleButtons[i].onclick = () => {
            toggleButtons[i].nextElementSibling.classList.toggle('active');
            toggleButtonsArrows[i].classList.toggle('active');
        }
    }
})();

(() => {
    let submitted = false;
    let faqFormOpenButton = document.querySelector('.faq .more-questions-button');
    let faqForm = document.querySelector('.faq .faq-more-questions-form');
    let faqFormSubmitted = document.querySelector('.faq .faq-more-questions-form .formSubmittedMessage');
    faqFormOpenButton.onclick = () => {
        disableScroll();
        faqFormSubmitted.style.display = 'none';
        faqForm.style.display = 'flex';
        let faqFormCloseButton = document.querySelector('.faq .faq-more-questions-form .close-form');
        faqFormCloseButton.onclick = () => {
            faqForm.style.display = 'none';
            enableScroll();
        }
        faqForm.addEventListener('submit', (e) => {
            e.preventDefault();
            faqFormSubmitted.style.display = 'flex';
        })
    }
    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }
})();