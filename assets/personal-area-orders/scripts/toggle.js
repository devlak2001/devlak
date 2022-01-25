(() => {
    let toggleButtons = Array.from(document.querySelectorAll('.orders .visible-part'));
    let toggleButtonsArrows = Array.from(document.querySelectorAll('.orders .visible-part .arrow'))

    for(let i = 0; i < toggleButtons.length; i++){
        toggleButtons[i].onclick = () => {
            toggleButtons[i].nextElementSibling.classList.toggle('active');
            toggleButtonsArrows[i].classList.toggle('active');
        }
    }
})();