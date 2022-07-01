const selectElement = selector => {
const element= document.querySelector (selector)
if (element) return element;
throw new Error(`Something went, make sue thay ${selector} 
exists or is typed correctly.`);
}

console.log(selectElement(`.navbar`));


const menuToggleIcon = selectElement(".menu-icon");


const toggleMenu = () => {
    const mobileMenu = selectElement(".menu");
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);