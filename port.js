
const hamMenu = document.querySelector('.hamburger');
// variables for hambuger and off-screen-menu so we can target them later   
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Event listener for clicks outside the menu
document.body.addEventListener('click', function(event) {
    const isClickInsideMenu = offScreenMenu.contains(event.target);
    const isClickOnHamburger = hamMenu.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger) {
        // If the click is outside the menu and not on the hamburger, close the menu
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    }
});

const downloadBtn = document.getElementById("click-me")
downloadBtn.addEventListener("click", () => { 
    print();
})